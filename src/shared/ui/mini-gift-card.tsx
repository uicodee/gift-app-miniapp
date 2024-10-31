interface MiniGiftCard {
  title: string;
  giftImage: string;
}

export const MiniGiftCard = ({ title, giftImage }: MiniGiftCard) => {
  return (
    <div className="flex flex-col justify-between items-center bg-section rounded-xl px-3 py-2 text-center">
      <span className="text-xs text-label-secondary leading-4.5 font-light">
        {title}
      </span>
      <img src={giftImage} alt="Gift Image" className="mt-1 size-20" />
      <button className="rounded-full bg-accent-blue text-white font-semibold text-pre-xs leading-4.5 py-1.5 px-6.25 mb-1">
        Send
      </button>
    </div>
  );
};
