import Lottie from "react-lottie-player";
import { Gift } from "../api/model";
import { Typography } from "./typography";
import { Badge } from "./badge";
import TonBgIcon from "@/assets/ton-bg.svg?react";
import { variant } from "./gift-card";
import { cn } from "./utils";

interface DetailGiftCardProps {
  gift: Gift;
}

export const DetailGiftCard = ({ gift }: DetailGiftCardProps) => {
  return (
    <div className="pt-4 pb-0">
      <div
        className={cn(
          "relative w-full p-12 bg-gradient-to-b rounded-2xl",
          variant[gift?.variant as string]
        )}
      >
        <div className="bg-pattern absolute inset-0 overflow-clip bg-auto rounded-2xl"></div>
        <Lottie
          play
          loop={false}
          path={gift?.animationUrl}
          className="w-full z-20 relative"
        />
      </div>
      <div className="flex flex-col bg-bg-color py-3 gap-2">
        <div className="flex items-center gap-x-3">
          <Typography variant="title-lg">{gift?.name}</Typography>
          <Badge className="text-accent-blue bg-accent-blue-12">
            {gift?.availability} of {gift?.totalIssued}
          </Badge>
        </div>
        <Typography variant="text" className="text-label-secondary">
          {gift?.description}
        </Typography>
        <div className="flex items-center gap-2 py-1">
          <TonBgIcon className="size-5" />
          <span className="text-base-plus leading-5.5 font-medium text-accent-text-color">
            {gift?.price} {gift?.currency}
          </span>
        </div>
      </div>
    </div>
  );
};