import { Outlet } from "react-router-dom";
import { BottomBar } from "@/widgets/bottom-bar";
import { Suspense } from "react";

export const BottomBarLayout = () => {
  return (
    // <div style={{ flex: 1, overflowY: "auto", paddingBottom: "65px" }}>
    //   <Suspense
    //     fallback={
    //       <div className="flex h-dvh justify-center items-center">
    //         <Gift className="text-label-tabbar size-16 animate-pulse duration-300" />
    //       </div>
    //     }
    //   >
    //     <div className="h-full">
    //       <Outlet />
    //     </div>
    //     <BottomBar />
    //   </Suspense>
    // </div>
    <div className="flex flex-col h-dvh transition-all">
      <div
        className="flex-1 overflow-y-auto pb-[92px]"
        // style={{ flex: 1, overflowY: "auto", paddingBottom: "92px" }}
      >
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
