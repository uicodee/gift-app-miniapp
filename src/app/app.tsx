import { FC, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/shared/router";
import { miniApp, swipeBehavior, viewport } from "@telegram-apps/sdk-react";
import { useTheme } from "@/shared/hooks";

export const App: FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      miniApp.setHeaderColor("#1c1c1e");
    } else {
      miniApp.setHeaderColor("#ffffff");
    }
  }, [theme]);

  useEffect(() => {
    swipeBehavior.mount();
    swipeBehavior.disableVertical();
    viewport?.expand();
  }, []);

  return <RouterProvider router={router} />;
};
