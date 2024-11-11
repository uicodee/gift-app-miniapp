import { useFormattedNumbers } from "@/shared/hooks";
import { HTMLAttributes } from "react";

interface ProfileGiftProps extends HTMLAttributes<HTMLDivElement> {
  profilePhoto: string;
  edition: number;
  ofEdition: number;
  imageUrl: string;
  title: string;
}

export const ProfileGift = ({
  profilePhoto,
  edition,
  ofEdition,
  imageUrl,
  title,
  onClick,
}: ProfileGiftProps) => {
  const [formattedEdition, formattedOfEdition] = useFormattedNumbers([
    edition,
    ofEdition,
  ]);
  return (
    <div
      className="flex flex-col justify-between bg-secondary-bg-color rounded-xl py-2 px-1.5 text-center"
      onClick={onClick}
    >
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
