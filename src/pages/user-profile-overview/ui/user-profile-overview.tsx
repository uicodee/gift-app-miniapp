import { useBackBtn } from "@/shared/hooks";
import { MiniGiftCardSkeleton, ProfileGift } from "@/widgets/gift-card";
import { ProfileInfo } from "@/widgets/profile-info";
import { useParams } from "react-router-dom";
import UserAvatar from "@/assets/Avatar - People - Mark.png";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/shared/api/generated/users/users";
import { EmptyGifts } from "@/widgets/placeholders";
import { AnimatedWrapper } from "@/widgets/animation";

export const UserProfileOverview = () => {
  const { userId } = useParams<{ userId: string }>();
  const { data: user, isLoading } = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getUsers().usersControllerFindOne(userId as string),
  });

  const gifts = user?.gifts || [];

  useBackBtn();
  return (
    <AnimatedWrapper className="w-full flex flex-col justify-center text-center py-2 px-3">
      <div>
        <ProfileInfo
          avatarPath={user?.profilePhoto as string}
          rating={6}
          fullName={user?.fullName as string}
          giftCount={gifts.length as number}
        />
      </div>
      <div className="mt-6">
        {isLoading ? (
          <div className="grid grid-cols-3 py-2 gap-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <MiniGiftCardSkeleton key={index} />
            ))}
          </div>
        ) : gifts.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {user?.gifts?.map((gift, index) => (
              <ProfileGift
                key={index}
                profilePhoto={UserAvatar}
                edition={gift.availability}
                ofEdition={gift.totalIssued}
                imageUrl={gift.imageUrl}
                title={gift.name}
              />
            ))}
          </div>
        ) : (
          <EmptyGifts title="This user don't have any gifts yet." />
        )}
      </div>
    </AnimatedWrapper>
  );
};
