import Store from "@/assets/store.svg?react";
import Gift from "@/assets/gift.svg?react";
import Leaderboard from "@/assets/leaderboard.svg?react";
import Profile from "@/assets/profile.svg?react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/shared/ui/utils";
import {
  MutableRefObject,
  ReactNode,
  useRef,
  useState,
  useEffect,
} from "react";
import Lottie from "react-lottie-player";
import { AnimationItem } from "lottie-web";
import { hapticFeedback } from "@telegram-apps/sdk-react";
import axios from "axios";

type IconType = "Store" | "Gifts" | "Leaderboard" | "Profile";

const barItems = [
  {
    title: "Store",
    href: "/",
  },
  {
    title: "Gifts",
    href: "/gifts",
  },
  {
    title: "Leaderboard",
    href: "/leaderboard",
  },
  {
    title: "Profile",
    href: "/profile",
  },
];

// Загрузка JSON файлов анимации
const preloadAnimations = async () => {
  const animations: Record<IconType, string> = {
    Store:
      "https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/tab-store.json",
    Gifts:
      "https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/tab-gifts.json",
    Leaderboard:
      "https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/tab-leaderboard.json",
    Profile:
      "https://s3.timeweb.com/2628aad9-67413717-083e-4baa-94e9-20cf6acb1ec4/tab-profile.json",
  };

  const preloadedData: Record<IconType, any> = {
    Store: null,
    Gifts: null,
    Leaderboard: null,
    Profile: null,
  };

  // Загрузка данных JSON
  for (const key in animations) {
    const icon = key as IconType;
    try {
      const response = await axios.get(animations[icon]);
      preloadedData[icon] = response.data;
    } catch (error) {
      console.error(`Ошибка загрузки анимации для ${icon}`, error);
    }
  }

  return preloadedData;
};

export const BottomBar: React.FC = () => {
  const location = useLocation();
  const lottieRefs = useRef<MutableRefObject<AnimationItem | null>[]>([]);
  const [preloadedAnimations, setPreloadedAnimations] = useState<Record<
    IconType,
    any
  > | null>(null);

  // Предварительная загрузка анимаций при монтировании компонента
  useEffect(() => {
    const loadAnimations = async () => {
      const data = await preloadAnimations();
      setPreloadedAnimations(data);
    };

    loadAnimations();
  }, []);

  const handleClick = (index: number) => {
    hapticFeedback.impactOccurred("rigid");
    const lottieInstance = lottieRefs.current[index]?.current;
    if (lottieInstance) {
      lottieInstance.goToAndPlay(0);
    }
  };

  // Функция для отображения иконок с анимацией
  const getBarIcon = (
    isActive: boolean,
    icon: IconType,
    lottieRef: MutableRefObject<AnimationItem | null>
  ): ReactNode => {
    if (isActive && preloadedAnimations && preloadedAnimations[icon]) {
      return (
        <Lottie
          animationData={preloadedAnimations[icon]}
          className="w-[26px] h-[26px] text-accent-blue"
          ref={lottieRef}
          play
          loop={false}
        />
      );
    }

    switch (icon) {
      case "Store":
        return <Store className="text-tabbar-icons" />;
      case "Gifts":
        return <Gift className="text-tabbar-icons" />;
      case "Leaderboard":
        return <Leaderboard className="text-tabbar-icons" />;
      case "Profile":
        return <Profile className="text-tabbar-icons" />;
    }
  };

  return (
    <div
      className="w-full absolute bottom-0 bg-tabbar h-[92px] z-30 backdrop-blur-max pt-2 overflow-x-clip"
      style={{ border: "0.33px solid var(--separator)" }}
    >
      <div className="flex justify-between">
        {barItems.map((item, index) => {
          const isActive = location.pathname === item.href;

          if (!lottieRefs.current[index]) {
            lottieRefs.current[index] = { current: null };
          }

          return (
            <Link
              to={item.href}
              className="flex flex-col gap-y-1 justify-center items-center"
              key={item.title}
              onClick={() => handleClick(index)}
            >
              <div className="px-9 py-1 justify-center items-center">
                {getBarIcon(
                  isActive,
                  item.title as IconType,
                  lottieRefs.current[index]
                )}
              </div>
              <span
                style={{ fontSize: "10px" }}
                className={cn(
                  "font-medium leading-3",
                  isActive ? "text-accent-blue" : "text-label-tabbar"
                )}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
