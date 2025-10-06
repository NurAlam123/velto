"use client";

import { UnlinkIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { useCallback, useRef, useState } from "react";

const HoldToDisconnect = () => {
  const [showStroke, setShowStroke] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [progress, setProgress] = useState(0);

  const holdDuration = 750;
  const releaseDuration = 325;

  const perimeter = 240; // perimeter = 2 * (width + height)

  const isHolding = useRef<boolean>(false);
  const startTime = useRef<number | null>(null);
  const requestRef = useRef<number>(null);
  const rectRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = () => {
    if (requestRef.current) cancelAnimationFrame(requestRef.current);

    if (rectRef.current)
      rectRef.current.style.setProperty("--progress", `${perimeter}`);

    isHolding.current = true;
    startTime.current = null;
    setShowShadow(true);
    setShowStroke(true);
    requestRef.current = requestAnimationFrame(animate);
  };

  const handleMouseUp = () => {
    if (requestRef.current) cancelAnimationFrame(requestRef.current);

    isHolding.current = false;
    startTime.current = null;
    setShowShadow(false);
    requestRef.current = requestAnimationFrame(animate);
  };

  const animate = useCallback(
    (timestamp: number) => {
      if (!rectRef.current) return;
      if (!startTime.current) startTime.current = timestamp;

      const elapsed = timestamp - startTime.current;
      const delta = isHolding.current
        ? elapsed / holdDuration
        : elapsed / releaseDuration;
      const newProgress = isHolding.current
        ? Math.min(progress + delta, 1)
        : Math.max(progress - delta, 0);

      setProgress(newProgress);
      rectRef.current.style.setProperty(
        "--progress",
        `${perimeter * (1 - newProgress)}`,
      );

      if (
        (isHolding.current && newProgress < 1) ||
        (!isHolding.current && newProgress > 0)
      ) {
        requestRef.current = requestAnimationFrame(animate);
      } else if (newProgress >= 1) {
        // do something on complete
        console.log("Completed");
      } else if (newProgress <= 0) {
        setShowStroke(false);
      }
    },
    [progress],
  );

  return (
    <div className="relative">
      <button
        className={cn(
          "rounded-2xl p-4 bg-neutral-200 shadow-xs w-14 h-14 z-[2] relative outline-none transition-all duration-75 ease-in-out",
          isHolding.current && "scale-[0.95] bg-red-200",
        )}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
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
        {showStroke && (
          <svg width="64" height="64" viewBox="0 0 64 64">
            {showShadow && (
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
            )}
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
