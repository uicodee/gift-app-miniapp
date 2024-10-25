import { lazy } from "react";

const PageLayout = lazy(() =>
  import("@/shared/layouts").then((module) => ({
    default: module.PageLayout,
  }))
);

const BottomBarLayout = lazy(() =>
  import("@/shared/layouts").then((module) => ({
    default: module.BottomBarLayout,
  }))
);

const Store = lazy(() =>
  import("@/pages/store-overview").then((module) => ({
    default: module.StoreOverview,
  }))
);

const BuyGift = lazy(() =>
  import("@/pages/buy-gift-page").then((module) => ({
    default: module.BuyGift,
  }))
);

const Gifts = lazy(() =>
  import("@/pages/gifts-overview").then((module) => ({
    default: module.GiftsOverview,
  }))
);

const Leaderboard = lazy(() =>
  import("@/pages/leaderboard-overview").then((module) => ({
    default: module.LeaderboardOverview,
  }))
);

const Profile = lazy(() =>
  import("@/pages/profile-overview").then((module) => ({
    default: module.ProfileOverview,
  }))
);

export const paths = [
  {
    path: "",
    element: <BottomBarLayout />,
    children: [
      {
        path: "",
        element: <PageLayout />,
        children: [
          {
            index: true,
            element: <Store />,
          },
          {
            path: "gifts",
            element: <Gifts />,
          },
          {
            path: "leaderboard",
            element: <Leaderboard />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: "",
    element: <PageLayout />,
    children: [
      {
        path: "buy/:giftId",
        element: <BuyGift />,
      },
    ],
  },
];
