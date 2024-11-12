import { useBackBtn, useMainBtn } from "@/shared/hooks";
import { List, Section } from "@/shared/ui";
import { DetailGiftCard, DetailGiftCardSkeleton } from "@/widgets/gift-card";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getGifts } from "@/shared/api/generated/gifts/gifts";
import { useParams } from "react-router-dom";
import { initDataRaw, openTelegramLink } from "@telegram-apps/sdk-react";
import { BuyGiftDto, Gift } from "@/shared/api/model";
import { getActions } from "@/shared/api/generated/actions/actions";
import { RecentAction } from "@/widgets/recent-action";
import { getInvoice } from "@/shared/api/generated/invoice/invoice";

export const BuyGift = () => {
  const { giftId } = useParams<{ giftId: string }>();
  const { data: actions } = useQuery({
    queryKey: ["actions", giftId],
    queryFn: () => getActions().actionsControllerFindGiftAll(giftId as string),
  });
  const { data: gift, isLoading } = useQuery({
    queryKey: ["gift", giftId],
    queryFn: () =>
      getGifts().giftsControllerFindOne(giftId as string, {
        headers: { Authorization: initDataRaw() },
      }),
  });
  const mutation = useMutation({
    mutationFn: (variables: BuyGiftDto) =>
      getInvoice().invoiceControllerCreate(variables, {
        headers: { Authorization: initDataRaw() },
      }),
    onSuccess: (res) => {
      openTelegramLink(res.url + "&mode=compact");
    },
  });
  useMainBtn("Buy a Gift", () => {
    // @ts-ignore
    mutation.mutate({ gift: gift?._id });
  });
  useBackBtn();
  return (
    <List>
      <Section>
        {isLoading ? (
          <DetailGiftCardSkeleton />
        ) : (
          <DetailGiftCard gift={gift as Gift} />
        )}
      </Section>
      <Section>
        {actions?.map((action) => (
          <RecentAction action={action} />
        ))}
      </Section>
    </List>
  );
};
