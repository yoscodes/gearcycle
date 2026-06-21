import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GearItem } from "../types/gear";
import { mockGearItems } from "../data/mockGear";
import { requestNotificationPermission, scheduleItemNotifications, cancelItemNotifications } from "../utils/notifications";
import { checkPremiumStatus } from "../utils/purchases";

const FREE_LIMIT = 5;
const STORAGE_KEY = "@gearcycle:items";

type GearContextType = {
  items: GearItem[];
  addItem: (item: GearItem) => Promise<void>;
  removeItem: (id: string) => void;
  registeredTemplateIds: string[];
  FREE_LIMIT: number;
  isAtLimit: boolean;
  isPremium: boolean;
  refreshPremiumStatus: () => Promise<void>;
};

const GearContext = createContext<GearContextType | null>(null);

export function GearProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<GearItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((json) => {
      setItems(json ? JSON.parse(json) : mockGearItems);
      setLoaded(true);
    });
    checkPremiumStatus().then(setIsPremium);
  }, []);

  useEffect(() => {
    if (loaded) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, loaded]);

  const refreshPremiumStatus = useCallback(async () => {
    const status = await checkPremiumStatus();
    setIsPremium(status);
  }, []);

  const registeredTemplateIds = useMemo(
    () => items.map((i) => i.templateId).filter(Boolean) as string[],
    [items]
  );

  const addItem = useCallback(async (item: GearItem) => {
    // アイテムを先に追加（楽観的更新）
    setItems((prev) => [...prev, item]);

    // バックグラウンドで通知をスケジュール
    const granted = await requestNotificationPermission();
    if (!granted) return;
    const notificationIds = await scheduleItemNotifications(item);
    if (notificationIds.length > 0) {
      setItems((prev) =>
        prev.map((i) => (i.id === item.id ? { ...i, notificationIds } : i))
      );
    }
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => {
      const target = prev.find((i) => i.id === id);
      if (target?.notificationIds?.length) {
        cancelItemNotifications(target.notificationIds).catch(() => {});
      }
      return prev.filter((i) => i.id !== id);
    });
  }, []);

  return (
    <GearContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        registeredTemplateIds,
        FREE_LIMIT,
        isAtLimit: !isPremium && items.length >= FREE_LIMIT,
        isPremium,
        refreshPremiumStatus,
      }}
    >
      {children}
    </GearContext.Provider>
  );
}

export function useGear() {
  const ctx = useContext(GearContext);
  if (!ctx) throw new Error("useGear must be used within GearProvider");
  return ctx;
}
