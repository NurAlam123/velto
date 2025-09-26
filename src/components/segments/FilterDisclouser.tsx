"use client";

import { BlockedIcon, ListFilterIcon } from "@/assets/icons";
import clsx from "clsx";
import { useState } from "react";

const FilterDisclouser = () => {
  const [expend, setExpend] = useState<boolean>(false);

  return (
    <div>
      <div className="flex items-center gap-2 relative justify-center">
        <button
          className="bg-neutral-50 p-2 size-14 flex items-center justify-center rounded-full shadow-xs cursor-pointer active:scale-[98%] z-[1] border-2 border-neutral-200"
          onClick={() => setExpend(true)}
        >
          <ListFilterIcon className="size-6" />
        </button>

        <div className="bg-neutral-50 border-2 border-neutral-200 size-14 rounded-full flex items-center justify-center z-0 absolute top-0 left-full inset-0 -translate-x-4">
          <div className="opacity-60">
            <BlockedIcon />
          </div>
        </div>

        {/* Expended Div */}
        <div
          key={expend ? "edit-badge-expand" : "edit-badge-shrink"}
          className={clsx(
            "absolute bg-neutral-50 rounded-full p-6 opacity-0 min-w-14 min-h-14 border border-neutral-200 shadow-sm z-[2]",
            !expend && "pointer-events-none",
          )}
          style={
            {
              "--expend-opacity-start": "0%",
              "--expend-opacity-5": "100%",
              "--expend-radius-start": "calc(var(--spacing) * 8)",
              "--expend-background-start": "#fafafa",
              "--expend-width-start": "calc(var(--spacing) * 14)",
              "--expend-height-start": "calc(var(--spacing) * 14)",
              "--expend-width-end": "calc(var(--spacing) * 72)",
              "--expend-height-end": "calc(var(--spacing) * 80)",
              "--expend-background-end": "#fafafa",
              "--expend-radius-end": "calc(var(--spacing) * 8)",

              animationName: "expend",
              animationDuration: "300ms",
              animationDirection: expend ? "normal" : "reverse",
              animationFillMode: "forwards",
              animationTimingFunction: "var(--ease-wiggle)",
            } as React.CSSProperties
          }
        >
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FilterDisclouser;
