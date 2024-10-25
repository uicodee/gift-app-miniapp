import { PropsWithChildren } from "react";
import { cn } from "./utils";

export const Heading = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <h1
      className={cn("text-2xl leading-8 text-black font-semibold", className)}
    >
      {children}
    </h1>
  );
};
