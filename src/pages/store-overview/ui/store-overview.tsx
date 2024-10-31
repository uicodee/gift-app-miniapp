import Gift from "@/assets/gift-fill.svg?react";
import { GiftCard, Section, Typography } from "@/shared/ui";
import { useQuery } from "@tanstack/react-query";
import { getGifts } from "@/shared/api/generated/gifts/gifts";
import { CardVariants, Currencies } from "@/shared/ui/gift-card";
import { initDataRaw } from "@telegram-apps/sdk-react";

export const StoreOverview = () => {
  const { data: gifts } = useQuery({
    queryKey: ["gifts"],
    queryFn: () =>
      getGifts().giftsControllerFindAll({
        headers: { Authorization: initDataRaw() },
      }),
  });
  return (
    <>
      <Section className="flex flex-col pt-6 pb-4 items-center justify-center">
        <Gift className="w-11 h-12 mb-4 text-accent-blue" />
        <Typography variant="title-lg" className="mb-2">
          Buy and Send Gifts
        </Typography>
        <Typography variant="text" className="text-secondary-text-color">
          Unique gifts for everyone by Crypto Pay.
        </Typography>
      </Section>
      <Section className="grid grid-cols-2 gap-3 py-4">
        {gifts?.map((gift) => (
          <GiftCard
            // @ts-ignore
            id={gift._id}
            edition={gift.availability}
            ofEdition={gift.totalIssued}
            title={gift.name}
            price={gift.price}
            variant={gift.variant as CardVariants["variant"]}
            currency={gift.currency as Currencies}
            animationUrl={gift.animationUrl}
          />
        ))}
        {/* <GiftCard
          edition={3}
          ofEdition={500}
          title="Delicious Cake"
          price="10"
          variant="gold"
          currency="USDT"
          giftImage={GiftImage}
        />
        <GiftCard
          edition={802}
          ofEdition={3000}
          title="Green Star"
          price="5"
          variant="green"
          currency="TON"
          giftImage={GreenStar}
        />
        <GiftCard
          edition={458}
          ofEdition={5000}
          title="Blue Star"
          price="10"
          variant="blue"
          currency="ETH"
          giftImage={BlueStar}
        />
        <GiftCard
          edition={10000}
          ofEdition={10000}
          title="Red Star"
          price="10"
          variant="red"
          currency="USDT"
          giftImage={RedStar}
        />
        <GiftCard
          edition={3}
          ofEdition={500}
          title="Delicious Cake"
          price="10"
          variant="gold"
          currency="USDT"
          giftImage={GiftImage}
        />
        <GiftCard
          edition={802}
          ofEdition={3000}
          title="Green Star"
          price="10"
          variant="green"
          currency="TON"
          giftImage={GreenStar}
        /> */}
      </Section>
    </>
  );
};
