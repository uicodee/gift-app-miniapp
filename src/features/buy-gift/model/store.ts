import { create } from "zustand";

interface BuyGiftState {
  layoutId: string | null;
  setLayoutId: (layoutId: string) => void;
}

export const useBuyGift = create<BuyGiftState>()((set) => ({
  layoutId: null,
  setLayoutId: (layoutId) => set(() => ({ layoutId: layoutId })),
}));
