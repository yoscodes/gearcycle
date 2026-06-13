import { GearItem } from "../types/gear";

export const mockGearItems: GearItem[] = [
  {
    id: "1",
    name: "エアコンフィルター",
    category: "家電パーツ",
    remainingPercent: 15,
    purchaseUrl: "https://www.amazon.co.jp/s?k=エアコンフィルター",
    icon: "🌬️",
  },
  {
    id: "2",
    name: "トレッキングシューズ",
    category: "アウトドア",
    remainingPercent: 38,
    purchaseUrl: "https://www.amazon.co.jp/s?k=トレッキングシューズ",
    icon: "🥾",
  },
  {
    id: "3",
    name: "テント",
    category: "アウトドア",
    remainingPercent: 82,
    purchaseUrl: "https://www.amazon.co.jp/s?k=テント",
    icon: "⛺",
  },
];
