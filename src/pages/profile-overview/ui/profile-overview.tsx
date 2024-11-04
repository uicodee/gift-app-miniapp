import { Section, Typography } from "@/shared/ui";
import Avatar from "@/assets/Avatar - People - Mark.png";
import { Link } from "react-router-dom";

export const ProfileOverview = () => {
  return (
    <Section>
      <div className="flex items-start justify-between py-2">
        <div className="bg-secondary-bg-color">Theme</div>
        <div className="text-center">
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
        <div>Language</div>
      </div>
    </Section>
  );
};
