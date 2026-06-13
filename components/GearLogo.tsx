import React from "react";
import Svg, { G, Rect, Circle } from "react-native-svg";

const TEETH = 8;
const INNER_R = 11;
const TOOTH_W = 4.5;
const TOOTH_H = 7;
const VIEWBOX = 36;
const C = VIEWBOX / 2;

// 右上象限（tooth index 0 = 0°、7 = 315°）を薄くする
function isFaded(index: number): boolean {
  return index === 0 || index === 7;
}

export default function GearLogo({
  size = 28,
  color = "#06B6D4",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}>
      <G transform={`translate(${C}, ${C})`}>
        {Array.from({ length: TEETH }).map((_, i) => {
          const angleDeg = (i * 360) / TEETH;
          const angleRad = (angleDeg * Math.PI) / 180;
          const dist = INNER_R + TOOTH_H / 2;
          const tx = Math.cos(angleRad) * dist;
          const ty = Math.sin(angleRad) * dist;
          return (
            <Rect
              key={i}
              x={-TOOTH_W / 2}
              y={-TOOTH_H / 2}
              width={TOOTH_W}
              height={TOOTH_H}
              rx={1}
              fill={color}
              opacity={isFaded(i) ? 0.2 : 1}
              transform={`translate(${tx}, ${ty}) rotate(${angleDeg})`}
            />
          );
        })}
        <Circle r={INNER_R} fill={color} />
        <Circle r={INNER_R * 0.45} fill="white" />
      </G>
    </Svg>
  );
}
