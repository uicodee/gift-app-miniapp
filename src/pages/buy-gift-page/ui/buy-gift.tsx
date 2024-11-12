import { useBackBtn, useMainBtn } from "@/shared/hooks";
import { Cell, List, Section, Typography } from "@/shared/ui";
import { DetailGiftCard, DetailGiftCardSkeleton } from "@/widgets/gift-card";
import Avatar from "@/assets/avatar.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getGifts } from "@/shared/api/generated/gifts/gifts";
import { useParams } from "react-router-dom";
import { initDataRaw, openInvoice } from "@telegram-apps/sdk-react";
import { BuyGiftDto, Gift } from "@/shared/api/model";

export const BuyGift = () => {
  const { giftId } = useParams<{ giftId: string }>();
  const { data: gift, isLoading } = useQuery({
    queryKey: ["gift", giftId],
    queryFn: () =>
      getGifts().giftsControllerFindOne(giftId as string, {
        headers: { Authorization: initDataRaw() },
      }),
  });
  const mutation = useMutation({
    mutationFn: (variables: BuyGiftDto) =>
      getGifts().giftsControllerBuy(variables, {
        headers: { Authorization: initDataRaw() },
      }),
  });
  useMainBtn("Buy a Gift", () => {
    // mutation.mutate({gift: })
    // @ts-ignore
    mutation.mutate({ gift: gift?._id });
    openInvoice(
      // "https://t.me/invoice/jd231xxSd1",
      "https://t.me/CryptoTestnetBot/app?startapp=invoice-IVdry0FatMRV&mode=compact",
      "url"
    );
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
        <Cell
          before={<img src={Avatar} className="size-10" />}
          subhead={<Typography variant="caption">Send gift</Typography>}
        >
          <Typography variant="text-bold">
            <span className="text-accent-blue">Alicia</span> sent gift to{" "}
            <span className="text-accent-blue">Mark</span>
          </Typography>
        </Cell>
        <Cell
          before={<img src={Avatar} className="size-10" />}
          subhead={<Typography variant="caption">Send gift</Typography>}
        >
          <Typography variant="text-bold">
            <span className="text-accent-blue">Alicia</span> sent gift to{" "}
            <span className="text-accent-blue">Mark</span>
          </Typography>
        </Cell>
        <Cell
          before={<img src={Avatar} className="size-10" />}
          subhead={<Typography variant="caption">Send gift</Typography>}
        >
          <Typography variant="text-bold">
            <span className="text-accent-blue">Alicia</span> sent gift to{" "}
            <span className="text-accent-blue">Mark</span>
          </Typography>
        </Cell>
        <Cell
          before={<img src={Avatar} className="size-10" />}
          subhead={<Typography variant="caption">Send gift</Typography>}
        >
          <Typography variant="text-bold">
            <span className="text-accent-blue">Alicia</span> sent gift to{" "}
            <span className="text-accent-blue">Mark</span>
          </Typography>
        </Cell>
        <Cell
          before={<img src={Avatar} className="size-10" />}
          subhead={<Typography variant="caption">Send gift</Typography>}
        >
          <Typography variant="text-bold">
            <span className="text-accent-blue">Alicia</span> sent gift to{" "}
            <span className="text-accent-blue">Mark</span>
          </Typography>
        </Cell>
      </Section>
    </List>
  );
};
