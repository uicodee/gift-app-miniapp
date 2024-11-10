interface MiniGiftCardProps {
  title: string;
  giftImageUrl: string;
  onClick: () => void;
}

export const MiniGiftCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-section rounded-xl px-3 py-2 text-center">
      <div className="w-2/3 h-4 rounded animate-pulse"></div>
      <div className="mt-1 size-20 rounded-full animate-pulse"></div>
      <div className="w-full rounded-full animate-pulse py-1.5 px-6.25 mb-1 h-8"></div>
    </div>
  );
};

export const MiniGiftCard = ({
  title,
  giftImageUrl,
  onClick,
}: MiniGiftCardProps) => {
  return (
    <div className="flex flex-col justify-between items-center bg-section rounded-xl px-3 py-2 text-center">
      <span className="text-xs text-label-secondary leading-4.5 font-light">
        {title}
      </span>
      <img src={giftImageUrl} alt="Gift Image" className="mt-1 size-20" />
      <button
        className="rounded-full bg-accent-blue text-white font-semibold text-pre-xs leading-4.5 py-1.5 px-6.25 mb-1"
        onClick={onClick}
      >
        Send
      </button>
    </div>
  );
};
