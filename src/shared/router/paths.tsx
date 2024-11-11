import { lazy } from "react";
import { BottomBarLayout, PageLayout } from "../layouts";

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

const UserProfile = lazy(() =>
  import("@/pages/user-profile-overview").then((module) => ({
    default: module.UserProfileOverview,
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

const RecentAction = lazy(() =>
  import("@/pages/recent-action-overview").then((module) => ({
    default: module.RecentActionOverview,
  }))
);

export const paths = [
  {
    path: "",
    element: <PageLayout />,
    children: [
      {
        path: "buy/:giftId",
        element: <BuyGift />,
      },
      {
        path: "profile/recent-action",
        element: <RecentAction />,
      },
      {
        path: "",
        element: <BottomBarLayout />,
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
            children: [
              {
                index: true,
                element: <Profile />,
              },

              {
                path: ":userId",
                element: <UserProfile />,
              },
            ],
          },
        ],
      },
    ],
  },
];
