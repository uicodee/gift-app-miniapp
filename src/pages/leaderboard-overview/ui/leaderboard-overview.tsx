import { Section } from "@/shared/ui";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/shared/api/generated/users/users";
import { initDataUser } from "@telegram-apps/sdk-react";
import { AnimatedWrapper } from "@/widgets/animation";
import { LeaderCard } from "@/widgets/leader";
import { useTranslation } from "react-i18next";
// import Search from "@/assets/search.svg?react";

export const LeaderboardOverview = () => {
  const { t } = useTranslation();
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers().usersControllerFindAll({ orderBy: "giftCount" }),
  });
  return (
    <AnimatedWrapper>
      <div className="sticky top-0 w-full pt-2.5 pb-2 bg-bg-color border-b-0.3 border-separator z-30">
        <Section className="relative">
          {/* <Search className="size-5 absolute" /> */}
          <input
            type="text"
            placeholder={t("common.search")}
            className="bg-input w-full py-2 placeholder:text-placeholder placeholder:text-center  placeholder:text-base-plus placeholder:leading-5.5 rounded-pre-xl outline-none px-4 "
          />
        </Section>
      </div>
      <div className="bg-bg-primary">
        <div className="flex flex-col">
          {users?.map((user, index) => (
            <LeaderCard
              // @ts-ignore
              id={user._id}
              key={index}
              avatar={user.profilePhoto}
              fullName={user.fullName}
              gifts={user.gifts?.length as number}
              place={index + 1}
              me={initDataUser()?.id === user.telegramId}
              isLast={users.length === index + 1}
            />
          ))}
        </div>
      </div>
    </AnimatedWrapper>
  );
};
