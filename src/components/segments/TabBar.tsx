"use client";

import {
  AddSquareIcon,
  HomeIcon,
  PlaySquareIcon,
  SearchIcon,
  UserCircleIcon,
} from "@/assets/icons";
import { useEffect, useRef, useState } from "react";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].name);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabElementRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!containerRef.current || !activeTab || !activeTabElementRef.current)
      return;

    const container = containerRef.current;
    const activeTabElement = activeTabElementRef.current;

    const { offsetLeft, offsetWidth } = activeTabElement;

    const clipLeft = offsetLeft;
    const clipRight = offsetLeft + offsetWidth;

    container.style.clipPath = `inset(4px ${container.offsetWidth - clipRight + 4}px 4px ${clipLeft + 4}px round 20px)`;
  }, [activeTab, activeTabElementRef, containerRef]);

  return (
    <div className="relative">
      <div className="relative w-80 h-12 bg-white shadow-sm rounded-full flex items-center">
        {TABS.map((tab, i) => (
          <button
            key={`tab-bar-${i}`}
            className="cursor-pointer w-full h-full flex items-center justify-center rounded-full"
            ref={activeTab === tab.name ? activeTabElementRef : null}
            onClick={() => {
              setActiveTab(tab.name);
            }}
          >
            <p className="sr-only">{tab.name}</p>
            <tab.icon className="stroke-[1.5]" />
          </button>
        ))}
      </div>

      <div
        inert
        ref={containerRef}
        className="absolute w-full h-full bg-neutral-100 rounded-full flex items-center top-0 overflow-hidden transition-[clip-path] ease-in-out"
        style={{
          clipPath: "inset(4px 260px 4px 4px round 20px)",
        }}
      >
        {TABS.map((tab, i) => (
          <button
            key={`tab-bar-dup-${i}`}
            className="cursor-pointer w-full h-full flex items-center justify-center rounded-full"
          >
            <tab.icon className="stroke-2" />
          </button>
        ))}
      </div>
    </div>
  );
};

const TABS = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Search",
    icon: SearchIcon,
  },
  {
    name: "Add",
    icon: AddSquareIcon,
  },
  {
    name: "Reel",
    icon: PlaySquareIcon,
  },
  {
    name: "User",
    icon: UserCircleIcon,
  },
];

export default TabBar;
