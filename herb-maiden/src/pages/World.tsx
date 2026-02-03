import { useState, useCallback } from 'react'
import './../App.css'
import { Image, Stage, Layer } from 'react-konva';
import useImage from 'use-image';
import { MAP_WORLD_DIMENSION } from '../common/constants'
import { useResizeObserver } from '../hooks/useResizeObserver';
import worldImg from '@assets/imgs/maps/World.png';
import { CITIES } from '../data/cities'
import png000i from '@assets/imgs/chars/000i.png';

function World(){
    const [image000] = useImage(png000i, 'anonymous', 'origin');
    const [worldImage] = useImage(worldImg, 'anonymous', 'origin');

    const handleResize = useCallback((size: { width: number; height: number }) => {
      console.log('div change:', size);
      const newScale = size.width / sceneWidth
      setStageSize({
        width: size.width,
        height: size.height,
        scale: newScale - 0.02,
      })
    }, []);

    const { ref: containerRef } = useResizeObserver<HTMLDivElement>(
      { onResize: handleResize }
    );

    // Define virtual size for our scene
    const sceneWidth = MAP_WORLD_DIMENSION.x;
    const sceneHeight = MAP_WORLD_DIMENSION.y;
    
    // State to track current scale and dimensions
    const [stageSize, setStageSize] = useState({
      width: sceneWidth,
      height: sceneHeight,
      scale: 1
    });

    return <>
        <div 
          ref={containerRef} 
          className='w-full h-full'        
        >
        <Stage 
          width={stageSize.width} height={stageSize.height}         
          scaleX={stageSize.scale}
          scaleY={stageSize.scale}> 
          
          <Layer>
            <Image
                key={0}
                image={worldImage}
                x={64}
                y={64}
                width={MAP_WORLD_DIMENSION.x}
                height={MAP_WORLD_DIMENSION.y}
                stroke="black"
                strokeWidth={50}
                cornerRadius={50}                
              />
          </Layer>
          <Layer>
          {
            CITIES.map((city) => (
              <Image
                key={city.name}
                image={image000}
                x={ parseInt(city.x) }
                y={ parseInt(city.y) }
                width={160}
                height={160}
                stroke="black"
                strokeWidth={24}
                cornerRadius={24}
                draggable              
              />
            ))
          }
          </Layer>
        </Stage>    
      </div>
    </>
}
export default World
