import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const PageLayout = () => {
  return (
    <Suspense>
      <div className="px-4 pb-[92px] ">
        <Outlet />
      </div>
    </Suspense>
  );
};
