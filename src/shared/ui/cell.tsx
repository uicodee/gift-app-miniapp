import { ReactNode } from "react";
import { cn } from "./utils";

interface CellProps {
  subhead?: ReactNode;
  children?: ReactNode;
  before?: ReactNode;
  after?: ReactNode;
  description?: string;
  className?: string;
}

export const Cell = ({
  subhead,
  children,
  before,
  after,
  description,
  className,
}: CellProps) => {
  return (
    <div className={cn("flex py-3 gap-x-3 border-separator", className)}>
      {before}
      <div className="flex flex-col">
        {subhead}
        {children}
        {description}
      </div>
      {after}
    </div>
  );
};
