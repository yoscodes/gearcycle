export type GearTemplate = {
  id: string;
  name: string;
  category: string;
  icon: string;
  defaultLifespanMonths: number;
  recommendedUrl: string;
};

export const GEAR_CATEGORIES = [
  "すべて",
  "家電パーツ",
  "アウトドア",
  "カメラ",
  "シューズ",
  "自転車",
  "キッチン",
  "その他",
] as const;

export type GearCategory = (typeof GEAR_CATEGORIES)[number];

export const GEAR_TEMPLATES: GearTemplate[] = [
  // ── 家電パーツ ──────────────────────────────────────
  {
    id: "t1", name: "エアコンフィルター", category: "家電パーツ", icon: "🌬️",
    defaultLifespanMonths: 3,
    recommendedUrl: "https://www.amazon.co.jp/s?k=エアコンフィルター+交換用+高性能&s=review-rank",
  },
  {
    id: "t2", name: "炊飯器の内蓋", category: "家電パーツ", icon: "🍚",
    defaultLifespanMonths: 24,
    recommendedUrl: "https://www.amazon.co.jp/s?k=炊飯器+内蓋+パッキン+純正&s=review-rank",
  },
  {
    id: "t3", name: "洗濯機フィルター", category: "家電パーツ", icon: "🧺",
    defaultLifespanMonths: 6,
    recommendedUrl: "https://www.amazon.co.jp/s?k=洗濯機+糸くずフィルター+交換&s=review-rank",
  },
  {
    id: "t4", name: "空気清浄機フィルター", category: "家電パーツ", icon: "💨",
    defaultLifespanMonths: 12,
    recommendedUrl: "https://www.amazon.co.jp/s?k=空気清浄機+交換フィルター+集塵&s=review-rank",
  },
  {
    id: "t5", name: "掃除機フィルター", category: "家電パーツ", icon: "🧹",
    defaultLifespanMonths: 6,
    recommendedUrl: "https://www.amazon.co.jp/s?k=掃除機+HEPAフィルター+交換&s=review-rank",
  },
  {
    id: "t18", name: "LED電球", category: "家電パーツ", icon: "💡",
    defaultLifespanMonths: 12,
    recommendedUrl: "https://www.amazon.co.jp/s?k=LED電球+長寿命+省エネ&s=review-rank",
  },
  {
    id: "t19", name: "食洗機フィルター", category: "家電パーツ", icon: "🍽️",
    defaultLifespanMonths: 6,
    recommendedUrl: "https://www.amazon.co.jp/s?k=食器洗い機+フィルター+交換&s=review-rank",
  },
  {
    id: "t20", name: "冷蔵庫脱臭剤", category: "家電パーツ", icon: "❄️",
    defaultLifespanMonths: 6,
    recommendedUrl: "https://www.amazon.co.jp/s?k=冷蔵庫+脱臭+活性炭&s=review-rank",
  },
  {
    id: "t21", name: "シャワーヘッドフィルター", category: "家電パーツ", icon: "🚿",
    defaultLifespanMonths: 3,
    recommendedUrl: "https://www.amazon.co.jp/s?k=シャワーヘッド+塩素除去+フィルター&s=review-rank",
  },
  {
    id: "t22", name: "浄水ポットフィルター", category: "家電パーツ", icon: "🚰",
    defaultLifespanMonths: 2,
    recommendedUrl: "https://www.amazon.co.jp/s?k=浄水ポット+交換カートリッジ&s=review-rank",
  },

  // ── アウトドア ──────────────────────────────────────
  {
    id: "t6", name: "テント", category: "アウトドア", icon: "⛺",
    defaultLifespanMonths: 48,
    recommendedUrl: "https://www.amazon.co.jp/s?k=テント+ソロ+軽量+防水&s=review-rank",
  },
  {
    id: "t7", name: "トレッキングシューズ", category: "アウトドア", icon: "🥾",
    defaultLifespanMonths: 18,
    recommendedUrl: "https://www.amazon.co.jp/s?k=トレッキングシューズ+防水+ゴアテックス&s=review-rank",
  },
  {
    id: "t8", name: "ヘッドランプ", category: "アウトドア", icon: "🔦",
    defaultLifespanMonths: 24,
    recommendedUrl: "https://www.amazon.co.jp/s?k=ヘッドランプ+登山+明るい+充電式&s=review-rank",
  },
  {
    id: "t9", name: "寝袋", category: "アウトドア", icon: "🛏️",
    defaultLifespanMonths: 60,
    recommendedUrl: "https://www.amazon.co.jp/s?k=寝袋+ダウン+コンパクト+軽量&s=review-rank",
  },
  {
    id: "t23", name: "レインウェア", category: "アウトドア", icon: "🧥",
    defaultLifespanMonths: 36,
    recommendedUrl: "https://www.amazon.co.jp/s?k=レインウェア+登山+ゴアテックス+軽量&s=review-rank",
  },
  {
    id: "t24", name: "トレッキングポール", category: "アウトドア", icon: "🪄",
    defaultLifespanMonths: 48,
    recommendedUrl: "https://www.amazon.co.jp/s?k=トレッキングポール+カーボン+軽量&s=review-rank",
  },
  {
    id: "t25", name: "登山グローブ", category: "アウトドア", icon: "🧤",
    defaultLifespanMonths: 24,
    recommendedUrl: "https://www.amazon.co.jp/s?k=登山グローブ+防水+防寒&s=review-rank",
  },
  {
    id: "t26", name: "バックパック", category: "アウトドア", icon: "🎒",
    defaultLifespanMonths: 60,
    recommendedUrl: "https://www.amazon.co.jp/s?k=登山バックパック+30L+軽量&s=review-rank",
  },

  // ── カメラ ──────────────────────────────────────────
  {
    id: "t10", name: "NDフィルター", category: "カメラ", icon: "📷",
    defaultLifespanMonths: 36,
    recommendedUrl: "https://www.amazon.co.jp/s?k=可変NDフィルター+高品質+反射防止&s=review-rank",
  },
  {
    id: "t11", name: "カメラバッテリー", category: "カメラ", icon: "🔋",
    defaultLifespanMonths: 24,
    recommendedUrl: "https://www.amazon.co.jp/s?k=カメラ+互換バッテリー+大容量&s=review-rank",
  },
  {
    id: "t12", name: "レンズ保護フィルター", category: "カメラ", icon: "🔭",
    defaultLifespanMonths: 12,
    recommendedUrl: "https://www.amazon.co.jp/s?k=レンズ保護フィルター+薄枠+高透過&s=review-rank",
  },
  {
    id: "t27", name: "SDカード", category: "カメラ", icon: "💾",
    defaultLifespanMonths: 36,
    recommendedUrl: "https://www.amazon.co.jp/s?k=SDカード+高速+UHS-II&s=review-rank",
  },
  {
    id: "t28", name: "カメラストラップ", category: "カメラ", icon: "📸",
    defaultLifespanMonths: 24,
    recommendedUrl: "https://www.amazon.co.jp/s?k=カメラストラップ+速写+本革&s=review-rank",
  },
  {
    id: "t29", name: "センサークリーナー", category: "カメラ", icon: "🧽",
    defaultLifespanMonths: 6,
    recommendedUrl: "https://www.amazon.co.jp/s?k=センサークリーニングキット+ミラーレス&s=review-rank",
  },

  // ── シューズ ─────────────────────────────────────────
  {
    id: "t13", name: "ランニングシューズ", category: "シューズ", icon: "👟",
    defaultLifespanMonths: 8,
    recommendedUrl: "https://www.amazon.co.jp/s?k=ランニングシューズ+クッション+軽量&s=review-rank",
  },
  {
    id: "t14", name: "インソール", category: "シューズ", icon: "🦶",
    defaultLifespanMonths: 6,
    recommendedUrl: "https://www.amazon.co.jp/s?k=インソール+衝撃吸収+高機能&s=review-rank",
  },
  {
    id: "t30", name: "サッカースパイク", category: "シューズ", icon: "⚽",
    defaultLifespanMonths: 12,
    recommendedUrl: "https://www.amazon.co.jp/s?k=サッカースパイク+本格+軽量&s=review-rank",
  },
  {
    id: "t31", name: "スポーツサンダル", category: "シューズ", icon: "🩴",
    defaultLifespanMonths: 24,
    recommendedUrl: "https://www.amazon.co.jp/s?k=スポーツサンダル+アウトドア+耐久&s=review-rank",
  },

  // ── 自転車 ───────────────────────────────────────────
  {
    id: "t16", name: "自転車チェーン", category: "自転車", icon: "🔗",
    defaultLifespanMonths: 12,
    recommendedUrl: "https://www.amazon.co.jp/s?k=自転車チェーン+耐久+錆防止&s=review-rank",
  },
  {
    id: "t32", name: "自転車タイヤ", category: "自転車", icon: "🚲",
    defaultLifespanMonths: 18,
    recommendedUrl: "https://www.amazon.co.jp/s?k=ロードバイク+タイヤ+耐パンク&s=review-rank",
  },
  {
    id: "t33", name: "ブレーキパッド", category: "自転車", icon: "🛑",
    defaultLifespanMonths: 12,
    recommendedUrl: "https://www.amazon.co.jp/s?k=自転車+ブレーキシュー+高制動&s=review-rank",
  },
  {
    id: "t34", name: "バーテープ", category: "自転車", icon: "🎀",
    defaultLifespanMonths: 12,
    recommendedUrl: "https://www.amazon.co.jp/s?k=バーテープ+ロードバイク+クッション&s=review-rank",
  },
  {
    id: "t35", name: "チェーンオイル", category: "自転車", icon: "🛢️",
    defaultLifespanMonths: 3,
    recommendedUrl: "https://www.amazon.co.jp/s?k=自転車+チェーンルブ+全天候型&s=review-rank",
  },
  {
    id: "t36", name: "サイクルグローブ", category: "自転車", icon: "🧤",
    defaultLifespanMonths: 12,
    recommendedUrl: "https://www.amazon.co.jp/s?k=サイクリンググローブ+パッド付き&s=review-rank",
  },

  // ── キッチン ─────────────────────────────────────────
  {
    id: "t37", name: "包丁（要研ぎ）", category: "キッチン", icon: "🔪",
    defaultLifespanMonths: 6,
    recommendedUrl: "https://www.amazon.co.jp/s?k=砥石+両面+シャープナー&s=review-rank",
  },
  {
    id: "t38", name: "まな板", category: "キッチン", icon: "🪵",
    defaultLifespanMonths: 24,
    recommendedUrl: "https://www.amazon.co.jp/s?k=まな板+抗菌+木製&s=review-rank",
  },
  {
    id: "t39", name: "ケトルフィルター", category: "キッチン", icon: "☕",
    defaultLifespanMonths: 6,
    recommendedUrl: "https://www.amazon.co.jp/s?k=電気ケトル+交換フィルター+カルキ除去&s=review-rank",
  },
  {
    id: "t40", name: "スポンジ", category: "キッチン", icon: "🧽",
    defaultLifespanMonths: 1,
    recommendedUrl: "https://www.amazon.co.jp/s?k=食器用スポンジ+抗菌+まとめ買い&s=review-rank",
  },
  {
    id: "t41", name: "コーヒーフィルター", category: "キッチン", icon: "☕",
    defaultLifespanMonths: 2,
    recommendedUrl: "https://www.amazon.co.jp/s?k=コーヒーフィルター+無漂白+まとめ買い&s=review-rank",
  },

  // ── その他 ───────────────────────────────────────────
  {
    id: "t15", name: "歯ブラシ", category: "その他", icon: "🪥",
    defaultLifespanMonths: 3,
    recommendedUrl: "https://www.amazon.co.jp/s?k=電動歯ブラシ+替えブラシ&s=review-rank",
  },
  {
    id: "t17", name: "ウォーターフィルター", category: "その他", icon: "💧",
    defaultLifespanMonths: 6,
    recommendedUrl: "https://www.amazon.co.jp/s?k=浄水器+交換フィルター+高除去率&s=review-rank",
  },
  {
    id: "t42", name: "電池（単3）", category: "その他", icon: "🔋",
    defaultLifespanMonths: 12,
    recommendedUrl: "https://www.amazon.co.jp/s?k=単3電池+大容量+まとめ買い&s=review-rank",
  },
];
