import React, { useState, useCallback, type ReactNode } from 'react';
import { Stage, type StageProps } from 'react-konva';
import { useResizeObserver } from '../hooks/useResizeObserver';
import './component.css'

export interface RStageProps {
  sceneWidth: number;
  sceneHeight: number;
  children: ReactNode;
  scaleMargin?: number;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  stageProps?: Omit<StageProps, 'width' | 'height' | 'scaleX' | 'scaleY' | 'children'>;
  isDragVBound?: boolean | undefined;
  isStageHCenter?: boolean | undefined;
}

const RStage: React.FC<RStageProps> = ({
  sceneWidth,
  sceneHeight,
  children,
  scaleMargin = 0.02,
  containerProps = {},
  stageProps = {},
  isDragVBound = false,
  isStageHCenter = true,
}) => {
  const [stageSize, setStageSize] = useState({
    width: sceneWidth,
    height: sceneHeight,
    scale: 1,
  });

  // Initial stage position
  const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 });

  // Function to constrain dragging to the vertical axis only
  const handleDragBound = (pos: any) => {
    // Return an object with the original x position and the new y position
    return {
      x: stagePosition.x, // Keep the original X position
      y: pos.y,           // Allow the new Y position
    };
  };

  const handleDragEnd = (e: any) => {
    // Update the state with the final position after dragging ends
    setStagePosition({
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  const handleResize = useCallback((size: { width: number; height: number }) => {
    const scaleX = size.width / sceneWidth;
    const scaleY = size.height / sceneHeight;

    const scale = Math.min(scaleX, scaleY) * (1 - scaleMargin);
    console.log(`scale X:${scaleX} Y:${scaleY}`, scale)
    setStageSize({
      width: size.width,
      height: size.height,
      scale,
    });

    // if (isStageHCenter) setStagePosition((value) => ({
    //   ...value,
    //   x: size.width * (1 - Math.max(scaleX, scaleY)) / 2,
    // }));

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
        // x={stagePosition.x}
        // y={stagePosition.y}
        width={stageSize.width}
        height={stageSize.height}
        scaleX={stageSize.scale}
        scaleY={stageSize.scale}
        {...stageProps}
        dragBoundFunc={isDragVBound ? handleDragBound : undefined}
        onDragEnd={handleDragEnd}
      >
        {children}
      </Stage>
    </div>
  );
};

export default RStage;