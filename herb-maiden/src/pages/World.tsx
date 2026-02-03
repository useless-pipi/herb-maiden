import { useState, useCallback } from 'react'
import './../App.css'
import { Image, Stage, Layer } from 'react-konva';
import useImage from 'use-image';
import { MAP_WORLD_DIMENSION } from '../common/constants'
import { useResizeObserver } from '../hooks/useResizeObserver';
import { CITIES } from '../data/cities'
import { getPublicImagePath } from '../common/Util';
import RStage from '../components/RStage';

function World(){
    const [image000] = useImage(getPublicImagePath('chars/000i.png'), 'anonymous', 'origin');
    const [worldImage] = useImage(getPublicImagePath('maps/World.jpg'), 'anonymous', 'origin');

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
        <RStage
          sceneWidth={sceneWidth}
          sceneHeight={sceneHeight}
          scaleMargin={0.02}
          containerProps={{
            // style: { backgroundColor: '#1a1a2e' },
            // className: 'world-container',
          }}
          stageProps={{
            // draggable: true,
          }}
        >
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
        </RStage>
    </>
}
export default World
