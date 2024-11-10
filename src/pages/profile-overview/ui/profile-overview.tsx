import { Section, Typography } from "@/shared/ui";
import Avatar from "@/assets/Avatar - People - Mark.png";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import Recent from "@/assets/recent.svg?react";
import Sun from "@/assets/sun.svg?react";
import Moon from "@/assets/moon.svg?react";

interface GiftProps {
  profilePhoto: string;
  edition: number;
  ofEdition: number;
  imageUrl: string;
  title: string;
}

const Gift = ({
  profilePhoto,
  edition,
  ofEdition,
  imageUrl,
  title,
}: GiftProps) => {
  const [formattedEdition, formattedOfEdition] = useMemo(() => {
    const formatNumber = (num: number) =>
      new Intl.NumberFormat("en", {
        notation: "compact",
        compactDisplay: "short",
      }).format(num);
    return [formatNumber(edition), formatNumber(ofEdition)];
  }, [edition, ofEdition]);

  return (
    <div className="flex flex-col justify-between bg-secondary-bg-color rounded-xl py-2 px-1.5 text-center">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <img src={profilePhoto} alt="" className="size-4 rounded-full" />
          <span className="text-pre-xs self-end leading-4.5 opacity-50 text-accent-text-color pr-1.5">
            {formattedEdition} of {formattedOfEdition}
          </span>
        </div>
        <div className="flex justify-center mt-1">
          <img src={imageUrl} alt={title} className="size-20" />
        </div>
      </div>
      <div className="mt-0.5 mb-1 px-1.5">
        <span className="flex justify-center text-sm text-accent-text-color leading-4.5 p-0">
          {title}
        </span>
      </div>
    </div>
  );
};

export const ProfileOverview = () => {
  const gifts = [
    {
      edition: 1,
      ofEdition: 10000,
      title: "Green Star",
      imageUrl:
        "https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/gift-image.png",
    },
    {
      edition: 1,
      ofEdition: 10000,
      title: "Delicious Cake",
      imageUrl:
        "https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/gift-image.png",
    },
    {
      edition: 1,
      ofEdition: 10000,
      title: "Blue Star",
      imageUrl:
        "https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/gift-image.png",
    },
  ];

  return (
    <Section>
      <div className="flex items-start justify-between pt-2 w-full">
        <div className="bg-secondary-bg-color rounded-full">
          <div className="flex p-0.5">
            <div className="bg-white py-0.75 px-2.5 rounded-full shadow-custom-medium">
              <Sun className="w-[18px] h-[22px]" />
            </div>
            <div className="py-0.75 px-2.5 rounded-full">
              <Moon className="w-[18px] h-[22px]" />
            </div>
          </div>
        </div>

        <div className="text-center w-6/12">
          <div className="flex flex-col relative items-center mb-3">
            <img
              src={Avatar}
              alt="User Avatar"
              className="size-25 rounded-full"
            />
            <div className="absolute -bottom-2 rounded-full text-center bg-label-secondary text-white font-medium px-2 leading-5.5 outline-2 outline outline-white text-pre-xs">
              #160
            </div>
          </div>
          <Typography variant="title-lg" className="mb-1">
            Mark
          </Typography>
          <Typography variant="text" className="text-label-secondary mb-6">
            128 gifts received
          </Typography>
          <Link to="recent-action" className="flex justify-center gap-x-1">
            <Recent />
            <Typography variant="text" className="text-primary">
              Recent Actions ›
            </Typography>
          </Link>
        </div>

        <div className="bg-secondary-bg-color rounded-full">
          <div className="flex p-0.5">
            <div className="bg-white py-0.75 px-2.5 rounded-full shadow-custom-medium">
              <span className="text-sm leading-5.5 font-semibold">EN</span>
            </div>
            <div className="py-0.75 px-2.5 rounded-full">
              <span className="text-sm leading-5.5 font-semibold">RU</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 py-6">
        {gifts.map((gift, index) => (
          <Gift
            key={index}
            profilePhoto={Avatar}
            edition={gift.edition}
            ofEdition={gift.ofEdition}
            imageUrl={gift.imageUrl}
            title={gift.title}
          />
        ))}
      </div>
    </Section>
  );
};
