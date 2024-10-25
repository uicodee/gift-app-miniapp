import { PropsWithChildren } from "react";

export const Paragraph = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <p
      className={`text-label-secondary text-base-plus leading-5.5 -tracking-paragraph ${className}`}
    >
      {children}
    </p>
  );
};
