import { Gift } from "@/shared/api/model";
import { create } from "zustand";

interface ViewGiftState {
  gift: Gift | null;
  setGift: (gift: Gift) => void;
}

export const useViewGift = create<ViewGiftState>()((set) => ({
  gift: null,
  setGift: (gift) => set(() => ({ gift: gift })),
}));
