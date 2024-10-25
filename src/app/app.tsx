import { FC, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/shared/router";
import { miniApp, swipeBehavior, viewport } from "@telegram-apps/sdk-react";

export const App: FC = () => {
  useEffect(() => {
    swipeBehavior.mount();
    swipeBehavior.disableVertical();

    viewport?.expand();
    miniApp.setHeaderColor("#ffffff");
    // closingBehavior.mount();
    // closingBehavior.enableConfirmation();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
};
