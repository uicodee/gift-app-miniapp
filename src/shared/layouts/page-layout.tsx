import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const PageLayout = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-dvh justify-center items-center animate-pulse ">
          Loading...
          {/* <img src={loader} alt="" className="w-20" /> */}
        </div>
      }
    >
      <div className="min-h-dvh bg-bg-color">
        <Outlet />
      </div>
    </Suspense>
    // <Suspense>
    //   <div className="h-full bg-bg-color">
    //     <Outlet />
    //   </div>
    // </Suspense>
  );
};
