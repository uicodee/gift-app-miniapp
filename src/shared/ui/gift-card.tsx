import React from "react";
import { Link } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";
import { Typography } from "./typography";
import Lottie from "react-lottie-player";
import UsdtIcon from "@/assets/usdt.svg?react";
import TonIcon from "@/assets/ton.svg?react";
import EthIcon from "@/assets/eth.svg?react";
import { useCachedData, useFormattedNumbers } from "../hooks";

export type Currencies = "USDT" | "TON" | "ETH";

export const variant: Record<string, string> = {
  gold: "from-accent-gold-20 to-accent-gold-10",
  blue: "from-accent-blue-20 to-accent-blue-5",
  green: "from-green-20 to-green-0.6",
  red: "from-red-20 to-red-5",
};

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
  currency: Currencies;
  animationUrl: string;
}

export const GiftCard = React.memo(
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
    const animationData = useCachedData(animationUrl, {
      cacheName: "lottie-animations",
    });
    const [formattedEdition, formattedOfEdition] = useFormattedNumbers([
      edition,
      ofEdition,
    ]);

    return (
      <Link
        to={`buy/${id}`}
        className={cn(
          "flex relative flex-col justify-between w-full rounded-xl py-2 px-3",
          cardBgVariants({ variant })
        )}
      >
        <div className="bg-pattern absolute inset-0 overflow-clip bg-auto rounded-2xl"></div>
        <span className="text-pre-xs self-end leading-4.5 opacity-50 mb-2 text-accent-text-color">
          {formattedEdition} of {formattedOfEdition}
        </span>
        <div className="flex flex-col items-center justify-center gap-1">
          {animationData ? (
            <Lottie
              play
              loop={false}
              animationData={animationData}
              className="size-32 z-10"
            />
          ) : (
            <div className="size-32"></div>
          )}
          <Typography variant="text-bold">{title}</Typography>
        </div>
        <div className="flex w-full items-center justify-center z-10">
          {edition === ofEdition ? (
            <button className="flex w-fit items-center justify-center mb-2 px-4 rounded-full bg-label-secondary-10 bg-opacity-10 backdrop-blur-half text-white mt-3 text-pre-xs leading-4.5 font-semibold">
              <span className="flex items-center justify-center py-1.5 text-label-secondary">
                Sold Out
              </span>
            </button>
          ) : (
            <button className="flex w-fit items-center justify-center mb-2 px-4 rounded-full bg-accent-blue text-white mt-3 text-pre-xs leading-4.5 font-semibold">
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
      </Link>
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
