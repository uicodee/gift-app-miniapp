import {
  Typography,
  MiniGiftCard,
  Section,
  MiniGiftCardSkeleton,
} from "@/shared/ui";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/shared/api/generated/users/users";
import { initDataRaw, mainButton } from "@telegram-apps/sdk-react";
import { ViewGiftModal, useViewGift } from "@/features/view-gift";
import { EmptyGifts } from "@/widgets/placeholders";

export const GiftsOverview = () => {
  const setOpen = useViewGift((state) => state.setOpen);
  const setGift = useViewGift((state) => state.setGift);
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      getUsers().usersControllerGetMe({
        headers: { Authorization: initDataRaw() },
      }),
  });

  const gifts = user?.gifts || [];

  return (
    <Section className="h-full">
      <ViewGiftModal />
      <div className="flex flex-col pt-6 pb-7 items-center justify-center text-center gap-y-2">
        <Typography variant="title-lg">Send Gifts in Telegram</Typography>
        <Typography variant="text" className="text-label-secondary max-w-xxs">
          Send gifts to users that can be stored in their app profile.
        </Typography>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-3 py-2 gap-2">
          {Array.from({ length: 9 }).map((_, index) => (
            <MiniGiftCardSkeleton key={index} />
          ))}
        </div>
      ) : gifts.length > 0 ? (
        <div className="grid grid-cols-3 py-2 gap-2">
          {gifts.map((gift, index) => (
            <MiniGiftCard
              key={index}
              title={gift.name}
              giftImageUrl={gift.imageUrl}
              onClick={() => {
                setOpen(true);
                setGift(gift);
                mainButton.mount();
                mainButton.setParams({
                  backgroundColor: "#007aff",
                  text: "Buy Gift",
                  isVisible: true,
                  isEnabled: true,
                });
              }}
            />
          ))}
        </div>
      ) : (
        <EmptyGifts
          title="You don't have any gifts yet."
          linkText="Open Store"
          link="/"
        />
      )}
    </Section>
  );
};
