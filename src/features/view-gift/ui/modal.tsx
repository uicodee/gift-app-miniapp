import { Drawer } from "vaul";
import { useViewGift } from "../model/store";
import Lottie from "react-lottie-player";
import { Typography } from "@/shared/ui";
import { mainButton } from "@telegram-apps/sdk-react";

export const Modal = () => {
  const open = useViewGift((state) => state.open);
  const setOpen = useViewGift((state) => state.setOpen);
  return (
    <Drawer.Root
      open={open}
      onClose={() => {
        setOpen(false);
        mainButton.setParams({
          hasShineEffect: false,
          isVisible: false,
          isEnabled: false,
        });
      }}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black-40" />
        <Drawer.Content className="bg-secondary-bg-color flex flex-col rounded-2xl mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none z-30">
          <div className="flex flex-col justify-center items-center p-4 bg-secondary-bg-color rounded-t-2xl flex-1">
            <Lottie
              play
              loop
              path="https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/gift-delicious-cake.json"
              className="size-37.5"
            />
            <Typography variant="title-lg" className="mt-3 mb-6">
              Send Gift
            </Typography>
            <div className="w-full bg-bg-color rounded-xl">
              <div className="grid grid-cols-3 text-accent-text-color">
                <div className="col-span-1 px-4 py-2.5 border-separator border-r-0.3 border-b-0.3">
                  Gift
                </div>
                <div className="col-span-2 px-4 py-2.5 border-separator border-b-0.3">
                  Delicious Cake
                </div>
                <div className="col-span-1 px-4 py-2.5 border-separator border-r-0.3 border-b-0.3">
                  Date
                </div>
                <div className="col-span-2 px-4 py-2.5 border-separator border-b-0.3">
                  06.10.24 at 00:04
                </div>
                <div className="col-span-1 px-4 py-2.5 border-separator border-r-0.3 border-b-0.3">
                  Price
                </div>
                <div className="col-span-2 px-4 py-2.5 border-separator border-b-0.3">
                  10 USDT
                </div>
                <div className="col-span-1 px-4 py-2.5 border-separator border-r-0.3">
                  Availability
                </div>
                <div className="col-span-2 px-4 py-2.5 border-separator">
                  3 of 10 000
                </div>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
