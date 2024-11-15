import { Gift } from "@/shared/api/model";
import { create } from "zustand";

interface ViewGiftState {
  open: boolean;
  gift: Gift | null;
  setOpen: (open: boolean) => void;
  setGift: (gift: Gift) => void;
}

export const useViewGift = create<ViewGiftState>()((set) => ({
  open: false,
  gift: null,
  setOpen: (open) => set(() => ({ open: open })),
  setGift: (gift) => set(() => ({ gift: gift })),
}));
