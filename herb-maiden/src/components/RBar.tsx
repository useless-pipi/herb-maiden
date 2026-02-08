import { Group, Rect, Text } from 'react-konva';

interface RBarProps {
  x?: number;
  y?: number;
  width: number;
  height?: number;
  currentValue: number;
  maxValue: number;
  fillColor?: string;
  text?: string;
  showText?: boolean;
  barHeight?: number;
  backgroundColor?: string;
  borderRadius?: number;
  padding?: number;
}

const RBar: React.FC<RBarProps> = ({
  x = 0,
  y = 0,
  width,
  height = 20,
  currentValue: currentHP,
  maxValue: maxHP,
  fillColor = '#4CAF50',
  text,
  showText = true,
  barHeight = 16,
  backgroundColor = '#333',
  borderRadius = 10,
  padding = 2,
}) => {
  // Calculate the health percentage (ensure it's between 0 and 1)
  const percentage = Math.max(0, Math.min(1, currentHP / maxHP));
  
  // Calculate the width of the filled portion
  const filledWidth = percentage * (width - padding * 2);
  
  // Generate text if not provided
  const displayText = text || `${currentHP}/${maxHP}`;
  
  // Calculate inner bar corner radius (slightly smaller than outer)
  const innerRadius = Math.max(0, borderRadius - padding / 2);

  return (
    <Group x={x} y={y}>
      {/* Background Bar */}
      <Rect
        width={width}
        height={height}
        fill={backgroundColor}
        cornerRadius={borderRadius}
      />
      
      {/* Filled HP Bar */}
      <Rect
        width={filledWidth}
        height={barHeight}
        x={padding}
        y={(height - barHeight) / 2}
        fill={fillColor}
        cornerRadius={innerRadius}
      />
      
      {/* Text Overlay */}
      {showText && (
        <Text
          text={displayText}
          x={width / 2}
          y={height / 2}
          offsetX={width / 2}
          offsetY={6} // Half of typical font size for vertical centering
          fill="white"
          fontSize={12}
          align="center"
          width={width}
        />
      )}
    </Group>
  );
};

export default RBar;