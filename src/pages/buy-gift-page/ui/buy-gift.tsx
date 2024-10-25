import GiftImage from "@/assets/gift-image.png";
import TonBgIcon from "@/assets/ton-bg.svg?react";
import { useBackBtn, useMainBtn } from "@/shared/hooks";

export const BuyGift = () => {
  useMainBtn("Buy a Gift", () => {});
  useBackBtn();
  return (
    <div>
      <div className="pt-4 pb-0">
        <div className="relative w-full p-12 bg-gradient-to-b from-accent-gold-20 to-accent-gold-10 rounded-2xl ">
          <div className="bg-pattern absolute inset-0 overflow-clip bg-auto rounded-2xl"></div>
          <img src={GiftImage} alt="Gift Image" className="w-full z-20" />
        </div>
        <div className="flex flex-col bg-white py-3 gap-2">
          <div className="flex items-center gap-x-3">
            <h2 className="text-2xl font-semibold leading-9 text-black">
              Delicious Cake
            </h2>
            <span className="text-accent-blue font-medium bg-accent-blue-10 px-2 rounded-full text-sm leading-5.5">
              3 of 500
            </span>
          </div>
          <p className="text-base-plus leading-5.5 text-label-secondary">
            Purchase this gift for the opportunity to give it to another user.
          </p>
          <div className="flex items-center gap-2 py-1">
            <TonBgIcon className="size-5" />
            <span className="text-base-plus leading-5.5 font-medium">
              10 TON
            </span>
          </div>
        </div>
        <div className="w-full mt-3 bg-white">Some</div>
      </div>
    </div>
  );
};
