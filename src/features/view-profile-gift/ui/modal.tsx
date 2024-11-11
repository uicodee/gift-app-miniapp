import { useViewProfileGift } from "../model/store";
import { Modal, Typography } from "@/shared/ui";
import { GiftInfoTable } from "@/widgets/table";
import { mainButton } from "@telegram-apps/sdk-react";

export const ViewProfileGiftModal = () => {
  const open = useViewProfileGift((state) => state.open);
  const gift = useViewProfileGift((state) => state.gift);
  const setOpen = useViewProfileGift((state) => state.setOpen);
  const onClose = () => {
    setOpen(false);
    mainButton.setParams({
      hasShineEffect: false,
      isVisible: false,
      isEnabled: false,
    });
  };
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col justify-center items-center p-4 bg-secondary-bg-color rounded-t-2xl flex-1">
        <img src={gift?.imageUrl} alt={gift?.name} className="size-37.5" />
        <Typography variant="title-lg" className="mt-3 mb-6">
          {gift?.name}
        </Typography>
        <GiftInfoTable
          fields={[
            { label: "From", value: gift?.name as string },
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
