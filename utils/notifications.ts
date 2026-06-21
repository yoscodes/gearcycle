import * as Notifications from 'expo-notifications';
import { GearItem } from '../types/gear';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

export async function requestNotificationPermission(): Promise<boolean> {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

export async function scheduleItemNotifications(item: GearItem): Promise<string[]> {
  const ids: string[] = [];
  const lifespanMs = item.lifespanMonths * 30 * 24 * 60 * 60 * 1000;
  const now = Date.now();

  const alerts = [
    {
      triggerAt: item.registeredAt + lifespanMs * 0.8,
      title: `${item.icon} そろそろ交換時期です`,
      body: `${item.name}の残り寿命が20%を切りました`,
    },
    {
      triggerAt: item.registeredAt + lifespanMs,
      title: `${item.icon} 交換時期を迎えました`,
      body: `${item.name}を今すぐ交換しましょう`,
    },
  ];

  for (const alert of alerts) {
    if (alert.triggerAt > now) {
      const id = await Notifications.scheduleNotificationAsync({
        content: { title: alert.title, body: alert.body },
        trigger: { type: 'date', date: new Date(alert.triggerAt) } as any,
      });
      ids.push(id);
    }
  }

  return ids;
}

export async function cancelItemNotifications(ids: string[]): Promise<void> {
  await Promise.all(ids.map((id) => Notifications.cancelScheduledNotificationAsync(id)));
}
