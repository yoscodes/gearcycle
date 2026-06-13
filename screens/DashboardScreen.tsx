import React, { useState } from "react";
import { View, Text, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import { Settings, Plus } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import GearCard from "../components/GearCard";
import GearLogo from "../components/GearLogo";
import UpsellModal from "../components/UpsellModal";
import { useGear } from "../context/GearContext";
import { GearItem } from "../types/gear";
import { RootStackParamList } from "../types/navigation";

type Nav = NativeStackNavigationProp<RootStackParamList, "Dashboard">;

export default function DashboardScreen() {
  const navigation = useNavigation<Nav>();
  const { items, FREE_LIMIT, isAtLimit } = useGear();
  const [showUpsell, setShowUpsell] = useState(false);

  // 残り寿命が短い順（緊急度が高い順）
  const sorted = [...items].sort((a, b) => a.remainingPercent - b.remainingPercent);
  const criticalCount = items.filter((g) => g.remainingPercent <= 20).length;

  const handleAdd = () => {
    if (isAtLimit) {
      setShowUpsell(true);
    } else {
      navigation.navigate("AddItem");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar barStyle="dark-content" />

      {/* ヘッダー */}
      <View className="flex-row items-center justify-between px-5 pt-4 pb-1">
        <View className="flex-row items-center" style={{ gap: 8 }}>
          <GearLogo size={28} />
          <Text className="text-slate-900 text-lg font-bold tracking-tight">gearcycle</Text>
        </View>
        <TouchableOpacity className="bg-white border border-slate-200 p-2 rounded-xl">
          <Settings size={20} color="#64748B" />
        </TouchableOpacity>
      </View>

      {/* アイテム数 */}
      <View className="px-5 pt-1 pb-3">
        <Text className="text-slate-400 text-xs">
          <Text className="text-slate-700 font-semibold">{items.length}</Text>
          {" / "}{FREE_LIMIT} アイテム登録中
        </Text>
      </View>

      {/* 警告バナー */}
      {criticalCount > 0 && (
        <View className="mx-5 mb-3 bg-red-50 border border-red-200 rounded-2xl px-4 py-3">
          <Text className="text-red-500 text-sm font-medium">
            ⚠️ {criticalCount}件のアイテムが交換時期を迎えています
          </Text>
        </View>
      )}

      {/* リスト */}
      <FlatList<GearItem>
        data={sorted}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GearCard item={item} />}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 110 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="items-center justify-center py-20">
            <Text style={{ fontSize: 44 }}>⛺</Text>
            <Text className="text-slate-500 text-sm mt-3 font-medium">ギアをまだ登録していません</Text>
            <Text className="text-slate-400 text-xs mt-1">右下の ＋ から追加しましょう</Text>
          </View>
        }
      />

      {/* フローティング追加ボタン */}
      <TouchableOpacity
        onPress={handleAdd}
        style={{
          position: "absolute",
          bottom: 36,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: "#06B6D4",
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#06B6D4",
          shadowOpacity: 0.45,
          shadowRadius: 14,
          shadowOffset: { width: 0, height: 5 },
          elevation: 8,
        }}
      >
        <Plus size={28} color="#fff" />
      </TouchableOpacity>

      <UpsellModal
        visible={showUpsell}
        onClose={() => setShowUpsell(false)}
        onUpgrade={() => setShowUpsell(false)}
      />
    </SafeAreaView>
  );
}
