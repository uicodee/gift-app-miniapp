import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const PageLayout = () => {
  return (
    <Suspense>
      <div className="min-h-dvh bg-bg-color">
        <Outlet />
      </div>
    </Suspense>
  );
};
