export type GearItem = {
  id: string;
  templateId: string; // テンプレートのID（重複判定に使用）
  name: string;
  category: string;
  icon: string;
  lifespanMonths: number;
  registeredAt: number; // Unix timestamp (ms)
  purchaseUrl: string;
  recommendedUrl: string;
};

export function computeRemainingPercent(item: GearItem): number {
  const lifespanMs = item.lifespanMonths * 30 * 24 * 60 * 60 * 1000;
  const elapsed = Date.now() - item.registeredAt;
  return Math.max(0, Math.round(((lifespanMs - elapsed) / lifespanMs) * 100));
}

export function getPerformanceInfo(remaining: number): { label: string; color: string } {
  const degraded = 100 - remaining;
  if (remaining > 80) return { label: "最高のコンディション", color: "#22C55E" };
  if (remaining > 50) return { label: `▼${degraded}%低下中`, color: "#EAB308" };
  if (remaining > 20) return { label: `▼${degraded}%低下中`, color: "#F97316" };
  return { label: `▼${degraded}%低下`, color: "#EF4444" };
}
