import { LeaderCard, Section } from "@/shared/ui";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/shared/api/generated/users/users";
import { initDataUser } from "@telegram-apps/sdk-react";
// import Search from "@/assets/search.svg?react";

export const LeaderboardOverview = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers().usersControllerFindAll({ orderBy: "giftCount" }),
  });
  return (
    <>
      <div className="sticky top-0 w-full pt-2.5 pb-2 bg-bg-color border-b-0.3 border-separator z-30">
        <Section className="relative">
          {/* <Search className="size-5 absolute" /> */}
          <input
            type="text"
            placeholder="Search"
            className="bg-input w-full py-2 placeholder:text-placeholder placeholder:text-center  placeholder:text-base-plus placeholder:leading-5.5 rounded-pre-xl outline-none px-4 "
          />
        </Section>
      </div>
      <div className="bg-bg-primary">
        <div className="flex flex-col">
          {users?.map((user, index) => (
            <LeaderCard
              key={index}
              avatar={user.profilePhoto}
              fullName={user.fullName}
              gifts={user.gifts?.length as number}
              place={index + 1}
              me={initDataUser()?.id === user.telegramId}
              // me={user.telegramId === 247753204}
            />
          ))}
          {/* <LeaderCard
            avatar={Avatar}
            fullName="Alicia"
            gifts={1000}
            place={1}
          />
          <LeaderCard
            avatar={Avatar2}
            fullName="John Doe"
            gifts={950}
            place={2}
          />
          <LeaderCard
            avatar={Avatar3}
            fullName="Roberto"
            gifts={802}
            place={3}
          />
          <LeaderCard avatar={Avatar4} fullName="Bob" gifts={756} place={4} />
          <LeaderCard
            avatar={Avatar}
            fullName="Alicia"
            gifts={1000}
            place={5}
          />
          <LeaderCard
            avatar={Avatar2}
            fullName="John Doe"
            gifts={950}
            place={6}
          />
          <LeaderCard
            avatar={Avatar3}
            fullName="Roberto"
            gifts={802}
            place={7}
          />
          <LeaderCard avatar={Avatar4} fullName="Bob" gifts={756} place={8} />
          <LeaderCard
            avatar={Avatar}
            fullName="Alicia"
            gifts={1000}
            place={9}
          />
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
          <LeaderCard
            avatar={Avatar}
            fullName="Alicia"
            gifts={1000}
            place={13}
          />
          <LeaderCard
            avatar={Avatar2}
            fullName="John Doe"
            gifts={950}
            place={14}
            me
          />
          <LeaderCard
            avatar={Avatar3}
            fullName="Roberto"
            gifts={802}
            place={15}
          /> */}
        </div>
      </div>
    </>
  );
};
