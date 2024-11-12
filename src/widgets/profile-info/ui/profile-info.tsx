import { Typography } from "@/shared/ui";
import { Avatar } from "@/shared/ui/avatar";
import { useTranslation } from "react-i18next";

interface ProfileInfoProps {
  avatarPath: string | null;
  rating: number;
  fullName: string;
  giftCount: number;
}

export const ProfileInfo = ({
  avatarPath,
  rating,
  fullName,
  giftCount,
}: ProfileInfoProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col relative items-center mb-3">
        <Avatar path={avatarPath} className="size-25" />
        {rating !== 1 && (
          <div className="absolute -bottom-2 rounded-full text-center bg-label-secondary text-white font-medium px-2 leading-5.5 outline-2 outline outline-bg-color text-pre-xs">
            #{rating}
          </div>
        )}
      </div>
      <Typography variant="title-lg" className="mb-1">
        {fullName}
      </Typography>
      <Typography variant="text" className="text-label-secondary">
        {giftCount} {t("pages.profile.giftReceived")}
      </Typography>
    </>
  );
};
