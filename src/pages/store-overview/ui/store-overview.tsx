import Gift from "@/assets/gift-fill.svg?react";
import GiftImage from "@/assets/gift-image.png";
import GreenStar from "@/assets/green-star.png";
import BlueStar from "@/assets/blue-star.png";
import RedStar from "@/assets/red-star.png";
import { GiftCard, Heading } from "@/shared/ui";
import { Paragraph } from "@/shared/ui/paragraph";

export const StoreOverview = () => {
  return (
    <div>
      <div className="flex flex-col pt-6 pb-4 items-center justify-center">
        <Gift className="w-11 h-12 mb-4 text-accent-blue" />
        <Heading className="mb-2">Buy and Send Gifts</Heading>
        <Paragraph>Unique gifts for everyone by Crypto Pay.</Paragraph>
      </div>
      <div className="grid grid-cols-2 gap-3 py-4">
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
        />
      </div>
    </div>
  );
};
