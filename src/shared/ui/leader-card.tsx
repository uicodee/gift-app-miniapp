import Gift from "@/assets/gift-fill.svg?react";
import Gold from "@/assets/gold.png";
import Silver from "@/assets/silver.png";
import Bronze from "@/assets/bronze.png";
import { Avatar } from "./avatar";
import { cn } from "./utils";

interface LeaderCardProps {
  avatar?: string | null;
  fullName: string;
  gifts: number;
  place: number;
  me?: boolean;
  isLast: boolean;
}

export const LeaderCard = ({
  avatar,
  fullName,
  gifts,
  place,
  me = false,
  isLast,
}: LeaderCardProps) => {
  return (
    <div
      className={cn(
        "px-3 bg-bg-color flex items-center pt-2 w-full gap-x-3",
        me && "sticky bottom-0 z-20 border-t-0.3 border-t-separator"
      )}
    >
      <Avatar path={avatar} fullName={fullName} />
      <div
        className={cn(
          "flex justify-between items-center w-full pb-2 ",
          // !isFirst && "borde",
          !isLast && "border-b-separator border-b-0.3"
        )}
      >
        <div>
          <div className="flex items-center gap-x-1.5">
            <span className="text-base-plus leading-5.5 text-accent-text-color">
              {fullName}
            </span>
            {me && (
              <span className="text-pre-xxs bg-label-secondary-20 text-label-secondary rounded leading-3.5 px-1">
                You
              </span>
            )}
          </div>
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
