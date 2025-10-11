"use client";

import { ChevronDownIcon } from "@/assets/icons";
import { cn, range } from "@/lib/utils";
import { useState } from "react";

const StackGroup = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full pt-4 w-full">
      <div className="max-w-72 mx-auto">
        <div className="flex justify-between mb-3">
          <p className="text-lg font-medium">Cards</p>
          <div>
            <button
              className="flex gap-1 font-medium"
              onClick={() => setOpen(!open)}
            >
              <span>4</span>
              <ChevronDownIcon />
            </button>
          </div>
        </div>

        <div className="gap-1 relative h-[180px]">
          {range(0, 3).map((i) => (
            <StackGroupCard key={i} i={i} open={open} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StackGroupCard = ({ i, open }: { i: number; open: boolean }) => {
  return (
    <div
      className={cn(
        "bg-neutral-200 min-w-72 min-h-16 rounded-2xl py-2 px-4 border border-neutral-300 absolute transition-transform duration-300 ease-in-out",
      )}
      style={
        {
          "--card-height": "calc((var(--spacing) * 16) + (var(--spacing) * 1))",
          "--y": "calc((var(--spacing) * 3))",

          zIndex: 4 - i,
          transform: open
            ? `translateY(calc(var(--card-height) * ${i})) scale(1)`
            : `translateY(calc(var(--y) * ${i})) scale(${1 - i * 0.08})`,
        } as React.CSSProperties
      }
    >
      {i + 1}
    </div>
  );
};

export default StackGroup;
