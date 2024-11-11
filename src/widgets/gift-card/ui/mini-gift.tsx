import { motion } from "framer-motion";

interface MiniGiftCardProps {
  title: string;
  giftImageUrl: string;
  onClick: () => void;
}

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
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img src={giftImageUrl} alt="Gift Image" className="mt-1 size-20" />
      </motion.div>

      <button
        className="rounded-full bg-accent-blue text-white font-semibold text-pre-xs leading-4.5 py-1.5 px-6.25 mb-1"
        onClick={onClick}
      >
        Send
      </button>
    </div>
  );
};
