import { Outlet } from "react-router-dom";
import { BottomBar } from "@/widgets/bottom-bar";
import { Suspense } from "react";

export const BottomBarLayout = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-dvh justify-center items-center">Loading</div>
      }
    >
      <Outlet />
      <BottomBar />
    </Suspense>
  );
};
