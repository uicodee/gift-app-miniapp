import Gift from "@/assets/gift-fill.svg?react";
import Gold from "@/assets/gold.png";
import Silver from "@/assets/silver.png";
import Bronze from "@/assets/bronze.png";

interface LeaderCardProps {
  avatar: string;
  fullName: string;
  gifts: number;
  place: number;
}

export const LeaderCard = ({
  avatar,
  fullName,
  gifts,
  place,
}: LeaderCardProps) => {
  return (
    <div className="flex items-center pt-2 w-full gap-x-3">
      <div className="size-10">
        <img src={avatar} alt="Avatar" className="object-cover" />
      </div>
      <div className="flex justify-between items-center w-full border-b-0.5 border-separator pb-2">
        <div>
          <span className="text-base-plus leading-5.5">{fullName}</span>
          <div className="flex items-center gap-x-1.5">
            <Gift className="size-3" />
            <span className="text-pre-xs leading-4 text-primary">
              {gifts} gifts
            </span>
          </div>
        </div>
        <span className="flex items-center text-label-secondary font-medium text-pre-sm">
          {place === 1 && <img src={Gold} alt="Place" className="size-5.5" />}
          {place === 2 && <img src={Silver} alt="Place" className="size-5.5" />}
          {place === 3 && <img src={Bronze} alt="Place" className="size-5.5" />}
          {place > 3 && <>#{place}</>}
        </span>
      </div>
    </div>
  );
};
