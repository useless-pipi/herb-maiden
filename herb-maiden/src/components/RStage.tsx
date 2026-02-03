import React, { useState, useCallback, type ReactNode } from 'react';
import { Stage, type StageProps } from 'react-konva';
import { useResizeObserver } from '../hooks/useResizeObserver';

export interface RStageProps {
  sceneWidth: number;
  sceneHeight: number;
  children: ReactNode;
  scaleMargin?: number;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  stageProps?: Omit<StageProps, 'width' | 'height' | 'scaleX' | 'scaleY' | 'children'>;
}

const RStage: React.FC<RStageProps> = ({
  sceneWidth,
  sceneHeight,
  children,
  scaleMargin = 0.02,
  containerProps = {},
  stageProps = {},
}) => {
  const [stageSize, setStageSize] = useState({
    width: sceneWidth,
    height: sceneHeight,
    scale: 1,
  });

  const handleResize = useCallback((size: { width: number; height: number }) => {
    const scaleX = size.width / sceneWidth;
    const scaleY = size.height / sceneHeight;

    const scale = Math.min(scaleX, scaleY) * (1 - scaleMargin);
    console.log('scale', scale)
    setStageSize({
      width: size.width,
      height: size.height,
      scale,
    });
  }, [sceneWidth, sceneHeight, scaleMargin]);

  const { ref: containerRef } = useResizeObserver<HTMLDivElement>({
    onResize: handleResize,
  });

  return (
    <div 
      ref={containerRef}
      className='w-full h-full'
      {...containerProps}
    >
      <Stage 
        width={stageSize.width}
        height={stageSize.height}
        scaleX={stageSize.scale}
        scaleY={stageSize.scale}
        {...stageProps}
      >
        {children}
      </Stage>
    </div>
  );
};

export default RStage;