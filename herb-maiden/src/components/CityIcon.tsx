import React, { useState } from 'react';
import { Group, Rect, Image, Text } from 'react-konva';
import useImage from 'use-image';
import { getPublicImagePath } from '../common/Util';
import Konva from 'konva';
import KonvaImageWithLoader from './KonvaImageWithLoader';

interface CityIconProps {
  x?: number;
  y?: number;
  size?: number;
  imageSrc?: string; // URL or path to image
  name?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  showShadow?: boolean;
  shadowConfig?: {
    color?: string;
    blur?: number;
    offset?: { x: number; y: number };
    opacity?: number;
  };
  // Image customization
  imageConfig?: {
    padding?: number;
    cornerRadius?: number;
    opacity?: number;
  };
  // Text customization
  textConfig?: {
    text?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: string | number;
    fontStyle?: string;
    fill?: string;
    xOffset?: number; // Distance from bottom of icon
    yOffset?: number; // Distance from bottom of icon
    align?: 'left' | 'center' | 'right';
    width?: number;
    stroke?: string;
    strokeWidth?: number;
  };
  // Status indicators
  status?: {
    isSelected?: boolean;
    isActive?: boolean;
    isHighlighted?: boolean;
  };
  // Interactive events
  onClick?: (e: Konva.KonvaEventObject<MouseEvent>) => void;
  onHover?: (isHovered: boolean) => void;
  // Custom content
  draggable?: boolean | undefined;
  children?: React.ReactNode;
  [key: string]: any;
}

const CityIcon: React.FC<CityIconProps> = ({
  x = 0,
  y = 0,
  size = 100,
  imageSrc,
  name = 'City',
  backgroundColor = '#4CAF50',
  borderColor = '#2E7D32',
  borderWidth = 3,
  showShadow = true,
  shadowConfig = {
    color: 'black',
    blur: 10,
    offset: { x: 0, y: 5 },
    opacity: 0.3,
  },
  imageConfig = {
    padding: 10,
    cornerRadius: 8,
    opacity: 1,
  },
  textConfig = {
    text: name,
    fontSize: 32,
    fontFamily: 'LXGW WenKai Mono TC, Arial, sans-serif',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fill: 'white',
    yOffset: 10,
    align: 'center',
    width: size,
    stroke: 'black',
    strokeWidth: 1,
  },
  status = {
    isSelected: false,
    isActive: true,
    isHighlighted: false,
  },
  onClick,
  onHover,
  draggable,
  children,
  imageProp,
}) => {
  const [isHovered, setIsHovered] = useState(false);
//   const [image] = useImage(getPublicImagePath(imageSrc || ''), 'anonymous', 'origin');
//   console.log('imageSrc', imageSrc) 
  // Calculate positions and sizes
  const imageSize = size - (imageConfig.padding || 10) * 2;
  const imageX = imageConfig.padding || 10;
  const imageY = imageConfig.padding || 10;
  
  // Text position
  const textX = imageX + (textConfig.xOffset || 0);
  const textY = imageY + size + (textConfig.yOffset || 5);
  textConfig.width = imageSize;

  // Handle hover
  const handleMouseEnter = (e: Konva.KonvaEventObject<MouseEvent>) => {
    setIsHovered(true);
    e.cancelBubble = true;
    if (onHover) onHover(true);
    
    const stage = e.target.getStage();
    if (stage && (onClick || onHover)) {
      stage.container().style.cursor = 'pointer';
    }
  };

  const handleMouseLeave = (e: Konva.KonvaEventObject<MouseEvent>) => {
    setIsHovered(false);
    if (onHover) onHover(false);
    
    const stage = e.target.getStage();
    if (stage) {
      stage.container().style.cursor = 'default';
    }
  };

  const handleClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (onClick) {
      e.cancelBubble = true;
      onClick(e);
    }
  };

  // Determine colors based on state
  const getBackgroundColor = () => {
    if (status.isSelected) return '#2196F3';
    if (status.isHighlighted) return '#FF9800';
    if (isHovered) return '#66BB6A';
    return backgroundColor;
  };

  const getBorderColor = () => {
    if (status.isSelected) return '#1976D2';
    if (status.isHighlighted) return '#F57C00';
    if (isHovered) return '#4CAF50';
    return borderColor;
  };

  // Render selection indicator
  const renderSelectionIndicator = () => {
    if (!status.isSelected) return null;
    
    return (
      <Rect
        width={size + 10}
        height={size + 10}
        x={-5}
        y={-5}
        stroke="#2196F3"
        strokeWidth={2}
        dash={[10, 5]}
        cornerRadius={64}
      />
    );
  };

  return (
    <Group
      x={x}
      y={y}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    //   onTap={handleClick}
      draggable={draggable}
    >
      {/* Selection indicator */}
      {renderSelectionIndicator()}
      
      {/* Main background */}
      <Rect
        width={size}
        height={size}
        fill={getBackgroundColor()}
        stroke={getBorderColor()}
        strokeWidth={borderWidth}
        cornerRadius={10}
        shadowColor={showShadow ? shadowConfig.color : undefined}
        shadowBlur={showShadow ? shadowConfig.blur : 0}
        shadowOffset={showShadow ? shadowConfig.offset : undefined}
        shadowOpacity={showShadow ? shadowConfig.opacity : undefined}
      />
      
      {/* Image/city portrait */}
      {imageSrc && (
        <KonvaImageWithLoader
            key={name}
            src={imageSrc}
            x={ (imageX) }
            y={ (imageY) }
            width={imageSize}
            height={imageSize}
            cornerRadius={imageConfig.cornerRadius}
            opacity={imageConfig.opacity}
            {...imageProp}
        />
        // <Image
        //   image={image}
        //   width={imageSize}
        //   height={imageSize}
        //   x={imageX}
        //   y={imageY}
        //   cornerRadius={imageConfig.cornerRadius}
        //   opacity={imageConfig.opacity}
        //   {...imageProp}
        // />
      )}
      
      {/* City name */}
      { textConfig.text &&
       
      <Text
        text={textConfig.text}
        x={textX}
        y={textY}
        offsetX={0}
        offsetY={(textConfig.fontSize || 20) / 2}
        fill={textConfig.fill}
        fontSize={textConfig.fontSize}
        fontFamily={textConfig.fontFamily}
        fontStyle={textConfig.fontStyle}
        fontWeight={textConfig.fontWeight}
        align={textConfig.align}
        width={textConfig.width}
        stroke={textConfig.stroke}
        strokeWidth={textConfig.strokeWidth}
        shadowColor={'rgba(0,0,0,0.5)'}
        shadowBlur={2}
        // shadowColor={isHovered ? 'rgba(0,0,0,0.5)' : undefined}
        // shadowBlur={isHovered ? 2 : 0}
      />
      }
      
      
      {/* Custom children content */}
      {children}
    </Group>
  );
};

export default CityIcon;