import React from 'react';
import { useCharacterStore } from '../store/characterStore';
import RStage from '../components/RStage';
import CharacterIcon from '../components/CharIcon';
import { Layer } from 'react-konva';

interface CharacterListProps {
  margin?: number;
  columns?: number;
  spacing?: number;
  fontSize?: number;
}

export const CharacterList: React.FC<CharacterListProps> = ({
  margin = 8,
  columns = 3,
  spacing = 40,
  fontSize = 64,
}) => {
  const characters = useCharacterStore(state => state.characters);

  return (
    <RStage
        sceneWidth={1000}
        sceneHeight={1000}
        scaleMargin={0.02}
        containerProps={{
            // style: { backgroundColor: '#1a1a2e' },
            // className: 'world-container',
        }}
        stageProps={{
            draggable: true,
        }}
        isDragVBound
    >
    <Layer>                     
    {characters.map((character, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const posX = col * (300 + spacing) + margin;
        const posY = row * (340 + spacing + fontSize) + margin;
        
        return (
        <>
            <CharacterIcon
                key={'list_' + character.id}
                x={posX}
                y={posY}
                size={300}
                imageSrc={`${character.imgSrc}`}
                textConfig = {{
                    text: character.name,
                    fontSize: fontSize,
                    fontFamily: 'LXGW WenKai Mono TC Bold, Arial, sans-serif',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    fill: 'black',
                    xOffset: 0,
                    yOffset: 40,
                    width: 300,
                    align: 'center',
                    // stroke: 'black',
                    // strokeWidth: 1,
                }}
                name={`${character.name}`}
                draggable={false}
                onClick={() => { console.log('click'); }}
            />
        </>

          
        );
      })}
      </Layer>
    </RStage>
  );
};