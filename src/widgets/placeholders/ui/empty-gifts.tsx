import { Section, Typography } from "@/shared/ui";
import { Link } from "react-router-dom";
import { cn } from "@/shared/ui/utils";
import { useCachedData } from "@/shared/hooks";
import Lottie from "react-lottie-player";

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
  const animationUrl =
    "https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/emoji-balloons.json";
  const animationData = useCachedData(animationUrl, {
    cacheName: "lottie-animations",
  });
  return (
    <Section
      className={cn(
        "flex flex-col justify-center items-center text-center bg-section rounded-xl py-8 gap-y-4",
        className
      )}
    >
      {animationData ? (
        <Lottie
          play
          loop={false}
          animationData={animationData}
          className="size-25"
        />
      ) : (
        ""
      )}
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
