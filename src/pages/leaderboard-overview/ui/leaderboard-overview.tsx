import Avatar from "@/assets/avatar.png";
import Avatar2 from "@/assets/avatar-2.png";
import Avatar3 from "@/assets/avatar-3.png";
import Avatar4 from "@/assets/avatar-4.png";
import { LeaderCard } from "@/shared/ui";

export const LeaderboardOverview = () => {
  return (
    <div>
      <div className="sticky top-0 w-full pt-2.5 pb-2 bg-white border-b-0.5 border-separator">
        <input
          type="text"
          placeholder="Search"
          className="bg-secondary w-full py-2 placeholder:text-center placeholder:text-separator placeholder:text-base-plus placeholder:leading-5.5 rounded-xl outline-none px-4"
        />
      </div>
      <div className="flex flex-col">
        <LeaderCard avatar={Avatar} fullName="Alicia" gifts={1000} place={1} />
        <LeaderCard
          avatar={Avatar2}
          fullName="John Doe"
          gifts={950}
          place={2}
        />
        <LeaderCard avatar={Avatar3} fullName="Roberto" gifts={802} place={3} />
        <LeaderCard avatar={Avatar4} fullName="Bob" gifts={756} place={4} />
        <LeaderCard avatar={Avatar} fullName="Alicia" gifts={1000} place={5} />
        <LeaderCard
          avatar={Avatar2}
          fullName="John Doe"
          gifts={950}
          place={6}
        />
        <LeaderCard avatar={Avatar3} fullName="Roberto" gifts={802} place={7} />
        <LeaderCard avatar={Avatar4} fullName="Bob" gifts={756} place={8} />
        <LeaderCard avatar={Avatar} fullName="Alicia" gifts={1000} place={9} />
        <LeaderCard
          avatar={Avatar2}
          fullName="John Doe"
          gifts={950}
          place={10}
        />
        <LeaderCard
          avatar={Avatar3}
          fullName="Roberto"
          gifts={802}
          place={11}
        />
        <LeaderCard avatar={Avatar4} fullName="Bob" gifts={756} place={12} />
      </div>
    </div>
  );
};
