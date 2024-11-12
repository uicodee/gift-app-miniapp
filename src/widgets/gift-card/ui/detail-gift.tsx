import Lottie from "react-lottie-player";
import TonBgIcon from "@/assets/ton-bg.svg?react";
import { AnimatePresence, motion } from "framer-motion";
import { useBuyGift } from "@/features/buy-gift";
import { Gift } from "@/shared/api/model";
import { useCachedData } from "@/shared/hooks";
import { cn } from "@/shared/ui/utils";
import { Badge, Typography } from "@/shared/ui";
import { variant } from "@/shared/data/constants";
import { useTranslation } from "react-i18next";

interface DetailGiftCardProps {
  gift: Gift;
}

export const DetailGiftCard = ({ gift }: DetailGiftCardProps) => {
  const { t } = useTranslation();
  const animationData = useCachedData(gift.animationUrl, {
    cacheName: "lottie-animations",
  });
  const layoutId = useBuyGift((state) => state.layoutId);

  return (
    <div className="pt-4 pb-0">
      <div
        className={cn(
          "relative w-full p-12 bg-gradient-to-b rounded-2xl",
          variant[gift?.variant as string]
        )}
      >
        <div className="bg-pattern absolute inset-0 overflow-clip bg-auto rounded-2xl"></div>
        <AnimatePresence>
          <motion.div layoutId={layoutId as string}>
            {animationData ? (
              <Lottie
                play
                loop={false}
                animationData={animationData}
                className="w-full z-20 relative"
              />
            ) : (
              <div className="w-full h-20 relative"></div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex flex-col bg-bg-color py-3 gap-2">
        <div className="flex items-center gap-x-3">
          <Typography variant="title-lg">{gift?.name}</Typography>
          <Badge className="text-accent-blue bg-accent-blue-12">
            {gift?.availability} {t("common.of")} {gift?.totalIssued}
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

export const DetailGiftCardSkeleton = () => {
  return (
    <div className="pt-4 pb-0">
      <div
        className={cn(
          "relative w-full p-12 bg-gradient-to-b rounded-2xl bg-secondary-bg-color animate-pulse"
        )}
      >
        <div className="absolute inset-0 overflow-clip bg-auto rounded-2xl"></div>
        <div className="w-full h-52 rounded-md z-20 relative"></div>
      </div>
      <div className="flex flex-col bg-bg-color py-3 gap-2">
        <div className="flex items-center gap-x-3">
          <div className="w-5/12 h-8 bg-secondary-bg-color rounded"></div>
          <div className="w-2/12 h-6 bg-secondary-bg-color rounded-full"></div>
        </div>
        <div className="w-full h-4 bg-secondary-bg-color rounded"></div>
        <div className="flex items-center gap-2 py-1">
          <div className="size-6 bg-secondary-bg-color rounded-full"></div>
          <div className="w-1/4 h-6 bg-secondary-bg-color rounded"></div>
        </div>
      </div>
    </div>
  );
};
