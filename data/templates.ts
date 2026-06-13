export type GearTemplate = {
  id: string;
  name: string;
  category: string;
  icon: string;
  defaultLifespanMonths: number;
  purchaseUrl: string;
};

export const GEAR_CATEGORIES = [
  "すべて",
  "家電パーツ",
  "アウトドア",
  "カメラ",
  "シューズ",
  "その他",
] as const;

export type GearCategory = (typeof GEAR_CATEGORIES)[number];

export const GEAR_TEMPLATES: GearTemplate[] = [
  { id: "t1",  name: "エアコンフィルター",    category: "家電パーツ", icon: "🌬️", defaultLifespanMonths: 3,  purchaseUrl: "https://www.amazon.co.jp/s?k=エアコンフィルター" },
  { id: "t2",  name: "炊飯器の内蓋",          category: "家電パーツ", icon: "🍚", defaultLifespanMonths: 24, purchaseUrl: "https://www.amazon.co.jp/s?k=炊飯器+内蓋" },
  { id: "t3",  name: "洗濯機フィルター",       category: "家電パーツ", icon: "🧺", defaultLifespanMonths: 6,  purchaseUrl: "https://www.amazon.co.jp/s?k=洗濯機+フィルター" },
  { id: "t4",  name: "空気清浄機フィルター",   category: "家電パーツ", icon: "💨", defaultLifespanMonths: 12, purchaseUrl: "https://www.amazon.co.jp/s?k=空気清浄機+フィルター" },
  { id: "t5",  name: "掃除機フィルター",       category: "家電パーツ", icon: "🧹", defaultLifespanMonths: 6,  purchaseUrl: "https://www.amazon.co.jp/s?k=掃除機+フィルター" },
  { id: "t6",  name: "テント",                category: "アウトドア", icon: "⛺", defaultLifespanMonths: 48, purchaseUrl: "https://www.amazon.co.jp/s?k=テント" },
  { id: "t7",  name: "トレッキングシューズ",   category: "アウトドア", icon: "🥾", defaultLifespanMonths: 18, purchaseUrl: "https://www.amazon.co.jp/s?k=トレッキングシューズ" },
  { id: "t8",  name: "ヘッドランプ",          category: "アウトドア", icon: "🔦", defaultLifespanMonths: 24, purchaseUrl: "https://www.amazon.co.jp/s?k=ヘッドランプ" },
  { id: "t9",  name: "寝袋",                  category: "アウトドア", icon: "🛏️", defaultLifespanMonths: 60, purchaseUrl: "https://www.amazon.co.jp/s?k=寝袋" },
  { id: "t10", name: "NDフィルター",           category: "カメラ",    icon: "📷", defaultLifespanMonths: 36, purchaseUrl: "https://www.amazon.co.jp/s?k=NDフィルター" },
  { id: "t11", name: "カメラバッテリー",       category: "カメラ",    icon: "🔋", defaultLifespanMonths: 24, purchaseUrl: "https://www.amazon.co.jp/s?k=カメラ+バッテリー" },
  { id: "t12", name: "レンズ保護フィルター",   category: "カメラ",    icon: "🔭", defaultLifespanMonths: 12, purchaseUrl: "https://www.amazon.co.jp/s?k=レンズ+保護フィルター" },
  { id: "t13", name: "ランニングシューズ",     category: "シューズ",  icon: "👟", defaultLifespanMonths: 8,  purchaseUrl: "https://www.amazon.co.jp/s?k=ランニングシューズ" },
  { id: "t14", name: "インソール",             category: "シューズ",  icon: "🦶", defaultLifespanMonths: 6,  purchaseUrl: "https://www.amazon.co.jp/s?k=インソール" },
  { id: "t15", name: "歯ブラシ",              category: "その他",    icon: "🪥", defaultLifespanMonths: 3,  purchaseUrl: "https://www.amazon.co.jp/s?k=歯ブラシ" },
  { id: "t16", name: "自転車チェーン",         category: "その他",    icon: "🚲", defaultLifespanMonths: 12, purchaseUrl: "https://www.amazon.co.jp/s?k=自転車+チェーン" },
  { id: "t17", name: "ウォーターフィルター",   category: "その他",    icon: "💧", defaultLifespanMonths: 6,  purchaseUrl: "https://www.amazon.co.jp/s?k=ウォーターフィルター" },
];
