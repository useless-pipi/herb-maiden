// src/components/konva/DynamicImage.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Image as KonvaImage, Group, Rect, Text, Circle } from 'react-konva';
import useImage from 'use-image';

export interface DynamicImageProps {
  imagePath: string;
  defaultImagePath?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  cornerRadius?: number;
  showLoadingState?: boolean;
  showErrorState?: boolean;
  hoverEffect?: boolean;
  onClick?: (event: any) => void;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  [key: string]: any;
}

export const DynamicImage: React.FC<DynamicImageProps> = ({
  imagePath,
  defaultImagePath = 'imgs/chars/999.png',
  x = 0,
  y = 0,
  width = 768,
  height = 1280,
  cornerRadius = 8,
  showLoadingState = true,
  showErrorState = true,
  hoverEffect = true,
  onClick,
  onLoad,
  onError,
  ...konvaProps
}) => {
  // 状态管理
  const [currentImagePath, setCurrentImagePath] = useState<string>('');
  const [image, status] = useImage(currentImagePath);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loadAttempts, setLoadAttempts] = useState(0);

  const MAX_RETRIES = 2;
  const isProduction = import.meta.env.PROD;
  const base = isProduction ? import.meta.env.BASE_URL : '../';

  const loadDynamicImage = useCallback(async (
    targetPath: string, 
    isRetry: boolean = false
  ) => {
    try {
      console.log(`${isRetry ? 'retry' : 'start retry'}: ${targetPath}`);

      // dynamic import
      const module = await import(`${base}assets/${targetPath}`);
    //   console.log(`?${module}`)
      
      if (module.default) {
        console.log(`load success: ${base}assets/${targetPath}`);
        setCurrentImagePath(module.default);
        setHasError(false);
        setLoadAttempts(0);
        onLoad?.();
        return true;
      }
      
    } catch (error) {
      console.error(`load fail: assets/${targetPath}`, error);
      
      if (!isRetry && loadAttempts < MAX_RETRIES) {
        // reload logic
        setLoadAttempts(prev => prev + 1);
        setTimeout(() => {
          loadDynamicImage(targetPath, true);
        }, 1000 * loadAttempts);
        return false;
      }
      
      // finally fail
      setHasError(true);
      onError?.(error as Error);
      return false;
    }
  }, [loadAttempts, onLoad, onError]);

  /**
   * load default
   */
  const loadDefaultImage = useCallback(async () => {
    try {
      const module = await import(`${base}assets/${defaultImagePath}`);
      if (module.default) {
        setCurrentImagePath(module.default);
      }
    } catch (error) {
      console.error('load default fails:', error);
      // use transparent image
      setCurrentImagePath('');
    }
  }, [defaultImagePath]);

  // main load
  useEffect(() => {
    let isMounted = true;
    
    const loadImage = async () => {
      if (!imagePath) {
        await loadDefaultImage();
        return;
      }
      
      const success = await loadDynamicImage(imagePath);
      if (!success && isMounted) {
        await loadDefaultImage();
      }
    };
    
    if (isMounted) {
      loadImage();
    }
    
    return () => {
      isMounted = false;
    };
  }, [imagePath, loadDynamicImage, loadDefaultImage]);

  /**
   * manual reload
   */
  const reloadImage = useCallback(async () => {
    setHasError(false);
    setLoadAttempts(0);
    await loadDynamicImage(imagePath);
  }, [imagePath, loadDynamicImage]);

  const renderLoadingState = () => (
    <Group x={x} y={y}>
      <Rect
        width={width}
        height={height}
        fill="linear-gradient(45deg, #f8f9fa 25%, #e9ecef 50%, #f8f9fa 75%)"
        cornerRadius={cornerRadius}
        stroke="#dee2e6"
        strokeWidth={1}
      />
      
      {/* load animation */}
      <Circle
        x={width / 2}
        y={height / 2}
        radius={15}
        fill="transparent"
        stroke="#3498db"
        strokeWidth={3}
        dash={[10, 5]}
        rotation={loadAttempts * 10}
      />
      
      <Text
        text={`Loading${'.'.repeat((loadAttempts % 3) + 1)}`}
        x={width / 2}
        y={height / 2 + 40}
        offsetX={35}
        offsetY={8}
        fill="#495057"
        fontSize={12}
        align="center"
      />
      
      <Text
        text={imagePath.split('/').pop()}
        x={width / 2}
        y={height + 15}
        offsetX={50}
        fill="#6c757d"
        fontSize={10}
        align="center"
        width={width}
      />
    </Group>
  );

  const renderErrorState = () => (
    <Group 
      x={x} 
      y={y}
      onClick={reloadImage}
      onMouseEnter={(e) => {
        e.target.getStage()!.container().style.cursor = 'pointer';
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        e.target.getStage()!.container().style.cursor = 'default';
        setIsHovered(false);
      }}
    >
      <Rect
        width={width}
        height={height}
        fill={isHovered ? "#fff5f5" : "#ffe3e3"}
        cornerRadius={cornerRadius}
        stroke="#ff6b6b"
        strokeWidth={2}
        shadowColor={isHovered ? "#ff6b6b" : undefined}
        shadowBlur={isHovered ? 10 : 0}
        shadowOpacity={0.3}
      />
      
      {/* Error Image */}
      <Group x={width / 2} y={height / 2 - 20}>
        <Circle
          radius={20}
          fill="#ff6b6b"
        />
        <Text
          text="!"
          x={2}
          y={-10}
          offsetX={6}
          fill="white"
          fontSize={24}
          fontStyle="bold"
        />
      </Group>
      
      <Text
        text="Load Fail"
        x={width / 2}
        y={height / 2 + 25}
        offsetX={25}
        fill="#c92a2a"
        fontSize={14}
        fontStyle="bold"
        align="center"
      />
      
      <Text
        text="Click to reload"
        x={width / 2}
        y={height / 2 + 50}
        offsetX={30}
        fill="#ff8787"
        fontSize={11}
        align="center"
      />
      
      {/* Error Msg */}
      {/* <Text
        text={`Path: ${imagePath}`}
        x={width / 2}
        y={height + 20}
        offsetX={width / 2}
        fill="#868e96"
        fontSize={9}
        align="center"
        width={width}
        wrap="word"
      /> */}
    </Group>
  );

  const renderImageContent = () => {
    if (!image) {
      return (
        <Rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill="#f8f9fa"
          cornerRadius={cornerRadius}
          stroke="#dee2e6"
          strokeWidth={1}
        />
      );
    }

    return (
      <KonvaImage
        image={image}
        x={x}
        y={y}
        width={width}
        height={height}
        cornerRadius={cornerRadius}
        shadowColor={isHovered && hoverEffect ? "black" : undefined}
        shadowBlur={isHovered && hoverEffect ? 10 : 0}
        shadowOpacity={isHovered && hoverEffect ? 0.3 : 0}
        scaleX={isHovered && hoverEffect ? 1.02 : 1}
        scaleY={isHovered && hoverEffect ? 1.02 : 1}
        onMouseEnter={(e) => {
          if (hoverEffect) {
            e.target.getStage()!.container().style.cursor = 'pointer';
            setIsHovered(true);
          }
        }}
        onMouseLeave={(e) => {
          if (hoverEffect) {
            e.target.getStage()!.container().style.cursor = 'default';
            setIsHovered(false);
          }
        }}
        onClick={onClick}
        {...konvaProps}
      />
    );
  };

//   const renderImageLabel = () => {
//     if (!imagePath) return null;
    
//     const fileName = imagePath.split('/').pop();
    
//     return (
//       <Text
//         x={x + width / 2}
//         y={y + height + 15}
//         offsetX={width / 2}
//         text={fileName}
//         fill="#495057"
//         fontSize={11}
//         align="center"
//         width={width}
//         wrap="word"
//       />
//     );
//   };

  /**
   * Status determine
   */
  if (status === 'loading' && showLoadingState) {
    return renderLoadingState();
  }

  if (hasError && showErrorState) {
    return (
      <>
        {renderErrorState()}
        {/* {renderImageLabel()} */}
      </>
    );
  }

  return (
    <>
      {renderImageContent()}
      {/* {renderImageLabel()} */}
    </>
  );
};

export default DynamicImage;

