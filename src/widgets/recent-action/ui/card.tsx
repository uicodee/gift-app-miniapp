import { Action, ActionActionType } from "@/shared/api/model";
import { Cell, Typography } from "@/shared/ui";
import { Avatar } from "@/shared/ui/avatar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface RecentActionProps {
  action: Action;
}

export const RecentAction = ({ action }: RecentActionProps) => {
  const { t } = useTranslation();
  const statuses: Record<ActionActionType, string> = {
    buy: t("common.buy"),
    send: t("common.giftSend"),
    receive: t("common.receive"),
  };

  const statusText: Record<ActionActionType, string> = {
    buy: t("common.bought"),
    send: t("common.giftSended"),
    receive: t("common.giftReceived"),
  };

  const userLink = (
    <Link
      className="text-accent-blue"
      // @ts-ignore
      to={`/profile/${action.user._id}`}
    >
      {action.user.fullName}
    </Link>
  );

  const recipientLink = action.recipient && (
    <Link
      className="text-accent-blue"
      // @ts-ignore
      to={`/profile/${action.recipient._id}`}
    >
      {action.recipient.fullName}
    </Link>
  );

  const avatarPath =
    action.actionType === "receive"
      ? action.recipient?.profilePhoto
      : action.user.profilePhoto;

  const avatarName =
    action.actionType === "receive"
      ? action.recipient?.fullName
      : action.user.fullName;

  const actionText = () => {
    switch (action.actionType) {
      case "buy":
        return (
          <>
            {userLink} {statusText.buy}
          </>
        );
      case "send":
        return (
          <>
            {userLink} {statusText.send} {recipientLink}
          </>
        );
      case "receive":
        return (
          <>
            {recipientLink} {statusText.receive} {userLink}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Cell
      before={<Avatar path={avatarPath} fullName={avatarName} />}
      subhead={
        <Typography variant="caption">{statuses[action.actionType]}</Typography>
      }
    >
      <Typography variant="text-bold">{actionText()}</Typography>
    </Cell>
  );
};
