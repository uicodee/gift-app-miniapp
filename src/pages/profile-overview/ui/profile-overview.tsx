import { MiniGiftCardSkeleton, Section, Typography } from "@/shared/ui";
import UserAvatar from "@/assets/Avatar - People - Mark.png";
import { Link } from "react-router-dom";
import Recent from "@/assets/recent.svg?react";

import { LanguageToggle, ThemeToggle } from "@/widgets/toggle";
import { ProfileGift } from "@/widgets/card";
import { ProfileInfo } from "@/widgets/profile-info";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/shared/api/generated/users/users";
import { initDataRaw, mainButton } from "@telegram-apps/sdk-react";
import { EmptyGifts } from "@/widgets/placeholders";
import {
  useViewProfileGift,
  ViewProfileGiftModal,
} from "@/features/view-profile-gift";

export const ProfileOverview = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      getUsers().usersControllerGetMe({
        headers: { Authorization: initDataRaw() },
      }),
  });

  const gifts = user?.gifts || [];
  const setOpen = useViewProfileGift((state) => state.setOpen);
  const setGift = useViewProfileGift((state) => state.setGift);

  return (
    <Section>
      <ViewProfileGiftModal />
      <div className="flex items-start justify-between pt-2 w-full">
        <ThemeToggle />
        <div className="text-center w-6/12">
          <ProfileInfo
            avatarPath={user?.profilePhoto as string}
            rating={2}
            fullName={user?.fullName as string}
            giftCount={user?.gifts?.length as number}
          />
          <Link to="recent-action" className="flex justify-center gap-x-1 mt-6">
            <Recent />
            <Typography variant="text" className="text-primary">
              Recent Actions ›
            </Typography>
          </Link>
        </div>
        <LanguageToggle />
      </div>
      {isLoading ? (
        <div className="grid grid-cols-3 py-6 gap-2">
          {Array.from({ length: 9 }).map((_, index) => (
            <MiniGiftCardSkeleton key={index} />
          ))}
        </div>
      ) : gifts.length > 0 ? (
        <div className="grid grid-cols-3 gap-2 py-6">
          {user?.gifts?.map((gift, index) => (
            <ProfileGift
              key={index}
              profilePhoto={UserAvatar}
              edition={gift.availability}
              ofEdition={gift.totalIssued}
              imageUrl={gift.imageUrl}
              title={gift.name}
              onClick={() => {
                setOpen(true);
                setGift(gift);
                mainButton.mount();
                mainButton.setParams({
                  backgroundColor: "#007aff",
                  text: "Close",
                  isVisible: true,
                  isEnabled: true,
                });
              }}
            />
          ))}
        </div>
      ) : (
        <EmptyGifts
          title="You can buy a gift to receive a gift in return."
          linkText="Open Store"
          link="/"
          className="mt-6"
        />
      )}
    </Section>
  );
};
