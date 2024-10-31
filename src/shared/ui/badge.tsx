import { HTMLAttributes } from "react";
import { cn } from "./utils";

type BadgeProps = HTMLAttributes<HTMLDivElement>;

export const Badge = ({ className, children }: BadgeProps) => {
  return (
    <div
      className={cn(
        "font-medium px-2 rounded-full text-sm leading-5.5",
        className
      )}
    >
      {children}
    </div>
  );
};
