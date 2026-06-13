import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { ShoppingCart } from "lucide-react-native";
import ProgressBar from "./ProgressBar";
import { GearItem } from "../types/gear";

type Props = {
  item: GearItem;
};

function getStatusLabel(pct: number): { label: string; color: string } {
  if (pct > 50) return { label: "良好", color: "#22C55E" };
  if (pct > 20) return { label: "要注意", color: "#EAB308" };
  return { label: "交換時期", color: "#EF4444" };
}

export default function GearCard({ item }: Props) {
  const status = getStatusLabel(item.remainingPercent);

  return (
    <View className="bg-white rounded-2xl p-4 mb-4 border border-slate-200">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center gap-3">
          <View className="bg-slate-100 w-10 h-10 rounded-xl items-center justify-center">
            <Text style={{ fontSize: 20 }}>{item.icon}</Text>
          </View>
          <View>
            <Text className="text-slate-900 font-semibold text-base">{item.name}</Text>
            <Text className="text-slate-400 text-xs">{item.category}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL(item.purchaseUrl)}
          className="bg-cyan-500 rounded-xl px-3 py-2 flex-row items-center gap-1"
        >
          <ShoppingCart size={14} color="#fff" />
          <Text className="text-white text-xs font-medium">購入</Text>
        </TouchableOpacity>
      </View>

      {/* Progress */}
      <ProgressBar percentage={item.remainingPercent} />

      {/* Footer */}
      <View className="flex-row items-center justify-between mt-2">
        <Text className="text-slate-400 text-xs">残り寿命</Text>
        <View className="flex-row items-center gap-2">
          <Text style={{ color: status.color }} className="text-xs font-medium">
            {status.label}
          </Text>
          <Text className="text-slate-900 font-bold text-sm">{item.remainingPercent}%</Text>
        </View>
      </View>
    </View>
  );
}
