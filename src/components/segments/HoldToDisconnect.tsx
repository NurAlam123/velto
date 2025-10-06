"use client";

import { UnlinkIcon } from "@/assets/icons";
import { useEffect, useState } from "react";

const HoldToDisconnect = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="relative">
      <button
        className="rounded-2xl p-4 bg-neutral-200 shadow-xs w-14 h-14 hover:scale-[98%] z-[2] relative outline-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <UnlinkIcon className="size-6 stroke-2" />
      </button>

      {hover && (
        <div className="absolute top-1/2 left-1/2 -translate-1/2 w-16 h-16 z-[1]">
          <svg width="64" height="64" viewBox="0 0 64 64">
            <rect
              width="60"
              height="60"
              x="2"
              y="2"
              fill="none"
              rx="18"
              ry="18"
              strokeWidth="2"
              className="stroke-red-100"
            />
            <rect
              width="60"
              height="60"
              x="2"
              y="2"
              stroke="#ff0000"
              fill="none"
              rx="18"
              ry="18"
              strokeWidth="2"
              className="stroke-red-500"
              strokeDasharray="240"
              strokeDashoffset="234"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default HoldToDisconnect;
