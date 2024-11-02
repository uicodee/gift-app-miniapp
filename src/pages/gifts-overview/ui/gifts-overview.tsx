import { Typography, MiniGiftCard, Section } from "@/shared/ui";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/shared/api/generated/users/users";
import { initDataRaw } from "@telegram-apps/sdk-react";
import Image from "@/assets/image.png";

const GiftsEmpty = () => {
  return (
    <Section className="flex flex-col justify-center items-center text-center bg-section rounded-xl py-8 gap-y-4">
      <img src={Image} alt="Empty" className="size-25" />
      <Typography variant="text" className="">
        You don't have any gifts yet.
      </Typography>
      <Typography variant="text" className="text-primary">
        Open Store
      </Typography>
    </Section>
  );
};

export const GiftsOverview = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      getUsers().usersControllerGetMe({
        headers: { Authorization: initDataRaw() },
      }),
  });
  return (
    <Section className="h-full">
      <div className="flex flex-col pt-6 pb-7 items-center justify-center text-center gap-y-2">
        <Typography variant="title-lg">Send Gifts in Telegram</Typography>
        <Typography variant="text" className="text-label-secondary max-w-xxs">
          Send gifts to users that can be stored in their app profile.
        </Typography>
      </div>
      {!isLoading && user?.gifts?.length && user?.gifts?.length > 0 ? (
        <div className="grid grid-cols-3 py-2 gap-2">
          {user?.gifts?.map((gift) => (
            <MiniGiftCard title={gift.name} giftImage={gift.imageUrl} />
          ))}
        </div>
      ) : (
        <GiftsEmpty />
      )}
    </Section>
  );
};
