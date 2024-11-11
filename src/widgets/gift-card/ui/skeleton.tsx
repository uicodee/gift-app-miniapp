import { cn } from "@/shared/ui/utils";

export const DetailGiftCardSkeleton = () => {
  return (
    <div className="pt-4 pb-0">
      <div
        className={cn(
          "relative w-full p-12 bg-gradient-to-b rounded-2xl bg-secondary-bg-color animate-pulse"
        )}
      >
        <div className="absolute inset-0 overflow-clip bg-auto rounded-2xl"></div>
        <div className="w-full h-52 rounded-md z-20 relative"></div>
      </div>
      <div className="flex flex-col bg-bg-color py-3 gap-2">
        <div className="flex items-center gap-x-3">
          <div className="w-5/12 h-8 bg-secondary-bg-color rounded"></div>
          <div className="w-2/12 h-6 bg-secondary-bg-color rounded-full"></div>
        </div>
        <div className="w-full h-4 bg-secondary-bg-color rounded"></div>
        <div className="flex items-center gap-2 py-1">
          <div className="size-6 bg-secondary-bg-color rounded-full"></div>
          <div className="w-1/4 h-6 bg-secondary-bg-color rounded"></div>
        </div>
      </div>
    </div>
  );
};

export const MiniGiftCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-section rounded-xl px-3 py-2 text-center">
      <div className="w-2/3 h-4 rounded animate-pulse"></div>
      <div className="mt-1 size-20 rounded-full animate-pulse"></div>
      <div className="w-full rounded-full animate-pulse py-1.5 px-6.25 mb-1 h-8"></div>
    </div>
  );
};
