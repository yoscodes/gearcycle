import React, { createContext, useContext, useState } from "react";
import { GearItem } from "../types/gear";
import { mockGearItems } from "../data/mockGear";

const FREE_LIMIT = 5;

type GearContextType = {
  items: GearItem[];
  addItem: (item: GearItem) => void;
  FREE_LIMIT: number;
  isAtLimit: boolean;
};

const GearContext = createContext<GearContextType | null>(null);

export function GearProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<GearItem[]>(mockGearItems);

  const addItem = (item: GearItem) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <GearContext.Provider
      value={{ items, addItem, FREE_LIMIT, isAtLimit: items.length >= FREE_LIMIT }}
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
