import Gift from "@/assets/gift-fill.svg?react";
import { Section, Typography } from "@/shared/ui";
import { useQuery } from "@tanstack/react-query";
import { getGifts } from "@/shared/api/generated/gifts/gifts";
import { GiftCard, LoadingGiftCard } from "@/widgets/gift-card/ui/gift-card";
import { initDataRaw } from "@telegram-apps/sdk-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const StoreOverview = () => {
  const { t } = useTranslation();
  const { data: gifts, isLoading } = useQuery({
    queryKey: ["gifts"],
    queryFn: () =>
      getGifts().giftsControllerFindAll({
        headers: { Authorization: initDataRaw() },
      }),
  });

  return (
    <motion.div>
      <Section className="flex flex-col pt-6 pb-4 items-center justify-center text-center">
        <Gift className="w-11 h-12 mb-4 text-accent-blue" />
        <Typography variant="title-lg" className="mb-2">
          {t("pages.store.title")}
        </Typography>
        <Typography variant="text" className="text-secondary-text-color">
          {t("pages.store.description")}
        </Typography>
      </Section>
      <Section className="grid grid-cols-2 gap-3 py-4">
        {isLoading
          ? Array(6)
              .fill(0)
              .map((_, index) => <LoadingGiftCard key={index} />)
          : gifts?.map((gift) => (
              <GiftCard
                // @ts-ignore
                key={gift._id}
                // @ts-ignore
                id={gift._id}
                edition={gift.availability}
                ofEdition={gift.totalIssued}
                title={gift.name}
                price={gift.price}
                variant={gift.variant}
                currency={gift.currency}
                animationUrl={gift.animationUrl}
              />
            ))}
      </Section>
    </motion.div>
  );
};
