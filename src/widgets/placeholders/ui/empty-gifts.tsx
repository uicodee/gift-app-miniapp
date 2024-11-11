import { Section, Typography } from "@/shared/ui";
import Image from "@/assets/image.png";
import { Link } from "react-router-dom";
import { cn } from "@/shared/ui/utils";

interface EmptyGiftsProps {
  title: string;
  linkText?: string;
  link?: string;
  className?: string;
}

export const EmptyGifts = ({
  title,
  link,
  linkText,
  className,
}: EmptyGiftsProps) => {
  return (
    <Section
      className={cn(
        "flex flex-col justify-center items-center text-center bg-section rounded-xl py-8 gap-y-4",
        className
      )}
    >
      <img src={Image} alt="Empty" className="size-25" />
      <Typography variant="text">{title}</Typography>
      {link && linkText && (
        <Link to={link}>
          <Typography variant="text" className="text-primary">
            {linkText}
          </Typography>
        </Link>
      )}
    </Section>
  );
};
