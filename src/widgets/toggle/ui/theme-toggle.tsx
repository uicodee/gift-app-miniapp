import { useTheme } from "@/shared/hooks";
import { cn } from "@/shared/ui/utils";
import Sun from "@/assets/sun.svg?react";
import Moon from "@/assets/moon.svg?react";

export const ThemeToggle = () => {
  const { theme, setUserTheme } = useTheme();
  return (
    <div className="inline-flex rounded-full bg-invert p-0.5">
      <button
        onClick={() => setUserTheme("light")}
        className={cn(
          "rounded-full px-2.5 py-0.75 transition-none",
          theme === "light" && "bg-bg-color"
        )}
      >
        <Sun
          className={cn(
            "h-[22px] w-[18px]",
            theme === "dark" ? "text-label-secondary" : "text-accent-text-color"
          )}
        />
      </button>
      <button
        onClick={() => setUserTheme("dark")}
        className={cn(
          "rounded-full px-2.5 py-0.75 transition-none",
          theme === "dark" && "bg-bg-color"
        )}
      >
        <Moon
          className={cn(
            "h-[22px] w-[17px]",
            theme === "dark" ? "text-accent-text-color" : "text-label-secondary"
          )}
        />
      </button>
    </div>
  );
};
