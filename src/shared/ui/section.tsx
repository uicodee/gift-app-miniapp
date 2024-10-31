import { HTMLAttributes } from "react";
import { cn } from "./utils";

type SectionProps = HTMLAttributes<HTMLDivElement>;

export const Section = ({ className, children }: SectionProps) => {
  return <div className={cn("px-4", className)}>{children}</div>;
};
