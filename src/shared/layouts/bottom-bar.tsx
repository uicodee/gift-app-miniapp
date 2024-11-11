import { Outlet } from "react-router-dom";
import { BottomBar } from "@/widgets/bottom-bar";
import { Suspense } from "react";

export const BottomBarLayout = () => {
  return (
    <div className="flex flex-col h-dvh transition-all">
      <div className="flex-1 overflow-y-auto pb-[92px]">
        <Suspense>
          <Outlet />
          <BottomBar />
        </Suspense>
      </div>
    </div>
  );
};
