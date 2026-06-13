import React from "react";
import { View, Text, Modal, TouchableOpacity, Pressable } from "react-native";
import { X, Zap } from "lucide-react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onUpgrade: () => void;
};

const FEATURES = [
  { icon: "♾️", text: "ギアを無制限に登録" },
  { icon: "🔔", text: "交換時期のプッシュ通知" },
  { icon: "📊", text: "購入履歴・メンテ記録" },
];

export default function UpsellModal({ visible, onClose, onUpgrade }: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end", alignItems: "center", paddingBottom: 32, paddingHorizontal: 20 }}
        onPress={onClose}
      >
        <Pressable
          style={{ backgroundColor: "white", borderRadius: 24, padding: 24, width: "100%" }}
          onPress={(e) => e.stopPropagation()}
        >
          {/* 閉じるボタン */}
          <TouchableOpacity
            onPress={onClose}
            style={{ position: "absolute", top: 16, right: 16, backgroundColor: "#F1F5F9", borderRadius: 99, padding: 6 }}
          >
            <X size={16} color="#64748B" />
          </TouchableOpacity>

          {/* アイコン＆タイトル */}
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <View style={{ backgroundColor: "#ECFEFF", width: 56, height: 56, borderRadius: 16, alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
              <Zap size={28} color="#06B6D4" />
            </View>
            <Text style={{ color: "#0F172A", fontSize: 20, fontWeight: "700", textAlign: "center" }}>
              すべての管理から{"\n"}解放されましょう
            </Text>
            <Text style={{ color: "#64748B", fontSize: 13, textAlign: "center", marginTop: 6 }}>
              無制限のギア登録でもっとスマートに
            </Text>
          </View>

          {/* 特典リスト */}
          <View style={{ backgroundColor: "#F8FAFC", borderRadius: 16, padding: 16, marginBottom: 20, gap: 12 }}>
            {FEATURES.map((f) => (
              <View key={f.text} style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                <Text style={{ fontSize: 18 }}>{f.icon}</Text>
                <Text style={{ color: "#334155", fontSize: 14, fontWeight: "500" }}>{f.text}</Text>
              </View>
            ))}
          </View>

          {/* CTA */}
          <TouchableOpacity
            onPress={onUpgrade}
            style={{ backgroundColor: "#06B6D4", borderRadius: 16, paddingVertical: 16, alignItems: "center", marginBottom: 12 }}
          >
            <Text style={{ color: "white", fontWeight: "700", fontSize: 16 }}>
              プレミアムにアップグレード
            </Text>
            <Text style={{ color: "#CFFAFE", fontSize: 12, marginTop: 2 }}>
              月額 ¥480〜 • いつでもキャンセル可
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={{ alignItems: "center", paddingVertical: 8 }}>
            <Text style={{ color: "#94A3B8", fontSize: 14 }}>あとで</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
