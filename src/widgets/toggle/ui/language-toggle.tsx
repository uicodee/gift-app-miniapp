import { cn } from "@/shared/ui/utils";
import { useState } from "react";

export const LanguageToggle = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <div className="inline-flex rounded-full bg-invert p-0.5">
      <button
        onClick={() => setLanguage("EN")}
        className={cn(
          "rounded-full px-2.5 py-0.75 text-label-secondary",
          language === "EN" && "bg-bg-color text-accent-text-color"
        )}
      >
        <span className="text-sm font-semibold leading-5.5 transition-none">
          EN
        </span>
      </button>
      <button
        onClick={() => setLanguage("RU")}
        className={cn(
          "rounded-full px-2.5 py-0.75 text-label-secondary transition-none",
          language === "RU" && "bg-bg-color text-accent-text-color"
        )}
      >
        <span className="text-sm font-semibold leading-5.5">RU</span>
      </button>
    </div>
  );
};
