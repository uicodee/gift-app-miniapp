import { Heading, MiniGiftCard } from "@/shared/ui";
import { Paragraph } from "@/shared/ui/paragraph";
import GiftImage from "@/assets/gift-image.png";
import GreenStar from "@/assets/green-star.png";
import BlueStar from "@/assets/blue-star.png";
import RedStar from "@/assets/red-star.png";

export const GiftsOverview = () => {
  return (
    <div>
      <div className="flex flex-col pt-6 pb-7 items-center justify-center text-center gap-y-2">
        <Heading>Send Gifts in Telegram</Heading>
        <Paragraph className="max-w-xxs">
          Send gifts to users that can be stored in their app profile.
        </Paragraph>
      </div>
      <div className="grid grid-cols-3 py-2 gap-2">
        <MiniGiftCard title="Delicious Cake" giftImage={GiftImage} />
        <MiniGiftCard title="Green Star" giftImage={GreenStar} />
        <MiniGiftCard title="Blue Star" giftImage={BlueStar} />
        <MiniGiftCard title="Red Star" giftImage={RedStar} />
        <MiniGiftCard title="Delicious Cake" giftImage={GiftImage} />
        <MiniGiftCard title="Green Star" giftImage={GreenStar} />
        <MiniGiftCard title="Blue Star" giftImage={BlueStar} />
        <MiniGiftCard title="Red Star" giftImage={RedStar} />
        <MiniGiftCard title="Delicious Cake" giftImage={GiftImage} />
        <MiniGiftCard title="Green Star" giftImage={GreenStar} />
        <MiniGiftCard title="Blue Star" giftImage={BlueStar} />
        <MiniGiftCard title="Red Star" giftImage={RedStar} />
      </div>
    </div>
  );
};
