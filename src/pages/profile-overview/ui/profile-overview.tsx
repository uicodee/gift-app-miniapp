import { Section, Typography } from "@/shared/ui";
import Avatar from "@/assets/Avatar - People - Mark.png";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Recent from "@/assets/recent.svg?react";
import Sun from "@/assets/sun.svg?react";
import Moon from "@/assets/moon.svg?react";
import { cn } from "@/shared/ui/utils";
// import { cn } from "@/shared/ui/utils";

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
  const [isLight, setIsLight] = useState(true);
  const [language, setLanguage] = useState("EN");
  const onThemeToggle = (isLight: boolean) => {
    setIsLight(isLight);
    if (isLight) document.body.classList.remove("dark");
    else document.body.classList.add("dark");
  };
  const onLanguageChange = (language: string) => {
    setLanguage(language);
  };
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
        <div className="inline-flex rounded-full bg-invert p-0.5">
          <button
            onClick={() => onThemeToggle(true)}
            className={cn(
              "rounded-full px-2.5 py-0.75 transition-none",
              isLight && "bg-bg-color"
            )}
          >
            <Sun
              className={cn(
                "h-[22px] w-[18px]",
                !isLight ? "text-label-secondary" : "text-accent-text-color"
              )}
            />
          </button>
          <button
            onClick={() => onThemeToggle(false)}
            className={cn(
              "rounded-full px-2.5 py-0.75 transition-none",
              !isLight && "bg-bg-color"
            )}
          >
            <Moon
              className={cn(
                "h-[22px] w-[17px]",
                isLight ? "text-label-secondary" : "text-accent-text-color"
              )}
            />
          </button>
        </div>

        <div className="text-center w-6/12">
          <div className="flex flex-col relative items-center mb-3">
            <img
              src={Avatar}
              alt="User Avatar"
              className="size-25 rounded-full"
            />
            <div className="absolute -bottom-2 rounded-full text-center bg-label-secondary text-white font-medium px-2 leading-5.5 outline-2 outline outline-bg-color text-pre-xs">
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

        <div className="inline-flex rounded-full bg-invert p-0.5">
          <button
            onClick={() => onLanguageChange("EN")}
            className={cn(
              "rounded-full px-2.5 py-0.75 text-label-secondary",
              language === "EN" && "bg-bg-color text-accent-text-color"
            )}
          >
            <span className="text-sm font-semibold leading-5.5 transition-none">
              EN
            </span>
            {/* <Sun
              className={cn(
                "h-[22px] w-[18px]",
                !isLight && "text-label-secondary"
              )}
            /> */}
          </button>
          <button
            onClick={() => onLanguageChange("RU")}
            className={cn(
              "rounded-full px-2.5 py-0.75 text-label-secondary transition-none",
              language === "RU" && "bg-bg-color text-accent-text-color"
            )}
          >
            <span className="text-sm font-semibold leading-5.5">RU</span>
            {/* <Moon
              className={cn(
                "h-[22px] w-[17px]",
                isLight && "text-label-secondary"
              )}
            /> */}
          </button>
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
