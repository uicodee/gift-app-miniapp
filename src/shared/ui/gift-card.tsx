import PatternLight from "@/assets/pattern-light.svg?react";
import UsdtIcon from "@/assets/usdt.svg?react";
import TonIcon from "@/assets/ton.svg?react";
import EthIcon from "@/assets/eth.svg?react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";
import { Link } from "react-router-dom";

type Currencies = "USDT" | "TON" | "ETH";

const cardBgVariants = cva("bg-gradient-to-b", {
  variants: {
    variant: {
      gold: "from-accent-gold-20 to-accent-gold-10",
      blue: "from-accent-blue-20 to-accent-blue-10",
      green: "from-accent-green-20 to-accent-green-10",
      red: "from-red-20 to-red-10",
    },
  },
  defaultVariants: {
    variant: "blue",
  },
});

type CardVariants = VariantProps<typeof cardBgVariants>;

interface GiftCardProps {
  edition: number;
  ofEdition: number;
  title: string;
  price: string;
  variant: CardVariants["variant"];
  currency: Currencies;
  giftImage: string;
}

export const GiftCard = ({
  edition,
  ofEdition,
  title,
  price,
  variant,
  currency,
  giftImage,
}: GiftCardProps) => {
  const formattedEdition = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
  }).format(edition);
  const formattedOfEdition = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
  }).format(ofEdition);
  return (
    <Link
      to="buy/name"
      className={cn(
        "flex relative flex-col justify-between w-full rounded-xl py-2 px-3",
        cardBgVariants({ variant })
      )}
    >
      <div className="absolute inset-0 overflow-clip -z-30 object-contain">
        <PatternLight className="w-full h-full rounded-xl object-contain" />
      </div>
      <span className="text-pre-xs self-end leading-4.5 opacity-50 mb-2">
        {formattedEdition} of {formattedOfEdition}
      </span>
      <div className="flex flex-col items-center justify-center gap-1">
        <img src={giftImage} alt="Gift Image" className="size-32" />
        <h3 className="font-semibold text-base-plus leading-5.5">{title}</h3>
      </div>
      <div className="flex w-full items-center justify-center">
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
};
