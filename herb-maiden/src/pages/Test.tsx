import { useState, useRef, useCallback } from 'react'
import './../App.css'
import { Image, Stage, Layer } from 'react-konva';
import useImage from 'use-image';
import png000 from '@assets/imgs/chars/000.png';
import png1001 from '@assets/imgs/enemy/1001.png';
import { CHAR_DIMENSION } from '../common/constants'
import { useResizeObserver } from '../hooks/useResizeObserver';

function Test(){
    const [image000, status000] = useImage(png000, 'anonymous', 'origin');
    const [image1001, status1001] = useImage(png1001, 'anonymous', 'origin');
    
    const handleResize = useCallback((size: { width: number; height: number }, entry: ResizeObserverEntry) => {
      console.log('div change:', size);

    }, []);

    const { ref: containerRef, width: containerWidth, height } = useResizeObserver<HTMLDivElement>(
      { onResize: handleResize }
    );

    // Define virtual size for our scene
    const sceneWidth = 2000;
    const sceneHeight = 2000;
    
    // State to track current scale and dimensions
    const [stageSize, setStageSize] = useState({
      width: sceneWidth,
      height: sceneHeight,
      scale: 1
    });

    return <>
        <div 
          ref={containerRef} 
          className='w-screen h-screen'        
        >
        <Stage 
          width={sceneWidth} height={containerWidth / sceneWidth * sceneHeight}         
          scaleX={containerWidth / sceneWidth}
          scaleY={containerWidth / sceneWidth}> 
          <Layer>
            <Image
                key={0}
                image={image000}
                x={0}
                y={0}
                width={CHAR_DIMENSION.x}
                height={CHAR_DIMENSION.y}
                stroke="blue"
                strokeWidth={10}
                cornerRadius={10}
                draggable
              />
              <Image
                key={1}
                image={image1001}
                x={600}
                y={600}
                width={CHAR_DIMENSION.x}
                height={CHAR_DIMENSION.y}
                stroke="red"
                strokeWidth={10}
                cornerRadius={10}
                draggable
              />
          </Layer>
        </Stage>    
      </div>
    </>
}
export default Test
