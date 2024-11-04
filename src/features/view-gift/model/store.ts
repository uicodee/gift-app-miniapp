import { create } from "zustand";

interface ViewGiftState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useViewGift = create<ViewGiftState>()((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open: open })),
}));
