import { useViewGift } from "../model/store";
import { Modal, Typography } from "@/shared/ui";
import { GiftInfoTable } from "@/widgets/table";
import { mainButton, switchInlineQuery } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export const ViewGiftModal = () => {
  const open = useViewGift((state) => state.open);
  const gift = useViewGift((state) => state.gift);
  const setOpen = useViewGift((state) => state.setOpen);
  const onClose = () => {
    setOpen(false);
    mainButton.setParams({
      hasShineEffect: false,
      isVisible: false,
      isEnabled: false,
    });
  };
  const handleMainClick = () => {
    switchInlineQuery("some", ["users"]);
  };
  useEffect(() => {
    mainButton.onClick(handleMainClick);
    return () => {
      mainButton.offClick(handleMainClick);
    };
  }, []);
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col justify-center items-center p-4 bg-secondary-bg-color rounded-t-2xl flex-1">
        <img src={gift?.imageUrl} alt={gift?.name} className="size-37.5" />
        <Typography variant="title-lg" className="mt-3 mb-6">
          Send Gift
        </Typography>
        <GiftInfoTable
          fields={[
            { label: "Gift", value: gift?.name as string },
            { label: "Date", value: gift?.name as string },
            { label: "Price", value: `${gift?.price} ${gift?.currency}` },
            {
              label: "Availability",
              value: `${gift?.availability} of ${gift?.totalIssued}`,
            },
          ]}
        />
      </div>
    </Modal>
  );
};
