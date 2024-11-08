import { Section, Typography } from "@/shared/ui";
import Avatar from "@/assets/Avatar - People - Mark.png";
import { Link } from "react-router-dom";
import { useMemo } from "react";

interface GiftProps {
  profilePhoto: string;
  edition: number;
  ofEdition: number;
  imageUrl: string;
  title: string;
}

const Gift = ({
  profilePhoto,
  edition,
  ofEdition,
  imageUrl,
  title,
}: GiftProps) => {
  const [formattedEdition, formattedOfEdition] = useMemo(
    () => [
      new Intl.NumberFormat("en", {
        notation: "compact",
        compactDisplay: "short",
      }).format(edition),
      new Intl.NumberFormat("en", {
        notation: "compact",
        compactDisplay: "short",
      }).format(ofEdition),
    ],
    [edition, ofEdition]
  );
  return (
    <div className="flex flex-col justify-between bg-secondary-bg-color rounded-xl pt-2 pb-3 px-3 text-center">
      <div className="flex justify-between">
        <img src={profilePhoto} alt="" className="size-4 rounded-full" />
        <span className="text-pre-xs self-end leading-4.5 opacity-50 mb-2 text-accent-text-color">
          {formattedEdition} of {formattedOfEdition}
        </span>
      </div>
      <div className="flex justify-center mt-1">
        <img src={imageUrl} alt="" className="size-20" />
      </div>
      <div className="mt-0.5 mb-1">
        <span className="text-sm text-accent-text-color">{title}</span>
      </div>
    </div>
  );
};

export const ProfileOverview = () => {
  return (
    <Section>
      <div className="flex items-start justify-between pt-2 w-full">
        <div className="bg-secondary-bg-color w-3/12">Theme</div>
        <div className="text-center w-6/12">
          <div className="flex flex-col relative items-center  mb-3 text-center">
            <div>
              <img src={Avatar} alt="" className="size-25 rounded-full" />
            </div>
            <div className="absolute -bottom-2 rounded-full text-center bg-label-secondary text-white font-medium px-2 leading-5.5 outline-2 outline outline-white text-pre-xs">
              #160
            </div>
          </div>
          <Typography variant="title-lg" className="mb-1">
            Mark
          </Typography>
          <Typography variant="text" className="text-label-secondary mb-6">
            128 gift received
          </Typography>
          <Link to="recent-action">
            <Typography variant="text" className="text-primary">
              Recent Actions
            </Typography>
          </Link>
        </div>
        <div className="bg-secondary-bg-color w-3/12">Language</div>
      </div>
      <div className="grid grid-cols-3 gap-2 py-6">
        <Gift
          profilePhoto={Avatar}
          edition={1}
          ofEdition={10000}
          imageUrl="https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/gift-image.png"
          title="Green Star"
        />
        <Gift
          profilePhoto={Avatar}
          edition={1}
          ofEdition={10000}
          imageUrl="https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/gift-image.png"
          title="Delicious Cake"
        />
        <Gift
          profilePhoto={Avatar}
          edition={1}
          ofEdition={10000}
          imageUrl="https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/gift-image.png"
          title="Blue Star"
        />
      </div>
    </Section>
  );
};
