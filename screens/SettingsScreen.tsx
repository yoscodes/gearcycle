import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ArrowLeft, Zap, MessageCircle, ChevronRight } from "lucide-react-native";
import UpsellModal from "../components/UpsellModal";
import { RootStackParamList } from "../types/navigation";

type Nav = NativeStackNavigationProp<RootStackParamList, "Settings">;

const FEEDBACK_URL = "https://example.com/feedback";

export default function SettingsScreen() {
  const navigation = useNavigation<Nav>();
  const [showUpsell, setShowUpsell] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar barStyle="dark-content" />

      {/* ヘッダー */}
      <View className="flex-row items-center px-5 pt-4 pb-3" style={{ gap: 12 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-white border border-slate-200 p-2 rounded-xl"
        >
          <ArrowLeft size={20} color="#64748B" />
        </TouchableOpacity>
        <Text className="text-slate-900 text-lg font-bold tracking-tight">設定</Text>
      </View>

      <View className="px-5 pt-2" style={{ gap: 12 }}>
        <TouchableOpacity
          onPress={() => setShowUpsell(true)}
          className="flex-row items-center bg-white border border-slate-200 rounded-2xl px-4 py-4"
          style={{ gap: 12 }}
        >
          <View className="bg-cyan-50 p-2 rounded-xl">
            <Zap size={18} color="#06B6D4" />
          </View>
          <Text className="flex-1 text-slate-800 text-sm font-semibold">
            プレミアムプランを見る
          </Text>
          <ChevronRight size={18} color="#CBD5E1" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL(FEEDBACK_URL)}
          className="flex-row items-center bg-white border border-slate-200 rounded-2xl px-4 py-4"
          style={{ gap: 12 }}
        >
          <View className="bg-slate-100 p-2 rounded-xl">
            <MessageCircle size={18} color="#64748B" />
          </View>
          <Text className="flex-1 text-slate-800 text-sm font-semibold">
            機能リクエスト・お問い合わせ
          </Text>
          <ChevronRight size={18} color="#CBD5E1" />
        </TouchableOpacity>
      </View>

      <UpsellModal visible={showUpsell} onClose={() => setShowUpsell(false)} />
    </SafeAreaView>
  );
}
