import { useState, useRef, useCallback } from 'react'
import './../App.css'
import { Image, Stage, Layer } from 'react-konva';
import useImage from 'use-image';
import png000 from '@assets/imgs/chars/000.png';
import png1001 from '@assets/imgs/enemy/1001.png';
import { CHAR_DIMENSION } from '../common/constants'
import { useResizeObserver } from '../hooks/useResizeObserver';
import { DynamicImage, type DynamicImageProps } from '../components/DynamicImage';

function Test2(){
    const [image000, status000] = useImage(png000, 'anonymous', 'origin');
    const [image1001, status1001] = useImage(png1001, 'anonymous', 'origin');
    
   const handleResize = useCallback((size: { width: number; height: number }, entry: ResizeObserverEntry) => {
         console.log('div change:', size);
         const newScale = size.width / sceneWidth
         setStageSize({
           width: size.width,
           height: size.height,
           scale: newScale,
         })
       }, []);
   
       const { ref: containerRef, width: containerWidth, height: containerHeight } = useResizeObserver<HTMLDivElement>(
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
            <DynamicImage
                  imagePath={"imgs/chars/999i.png"}
                  defaultImagePath="imgs/chars/000i.png"
                  x={20}
                  y={20}
                  width={200}
                  height={200}
                  cornerRadius={8}
                  showLoadingState={true}
                  showErrorState={true}
                  hoverEffect={true}
                  onClick={() => console.log('Click')}
                  onError={() => console.log('Error')}
                  draggable
                  stroke="red"
                  strokeWidth={10}
                />
            <DynamicImage
                  imagePath={"imgs/enemy/1001i.png"}
                  defaultImagePath="imgs/chars/000i.png"
                  x={210}
                  y={210}
                  width={200}
                  height={200}
                  cornerRadius={8}
                  showLoadingState={true}
                  showErrorState={true}
                  hoverEffect={true}
                  onClick={() => console.log('Click')}
                  onError={() => console.log('Error')}
                />
          </Layer>
        </Stage>    
      </div>
    </>
}
export default Test2
