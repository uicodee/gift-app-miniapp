import { hapticFeedback, mainButton } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export const useMainBtn = (text: string, callback: () => void) => {
  const customCallback = () => {
    hapticFeedback.impactOccurred("medium");
    callback();
  };

  useEffect(() => {
    mainButton.mount();
    mainButton.setParams({
      backgroundColor: "#007aff",
      text: text,
      isVisible: true,
      isEnabled: true,
    });
    return () => {
      mainButton.setParams({
        hasShineEffect: false,
        isVisible: false,
        isEnabled: false,
      });
    };
  }, []);

  useEffect(() => {
    mainButton.onClick(customCallback);
    return () => {
      mainButton.offClick(customCallback);
    };
  }, [customCallback]);
};
