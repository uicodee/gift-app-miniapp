import { PropsWithChildren } from "react";

export const List = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-y-3">{children}</div>;
};
