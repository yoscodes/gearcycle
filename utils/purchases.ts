import { Platform } from 'react-native';

// TODO: RevenueCat APIキーを設定してください（Dashboard → App Settings → API Keys）
// const RC_API_KEY_IOS = 'REPLACE_WITH_YOUR_REVENUECAT_API_KEY';

// TODO: Make/ZapierなどのWebhook URLを設定してください
const PURCHASE_INTENT_WEBHOOK = 'REPLACE_WITH_YOUR_WEBHOOK_URL';

export const PREMIUM_ENTITLEMENT = 'premium';

export function initializePurchases(): void {
  // TODO: RevenueCat APIキー取得後に有効化
  // if (Platform.OS !== 'ios') return;
  // Purchases.setLogLevel(LOG_LEVEL.VERBOSE);
  // Purchases.configure({ apiKey: RC_API_KEY_IOS });
}

export async function checkPremiumStatus(): Promise<boolean> {
  // TODO: RevenueCat有効化後に実装
  // const info = await Purchases.getCustomerInfo();
  // return PREMIUM_ENTITLEMENT in info.entitlements.active;
  return false;
}

// 購入ボタンタップを計測する（Fake Door）
export async function trackPurchaseIntent(): Promise<void> {
  try {
    await fetch(PURCHASE_INTENT_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'purchase_intent',
        timestamp: new Date().toISOString(),
        platform: Platform.OS,
      }),
    });
  } catch {
    // 計測失敗はUXに影響させない
  }
}

export async function purchasePremium(): Promise<boolean> {
  // TODO: RevenueCat有効化後に実装
  // const offerings = await Purchases.getOfferings();
  // const pkg = offerings.current?.monthly;
  // if (!pkg) throw new Error('利用可能なプランが見つかりません');
  // const { customerInfo } = await Purchases.purchasePackage(pkg);
  // return PREMIUM_ENTITLEMENT in customerInfo.entitlements.active;
  return false;
}

export async function restorePurchases(): Promise<boolean> {
  // TODO: RevenueCat有効化後に実装
  // const info = await Purchases.restorePurchases();
  // return PREMIUM_ENTITLEMENT in info.entitlements.active;
  return false;
}
