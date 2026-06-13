import React from "react";
import { View } from "react-native";

type Props = {
  percentage: number; // 0–100
};

function getBarColor(pct: number): string {
  if (pct > 50) return "#22C55E"; // green
  if (pct > 20) return "#EAB308"; // yellow
  return "#EF4444";               // red
}

export default function ProgressBar({ percentage }: Props) {
  const clamped = Math.min(100, Math.max(0, percentage));
  const color = getBarColor(clamped);

  return (
    <View className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
      <View
        style={{ width: `${clamped}%`, backgroundColor: color }}
        className="h-full rounded-full"
      />
    </View>
  );
}
