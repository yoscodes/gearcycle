import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GearItem } from "../types/gear";
import { mockGearItems } from "../data/mockGear";

const FREE_LIMIT = 5;
const STORAGE_KEY = "@gearcycle:items";

type GearContextType = {
  items: GearItem[];
  addItem: (item: GearItem) => void;
  removeItem: (id: string) => void;
  registeredTemplateIds: string[];
  FREE_LIMIT: number;
  isAtLimit: boolean;
};

const GearContext = createContext<GearContextType | null>(null);

export function GearProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<GearItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((json) => {
      setItems(json ? JSON.parse(json) : mockGearItems);
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (loaded) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, loaded]);

  const registeredTemplateIds = useMemo(
    () => items.map((i) => i.templateId).filter(Boolean) as string[],
    [items]
  );

  const addItem = (item: GearItem) => {
    setItems((prev) => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <GearContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        registeredTemplateIds,
        FREE_LIMIT,
        isAtLimit: items.length >= FREE_LIMIT,
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
