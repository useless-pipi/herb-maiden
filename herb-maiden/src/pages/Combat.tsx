import { useState, useCallback } from 'react'
import './../App.css'
import useImage from 'use-image';
import { Stage, Layer, Image, Rect, Text, Group } from 'react-konva';
import { getPublicImagePath } from '../common/Util';
import RStage from '../components/RStage';
import RBar from '../components/RBar';
import CharacterIcon from '../components/CharIcon';

const Combat = () => {
  // 1. Load all img
  const [backgroundImage] = useImage(getPublicImagePath('bg/river.jpg'), 'anonymous', 'origin');
  const [playerImage] = useImage(getPublicImagePath('chars/000i.png'), 'anonymous', 'origin');
  const [enemyImage] = useImage(getPublicImagePath('enemy/1001i.png'), 'anonymous', 'origin');
  const [testHP, setTestHP] = useState(55);

  const SCENE_WIDTH = 1344;
  const SCENE_HEIGHT = 768;
  const ICON_SIZE = 200;
  const ICON_PADDING = 50;

  const playerX = ICON_PADDING;
  const playerY = (SCENE_HEIGHT - ICON_SIZE) / 2;
  const enemyX = SCENE_WIDTH - ICON_PADDING - ICON_SIZE;
  const enemyY = (SCENE_HEIGHT - ICON_SIZE) / 2;

  return (
    <RStage
        sceneWidth={SCENE_WIDTH}
        sceneHeight={SCENE_HEIGHT}
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
          {/* bg */}
          <Image 
            image={backgroundImage} 
            width={SCENE_WIDTH}
            height={SCENE_HEIGHT}
          />
          
          {/* pc */}
          <Group x={playerX} y={playerY}>
            <CharacterIcon
                x={0}
                y={0}
                size={ICON_SIZE}
                imageSrc={'chars/000i.png'}
                textConfig = {{
                    text: "中文字測試",
                    fontSize: 48,
                    fontFamily: 'LXGW WenKai Mono TC Bold, Arial, sans-serif',
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    fill: 'white',
                    xOffset: 0,
                    yOffset: 20,
                    width: ICON_SIZE,
                    align: 'center',
                    // stroke: 'black',
                    // strokeWidth: 1,
                }}
                name="中文字測試"
                draggable={true}
                onClick={() => { setTestHP(testHP => testHP - 10);}}
            />

            {/* pc bg */}
            {/* <Rect
              width={ICON_SIZE}
              height={ICON_SIZE}
              fill="#4CAF50"
              cornerRadius={10}
              stroke="#2E7D32"
              strokeWidth={3}
              shadowColor="black"
              shadowBlur={10}
            /> */}
            
            {/* pc pic */}
            {/* <Image
              image={playerImage}
              width={ICON_SIZE - 20}
              height={ICON_SIZE - 20}
              x={10}
              y={10}
              cornerRadius={8}
            /> */}
            
            {/* pic name */}
            {/* <Text
              text="Character Name"
              x={ICON_SIZE / 2}
              y={ICON_SIZE + 10}
              offsetX={ICON_SIZE / 2}
              fill="white"
              fontSize={20}
              fontStyle="bold"
              align="center"
              width={ICON_SIZE}
            /> */}
          </Group>
          
          {/* enemy char */}
          <Group x={enemyX} y={enemyY}>
            {/* enemy bg */}
            <Rect
              width={ICON_SIZE}
              height={ICON_SIZE}
              fill="#F44336"
              cornerRadius={10}
              stroke="#C62828"
              strokeWidth={3}
              shadowColor="black"
              shadowBlur={10}
            />
            
            {/* enemy img */}
            <Image
              image={enemyImage}
              width={ICON_SIZE - 20}
              height={ICON_SIZE - 20}
              x={10}
              y={10}
              cornerRadius={8}
            />
            
            {/* enemy name */}
            <Text
              text="敌人"
              x={ICON_SIZE / 2}
              y={ICON_SIZE + 10}
              offsetX={ICON_SIZE / 2}
              fill="white"
              fontSize={20}
              fontStyle="bold"
              align="center"
              width={ICON_SIZE}
            />
          </Group>
          
          {/* fight text */}
          <Text
            text="战斗开始！"
            x={SCENE_WIDTH / 2}
            y={30}
            offsetX={SCENE_WIDTH / 2}
            fill="white"
            fontSize={28}
            fontStyle="bold"
            align="center"
            width={SCENE_WIDTH}
            shadowColor="black"
            shadowBlur={5}
          />
          
          {/* seperate line */}
          <Rect
            x={SCENE_WIDTH / 2 - 2}
            y={100}
            width={4}
            height={SCENE_HEIGHT - 200}
            fill="#FF9800"
            shadowColor="black"
            shadowBlur={10}
          />
          
        {/* HP */}
        <Group>
            <RBar
                x={playerX}
                y={playerY - 40}
                width={200}
                currentValue={testHP}
                maxValue={100}
                fillColor="#4CAF50"
            />
            <RBar
                x={enemyX}
                y={enemyY - 40}
                width={200}
                currentValue={75}
                maxValue={100}
                fillColor="#F44336"
            />
            {/* <Group x={playerX} y={playerY - 40}>
                <Rect
                width={ICON_SIZE}
                height={20}
                fill="#333"
                cornerRadius={10}
                />
                
                <Rect
                width={ICON_SIZE * 0.5}  // 50%宽度
                height={16}
                x={2}
                y={2}
                fill="#4CAF50"
                cornerRadius={8}
                />
                
                <Text
                text="HP: 50/100"
                x={ICON_SIZE / 2}
                y={5}
                offsetX={ICON_SIZE / 2}
                fill="white"
                fontSize={12}
                align="center"
                width={ICON_SIZE}
                />
            </Group>
            
            <Group x={enemyX} y={enemyY - 40}>
                <Rect
                width={ICON_SIZE}
                height={20}
                fill="#333"
                cornerRadius={10}
                />
                
                <Rect
                width={ICON_SIZE * 0.5}  // 50%宽度
                height={16}
                x={2}
                y={2}
                fill="#F44336"
                cornerRadius={8}
                />
                
                <Text
                text="HP: 50/100"
                x={ICON_SIZE / 2}
                y={5}
                offsetX={ICON_SIZE / 2}
                fill="white"
                fontSize={12}
                align="center"
                width={ICON_SIZE}
                />
            </Group> */}
        </Group>
          
          {/* Buttons */}
          <Group
            x={SCENE_WIDTH / 2 - 60}
            y={SCENE_HEIGHT - 80}
          >
            <Rect
              width={120}
              height={50}
              fill="#FF9800"
              cornerRadius={10}
              stroke="#EF6C00"
              strokeWidth={2}
            />
            <Text
              text="攻击"
              x={60}
              y={25}
              offsetX={60}
              fill="white"
              fontSize={24}
              fontStyle="bold"
              align="center"
              width={120}
            />
          </Group>
        </Layer>
    </RStage>
  );
};

export default Combat;