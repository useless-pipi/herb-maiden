import './../App.css'
import { Image, Layer } from 'react-konva';
import useImage from 'use-image';
import { MAP_WORLD_DIMENSION } from '../common/constants'
import { getPublicImagePath } from '../common/Util';
import RStage from '../components/RStage';
import { useCityStore } from '../store/cityStore';
import KonvaImageWithLoader from '../components/KonvaImageWithLoader';

function World(){
    const [worldImage] = useImage(getPublicImagePath('maps/World.jpg'), 'anonymous', 'origin');

    // Define virtual size for our scene
    const sceneWidth = MAP_WORLD_DIMENSION.x;
    const sceneHeight = MAP_WORLD_DIMENSION.y;

    const cities = useCityStore(state => state.cities);

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
            draggable: true,
          }}
          isWheelZoom
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
            cities.map((city) => (
              <KonvaImageWithLoader
                key={city.name}
                src={city.imgSrc}
                x={ (city.x) }
                y={ (city.y) }
                width={160}
                height={160}
                stroke="black"
                strokeWidth={24}
                cornerRadius={24}
              />
            ))
          }
          </Layer>
        </RStage>
    </>
}
export default World
