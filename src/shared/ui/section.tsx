import { HTMLAttributes, RefAttributes } from "react";
import { cn } from "./utils";

type SectionProps = HTMLAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

export const Section = ({ className, children, ref }: SectionProps) => {
  return (
    <div className={cn("px-4", className)} ref={ref}>
      {children}
    </div>
  );
};
