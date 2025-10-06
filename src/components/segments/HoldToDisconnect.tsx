"use client";

import { UnlinkIcon } from "@/assets/icons";
import { useCallback, useRef, useState } from "react";

const HoldToDisconnect = () => {
  const [show, setShow] = useState(false);
  const isHolding = useRef<boolean>(false);

  const holdDurationInSec = 3;
  const perimeter = 240; // perimeter = 2 * (width + height)
  const startTime = useRef<number | null>(null);
  const requestRef = useRef<number>(null);
  const rectRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (rectRef.current)
      rectRef.current.style.setProperty("--progress", `${perimeter}`);

    setShow(true);
    isHolding.current = true;
    startTime.current = null;
    requestRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    setShow(false);
    isHolding.current = false;
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
    },
    [isHolding.current, rectRef.current],
  );

  return (
    <div className="relative">
      <button
        className="rounded-2xl p-4 bg-neutral-200 shadow-xs w-14 h-14 hover:scale-[98%] z-[2] relative outline-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <UnlinkIcon className="size-6 stroke-2" />
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
              className="stroke-red-100"
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
              strokeDasharray="240"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default HoldToDisconnect;
