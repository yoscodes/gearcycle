import { GearItem } from "../types/gear";

const days = (n: number) => n * 24 * 60 * 60 * 1000;
const NOW = Date.now();

export const mockGearItems: GearItem[] = [
  {
    id: "1",
    templateId: "t1",
    name: "エアコンフィルター",
    category: "家電パーツ",
    icon: "🌬️",
    lifespanMonths: 3,
    registeredAt: NOW - days(79),
    recommendedUrl: "https://www.amazon.co.jp/s?k=エアコンフィルター+交換用+高性能&s=review-rank",
  },
  {
    id: "2",
    templateId: "t7",
    name: "トレッキングシューズ",
    category: "アウトドア",
    icon: "🥾",
    lifespanMonths: 18,
    registeredAt: NOW - days(335),
    recommendedUrl: "https://www.amazon.co.jp/s?k=トレッキングシューズ+防水+ゴアテックス&s=review-rank",
  },
  {
    id: "3",
    templateId: "t6",
    name: "テント",
    category: "アウトドア",
    icon: "⛺",
    lifespanMonths: 48,
    registeredAt: NOW - days(212),
    recommendedUrl: "https://www.amazon.co.jp/s?k=テント+ソロ+軽量+防水&s=review-rank",
  },
];
