import { HTMLAttributes, useMemo } from "react";
import { cn } from "./utils";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  path?: string | null;
  fullName?: string | null;
}

export const Avatar = ({
  className,
  path,
  fullName,
  ...props
}: AvatarProps) => {
  const acronym = useMemo(() => {
    if (!fullName) return "";
    const namePieces = fullName.trim().split(" ");
    return namePieces.length > 1
      ? `${namePieces[0][0]}${namePieces[1][0]}`.toUpperCase()
      : namePieces[0][0]?.toUpperCase() || "";
  }, [fullName]);

  const randomGradient = useMemo(() => {
    const gradients = [
      "bg-gradient-to-b from-green-300 to-purple-600",
      "bg-gradient-to-b from-pink-300 to-yellow-500",
      "bg-gradient-to-b from-purple-300 to-red-500",
      "bg-gradient-to-b from-blue-300 to-teal-500",
      "bg-gradient-to-b from-indigo-300 to-blue-500",
      "bg-gradient-to-b from-orange-300 to-pink-500",
      "bg-gradient-to-b from-yellow-300 to-green-500",
      "bg-gradient-to-b from-red-300 to-purple-500",
      "bg-gradient-to-b from-teal-300 to-indigo-500",
      "bg-gradient-to-b from-lime-300 to-blue-600",
      "bg-gradient-to-b from-pink-400 to-purple-700",
      "bg-gradient-to-b from-sky-300 to-cyan-600",
      "bg-gradient-to-b from-rose-300 to-fuchsia-600",
      "bg-gradient-to-b from-emerald-300 to-teal-700",
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  }, []);

  return path ? (
    <div
      className={cn(
        "w-10 h-10 rounded-full overflow-hidden flex-shrink-0",
        className
      )}
      {...props}
    >
      <img
        src={path}
        alt={fullName || "Avatar"}
        className="w-full h-full object-cover"
      />
    </div>
  ) : (
    <div
      className={cn(
        "w-10 h-10 flex justify-center items-center rounded-full overflow-hidden flex-shrink-0",
        randomGradient,
        className
      )}
      {...props}
    >
      <span className="uppercase font-bold text-white">{acronym}</span>
    </div>
  );
};
