import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ArrowLeft, CheckCircle2 } from "lucide-react-native";
import { GEAR_TEMPLATES, GEAR_CATEGORIES, GearCategory, GearTemplate } from "../data/templates";
import { useGear } from "../context/GearContext";
import { RootStackParamList } from "../types/navigation";

type Nav = NativeStackNavigationProp<RootStackParamList, "AddItem">;

export default function AddItemScreen() {
  const navigation = useNavigation<Nav>();
  const { addItem, registeredTemplateIds } = useGear();
  const [selectedCategory, setSelectedCategory] = useState<GearCategory>("すべて");
  const [toastVisible, setToastVisible] = useState(false);

  const filtered =
    selectedCategory === "すべて"
      ? GEAR_TEMPLATES
      : GEAR_TEMPLATES.filter((t) => t.category === selectedCategory);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const handleSelect = (template: GearTemplate) => {
    const isRegistered = registeredTemplateIds.includes(template.id);
    if (isRegistered) {
      showToast();
      return;
    }
    addItem({
      id: `${template.id}_${Date.now()}`,
      templateId: template.id,
      name: template.name,
      category: template.category,
      icon: template.icon,
      lifespanMonths: template.defaultLifespanMonths,
      registeredAt: Date.now(),
      purchaseUrl: template.purchaseUrl,
      recommendedUrl: template.recommendedUrl,
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar barStyle="dark-content" />

      {/* ヘッダー */}
      <View className="flex-row items-center px-5 pt-4 pb-3" style={{ gap: 12 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-white border border-slate-200 p-2 rounded-xl"
        >
          <ArrowLeft size={20} color="#0F172A" />
        </TouchableOpacity>
        <View>
          <Text className="text-slate-900 text-xl font-bold">ギアを追加</Text>
          <Text className="text-slate-400 text-xs">タップするだけで登録できます</Text>
        </View>
      </View>

      {/* カテゴリフィルター */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 12,
          flexDirection: "row",
          gap: 8,
        }}
      >
        {GEAR_CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelectedCategory(cat)}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 99,
              borderWidth: 1,
              backgroundColor: selectedCategory === cat ? "#06B6D4" : "white",
              borderColor: selectedCategory === cat ? "#06B6D4" : "#E2E8F0",
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: "500",
                color: selectedCategory === cat ? "white" : "#475569",
              }}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* テンプレートグリッド */}
      <FlatList<GearTemplate>
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }}
        columnWrapperStyle={{ gap: 10, marginBottom: 10 }}
        renderItem={({ item }) => {
          const isRegistered = registeredTemplateIds.includes(item.id);
          return (
            <TouchableOpacity
              onPress={() => handleSelect(item)}
              style={{
                flex: 1,
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#E2E8F0",
                borderRadius: 16,
                padding: 12,
                alignItems: "center",
                gap: 6,
                opacity: isRegistered ? 0.5 : 1,
              }}
            >
              {/* 登録済みチェックバッジ */}
              {isRegistered && (
                <View style={{ position: "absolute", top: 6, right: 6 }}>
                  <CheckCircle2 size={18} color="#22C55E" />
                </View>
              )}
              <Text style={{ fontSize: 28 }}>{item.icon}</Text>
              <Text
                style={{
                  color: "#1E293B",
                  fontSize: 11,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                {item.name}
              </Text>
              <Text style={{ color: "#94A3B8", fontSize: 11 }}>
                {item.defaultLifespanMonths}ヶ月
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      {/* トースト通知 */}
      {toastVisible && (
        <View
          style={{
            position: "absolute",
            bottom: 40,
            alignSelf: "center",
            backgroundColor: "#1E293B",
            borderRadius: 99,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 13, fontWeight: "500" }}>
            すでに登録されています
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
