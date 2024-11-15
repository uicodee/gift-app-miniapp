import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/ui/utils";
import { Typography } from "@/shared/ui";
import Lottie from "react-lottie-player";
import UsdtIcon from "@/assets/usdt.svg?react";
import TonIcon from "@/assets/ton.svg?react";
import EthIcon from "@/assets/eth.svg?react";
import { useCachedData, useFormattedNumbers } from "@/shared/hooks";
import { useBuyGift } from "@/features/buy-gift";
import { motion } from "framer-motion";
import { variant } from "@/shared/data/constants";
import { GiftCurrency } from "@/shared/api/model";
import { useTranslation } from "react-i18next";

const cardBgVariants = cva("bg-gradient-to-b", {
  variants: {
    variant,
  },
  defaultVariants: {
    variant: "blue",
  },
});

export type CardVariants = VariantProps<typeof cardBgVariants>;

interface GiftCardProps {
  id: string;
  edition: number;
  ofEdition: number;
  title: string;
  price: number;
  variant: CardVariants["variant"];
  currency: GiftCurrency;
  animationUrl: string;
}

export const GiftCard = memo(
  ({
    id,
    edition,
    ofEdition,
    title,
    price,
    variant,
    currency,
    animationUrl,
  }: GiftCardProps) => {
    const { t } = useTranslation();

    const soldOut = edition === ofEdition;
    const navigate = useNavigate();
    const setLayoutId = useBuyGift((state) => state.setLayoutId);
    const animationData = useCachedData(animationUrl, {
      cacheName: "lottie-animations",
    });
    const [formattedEdition, formattedOfEdition] = useFormattedNumbers([
      edition,
      ofEdition,
    ]);

    return (
      <motion.div
        className={cn(
          "flex relative flex-col justify-between w-full rounded-xl py-2 px-3",
          cardBgVariants({ variant })
        )}
      >
        <div className="bg-pattern absolute inset-0 overflow-clip bg-auto rounded-2xl"></div>
        <span className="text-pre-xs self-end leading-4.5 opacity-50 mb-2 text-accent-text-color">
          {formattedEdition} {t("common.of")} {formattedOfEdition}
        </span>
        <div className="flex flex-col items-center justify-center gap-1">
          {animationData ? (
            <motion.div
              layoutId={id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{
                backdropFilter: "blur(0px)",
                WebkitBackdropFilter: "blur(0px)",
              }}
            >
              <Lottie
                play
                loop
                animationData={animationData}
                className="size-32 z-10"
              />
            </motion.div>
          ) : (
            <div className="size-32"></div>
          )}
          <Typography variant="text-bold">{title}</Typography>
        </div>
        <div className="flex w-full items-center justify-center z-10">
          {soldOut ? (
            <button className="flex w-fit items-center justify-center mb-2 px-4 rounded-full bg-label-secondary-10 bg-opacity-10 backdrop-blur-half text-white mt-3 text-pre-xs leading-4.5 font-semibold">
              <span className="flex items-center justify-center py-1.5 text-label-secondary">
                {t("pages.store.soldOut")}
              </span>
            </button>
          ) : (
            <button
              className="flex w-fit items-center justify-center mb-2 px-4 rounded-full bg-accent-blue text-white mt-3 text-pre-xs leading-4.5 font-semibold"
              onClick={() => {
                if (!soldOut) {
                  setLayoutId(id);
                  navigate(`buy/${id}`);
                }
              }}
            >
              <div>
                {currency === "USDT" && <UsdtIcon className="size-6" />}
                {currency === "TON" && <TonIcon className="size-6" />}
                {currency === "ETH" && <EthIcon className="size-6" />}
              </div>
              <span className="flex items-center justify-center py-1.5">
                {price} {currency}
              </span>
            </button>
          )}
        </div>
      </motion.div>
    );
  }
);

export const LoadingGiftCard = () => {
  return (
    <div
      className={cn(
        "flex relative flex-col justify-between w-full rounded-xl py-2 px-3",
        "bg-secondary-bg-color animate-pulse"
      )}
    >
      <div className="bg-pattern absolute inset-0 overflow-clip bg-auto rounded-2xl"></div>
      <span className="self-end leading-4.5 mb-2 w-1/3 h-4 rounded"></span>
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="size-32 rounded-full"></div>
        <div className="w-2/3 h-6 rounded mt-2"></div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="flex w-fit items-center justify-center mb-2 px-4 py-1.5 rounded-full text-pre-xs leading-4.5 font-semibold mt-3 h-8">
          <span className="flex items-center justify-center w-full h-full rounded"></span>
        </div>
      </div>
    </div>
  );
};
