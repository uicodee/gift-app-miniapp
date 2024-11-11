import { cn } from "@/shared/ui/utils";
import { Fragment, ReactNode } from "react";

interface Field {
  label: string;
  value: ReactNode;
}

interface GiftInfoTableProps {
  fields: Field[];
}

export const GiftInfoTable = ({ fields }: GiftInfoTableProps) => {
  return (
    <section className="w-full bg-bg-color rounded-xl">
      <h2 className="sr-only">Gift Information</h2>
      <dl className="grid grid-cols-3 text-accent-text-color">
        {fields.map((field, index) => (
          <Fragment key={index}>
            <div
              className={cn(
                "col-span-1 px-4 py-2.5 border-separator border-r-0.3",
                index !== fields.length - 1 && "border-b-0.3"
              )}
            >
              <dt>{field.label}</dt>
            </div>
            <div
              className={cn(
                "col-span-2 px-4 py-2.5 border-separator",
                index !== fields.length - 1 && "border-b-0.3"
              )}
            >
              <dd>{field.value}</dd>
            </div>
          </Fragment>
        ))}
      </dl>
    </section>
  );
};
