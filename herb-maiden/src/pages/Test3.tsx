import { useState, useCallback } from 'react'
import './../App.css'
import { Image, Stage, Layer } from 'react-konva';
import useImage from 'use-image';
import { CHAR_DIMENSION } from '../common/constants'
import { useResizeObserver } from '../hooks/useResizeObserver';
import { getPublicImagePath } from '../common/Util';

function Test3(){
    const [image000] = useImage(getPublicImagePath('chars/000.png'), 'anonymous', 'origin');
    const [image1001] = useImage(getPublicImagePath('enemy/1001.png'), 'anonymous', 'origin');
    
    //  const handleResize = useCallback((size: { width: number; height: number }, entry: ResizeObserverEntry) => {
   const handleResize = useCallback((size: { width: number; height: number }) => {
         const newScale = size.width / sceneWidth
         setStageSize({
           width: size.width,
           height: size.height,
           scale: newScale,
         })
       }, []);
   
       const { ref: containerRef } = useResizeObserver<HTMLDivElement>(
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
          width={stageSize.width} height={stageSize.height}         
          scaleX={stageSize.scale}
          scaleY={stageSize.scale}> 
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
export default Test3
