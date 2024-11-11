import { Gift } from "@/shared/api/model";
import { create } from "zustand";

interface ViewProfileGiftState {
  open: boolean;
  gift: Gift | null;
  setOpen: (open: boolean) => void;
  setGift: (gift: Gift) => void;
}

export const useViewProfileGift = create<ViewProfileGiftState>()((set) => ({
  open: false,
  gift: null,
  setOpen: (open) => set(() => ({ open: open })),
  setGift: (gift) => set(() => ({ gift: gift })),
}));
