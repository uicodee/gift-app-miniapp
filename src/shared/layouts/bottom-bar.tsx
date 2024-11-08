import { Outlet } from "react-router-dom";
import { BottomBar } from "@/widgets/bottom-bar";
import { Suspense } from "react";

export const BottomBarLayout = () => {
  return (
    <div className="flex flex-col h-dvh transition-all">
      <div className="flex-1 overflow-y-auto pb-[92px]">
        <Suspense
          fallback={
            <div className=" h-full justify-center items-center animate-pulse">
              Loading...
              {/* <img src={loader} alt="" className="w-20" /> */}
            </div>
          }
        >
          <Outlet />
          <BottomBar />
        </Suspense>
      </div>
    </div>
  );
};
