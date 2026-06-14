import React from "react";
import { View, Text, TouchableOpacity, Linking, Alert } from "react-native";
import { ShoppingCart } from "lucide-react-native";
import ProgressBar from "./ProgressBar";
import { GearItem, computeRemainingPercent, getPerformanceInfo } from "../types/gear";
import { useGear } from "../context/GearContext";

type Props = {
  item: GearItem;
};

export default function GearCard({ item }: Props) {
  const { removeItem } = useGear();
  const remaining = computeRemainingPercent(item);
  const perf = getPerformanceInfo(remaining);

  const handleLongPress = () => {
    Alert.alert(
      item.name,
      "このギアの管理をやめますか？",
      [
        { text: "キャンセル", style: "cancel" },
        { text: "管理をやめる", style: "destructive", onPress: () => removeItem(item.id) },
      ]
    );
  };

  return (
    <TouchableOpacity
      onLongPress={handleLongPress}
      activeOpacity={0.85}
      className="bg-white rounded-2xl p-4 mb-4 border border-slate-200"
    >
      {/* ヘッダー */}
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center" style={{ gap: 12 }}>
          <View className="bg-slate-100 w-10 h-10 rounded-xl items-center justify-center">
            <Text style={{ fontSize: 20 }}>{item.icon}</Text>
          </View>
          <View>
            <Text className="text-slate-900 font-semibold text-base">{item.name}</Text>
            <Text className="text-slate-400 text-xs">{item.category}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL(item.recommendedUrl)}
          style={{
            backgroundColor: "#06B6D4",
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 8,
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <ShoppingCart size={14} color="#fff" />
          <Text style={{ color: "white", fontSize: 12, fontWeight: "600" }}>購入</Text>
        </TouchableOpacity>
      </View>

      {/* プログレスバー */}
      <ProgressBar percentage={remaining} />

      {/* フッター：パフォーマンスフレーミング */}
      <View className="flex-row items-center justify-between mt-2">
        <Text className="text-slate-400 text-xs">パフォーマンス</Text>
        <View className="flex-row items-center" style={{ gap: 8 }}>
          <Text style={{ color: perf.color, fontSize: 12, fontWeight: "500" }}>
            {perf.label}
          </Text>
          <Text className="text-slate-900 font-bold text-sm">{remaining}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
