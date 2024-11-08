import { FC, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/shared/router";
import { miniApp, swipeBehavior, viewport } from "@telegram-apps/sdk-react";

export const App: FC = () => {
  // const isDark = useSignal(themeParams.isDark);
  const isDark = false;
  console.log(isDark);

  useEffect(() => {
    if (isDark) {
      miniApp.setHeaderColor("#1c1c1e");
      document.body.classList.add("dark");
    } else {
      miniApp.setHeaderColor("#ffffff");
      document.body.classList.remove("dark");
    }
  }, [isDark]);
  useEffect(() => {
    swipeBehavior.mount();
    swipeBehavior.disableVertical();

    viewport?.expand();

    // closingBehavior.mount();
    // closingBehavior.enableConfirmation();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
};
