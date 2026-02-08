import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import { getPublicImagePath } from '../common/Util';
import type Konva from 'konva';

interface KonvaImageWithLoaderProps {
  src: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  onClick?: (e: Konva.KonvaEventObject<MouseEvent>) => void;
  [key: string]: any;
}

const KonvaImageWithLoader: React.FC<KonvaImageWithLoaderProps> = ({
  src,
  x = 0,
  y = 0,
  width = 160,
  height = 160,
  clickEvent,
  ...otherProp
}) => {
  const [image] = useImage(getPublicImagePath(src), 'anonymous', 'origin');

  // Return null while loading
  if (!image) {
    return null;
  }
  
  return (
    <Image
      image={image}
      x={x}
      y={y}
      width={width}
      height={height}
      onClick={clickEvent}
      {...otherProp}
    />
  );
};

export default KonvaImageWithLoader;