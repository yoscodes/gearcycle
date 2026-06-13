export type GearItem = {
  id: string;
  name: string;
  category: string;
  remainingPercent: number; // 0–100
  purchaseUrl: string;
  icon: string; // emoji fallback
};
