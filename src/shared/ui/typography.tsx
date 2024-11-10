import { CSSProperties, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

const typography = cva("font-sans", {
  variants: {
    variant: {
      // tracking-[-0.43px]
      // tracking-[0.26px]
      "title-lg": "text-accent-text-color font-semibold text-2xl leading-8",
      title: "text-accent-text-color font-semibold text-base-plus leading-5.5",
      text: "text-accent-text-color font-normal text-base-plus leading-5.5",
      "text-bold":
        "text-accent-text-color font-medium text-base-plus leading-5.5",
      caption:
        // tracking-[-0.08px]
        "text-secondary-text-color font-normal text-pre-xs leading-4.5 ",
    },
  },
  defaultVariants: {
    variant: "text",
  },
});

interface TypographyProps extends VariantProps<typeof typography> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Typography = ({
  variant = "text",
  children,
  className = "",
  style,
}: TypographyProps) => {
  return (
    <div className={typography({ variant, className })} style={style}>
      {children}
    </div>
  );
};
