"use client";

import { UnlinkIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { useCallback, useRef, useState } from "react";

const HoldToDisconnect = () => {
  const [show, setShow] = useState(false);
  const isHolding = useRef<boolean>(false);

  const holdDurationInSec = 2;
  const perimeter = 240; // perimeter = 2 * (width + height)
  const startTime = useRef<number | null>(null);
  const requestRef = useRef<number>(null);
  const rectRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (rectRef.current)
      rectRef.current.style.setProperty("--progress", `${perimeter}`);

    isHolding.current = true;
    startTime.current = null;
    setShow(true);
    requestRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    isHolding.current = false;
    setShow(false);

    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
  };

  const animate = useCallback(
    (timestamp: number) => {
      if (!rectRef.current) return;
      if (!startTime.current) startTime.current = timestamp;

      const elapsed = timestamp - startTime.current;
      const percent = Math.min(elapsed / (holdDurationInSec * 1000), 1);

      rectRef.current.style.setProperty(
        "--progress",
        `${perimeter * (1 - percent)}`,
      );

      if (isHolding.current && percent < 1) {
        requestAnimationFrame(animate);
      }

      // do something on complete
      if (percent >= 1) console.log("Completed");
    },
    [isHolding.current, rectRef.current],
  );

  return (
    <div className="relative">
      <button
        className={cn(
          "rounded-2xl p-4 bg-neutral-200 shadow-xs w-14 h-14 z-[2] relative outline-none transition-all duration-75 ease-in-out",
          isHolding.current && "scale-[0.95] bg-red-200",
        )}
        onMouseDown={handleMouseEnter}
        onMouseUp={handleMouseLeave}
        onMouseLeave={handleMouseLeave}
      >
        <UnlinkIcon
          className={cn(
            "size-6 stroke-2",
            isHolding.current && "stroke-red-500",
          )}
        />
      </button>

      <div
        ref={rectRef}
        className="absolute top-1/2 left-1/2 -translate-1/2 w-16 h-16 z-[1]"
      >
        {show && (
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
              className="stroke-red-200"
            />
            <rect
              style={{
                strokeDashoffset: "var(--progress)",
              }}
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
              strokeDasharray={perimeter}
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default HoldToDisconnect;
