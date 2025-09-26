"use client";

import {
  BlockedIcon,
  CheckedIcon,
  ListFilterIcon,
  ScheduledIcon,
} from "@/assets/icons";
import clsx from "clsx";
import React, { useContext, useRef, useState } from "react";

type OptionsType = {
  title: string;
  icon: React.ElementType;
};

interface FilterContextType {
  expend: boolean;
  setExpend: React.Dispatch<React.SetStateAction<boolean>>;
  checked: number;
  setChecked: React.Dispatch<React.SetStateAction<number>>;
  clicked: React.RefObject<boolean>;
}

const options: OptionsType[] = [
  {
    title: "Tasks",
    icon: BlockedIcon,
  },
  {
    title: "Creation",
    icon: ScheduledIcon,
  },
  {
    title: "Creation",
    icon: ScheduledIcon,
  },
  {
    title: "Creation",
    icon: ScheduledIcon,
  },
];

// Context & Provider
const FilterContext = React.createContext<FilterContextType | undefined>(
  undefined,
);

const FilterDisclouser = () => {
  const [expend, setExpend] = useState<boolean>(false);
  const [checked, setChecked] = useState<number>(0);
  const clicked = useRef<boolean>(false);

  return (
    <FilterContext.Provider
      value={{ checked, setChecked, expend, setExpend, clicked }}
    >
      <div className="flex items-center gap-2 relative justify-center">
        <FilterDisclouser.FilterButton />
        <FilterDisclouser.FilterIcon />

        {/* Expended Div */}
        <FilterDisclouser.ExpendDiv />
      </div>
    </FilterContext.Provider>
  );
};

FilterDisclouser.FilterButton = function FilterDisclouserFilterButton() {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("FilterButton must be used inside FilterDisclouser");

  const { setExpend, clicked } = context;

  return (
    <button
      className="bg-neutral-50 p-2 size-14 flex items-center justify-center rounded-full shadow-xs cursor-pointer active:scale-[98%] z-[1] border-2 border-neutral-200"
      onClick={() => {
        setExpend(true);
        clicked.current = true;
      }}
    >
      <ListFilterIcon className="size-6" />
    </button>
  );
};

FilterDisclouser.FilterIcon = function FilterDisclouserFilterIcon() {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("FilterIcon must be used inside FilterDisclouser");

  const { checked } = context;

  return (
    <div className="bg-neutral-50 border-2 border-neutral-200 size-14 rounded-full flex items-center justify-center z-0 absolute top-0 left-full inset-0 -translate-x-4">
      <div className="opacity-60">
        {React.createElement(options[checked].icon, {
          className: "size-6",
        })}
      </div>
    </div>
  );
};

FilterDisclouser.ExpendDiv = function FilterDisclouserExpendDiv() {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("ExpendDiv must be used inside FilterDisclouser");

  const { expend, clicked } = context;

  return (
    <div
      key={expend ? "filter-disclouser-expand" : "filter-disclouser-shrink"}
      className={clsx(
        "absolute bg-neutral-50 rounded-full p-6 opacity-0 min-w-14 min-h-14 border border-neutral-200 shadow-sm z-[2] overflow-hidden",
        !expend && "pointer-events-none",
      )}
      style={
        clicked.current
          ? ({
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
            } as React.CSSProperties)
          : {}
      }
    >
      <div>
        {options.map((option, i) => (
          <FilterDisclouser.RadioButton
            key={`filter-disclouser-option-x-${i}`}
            index={i}
            title={option.title}
            icon={option.icon}
          />
        ))}
      </div>
    </div>
  );
};

FilterDisclouser.RadioButton = function FilterDisclouserRadioButton({
  title,
  icon: Icon,
  index,
  ...props
}: {
  title: string;
  icon: React.ElementType;
  index: number;
} & React.HTMLAttributes<HTMLDivElement>) {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("RadioButton must be used inside FilterDisclouser");

  const { expend, clicked, setExpend, checked, setChecked } = context;

  return (
    <div
      className="flex items-center justify-between py-2 opacity-0 select-none"
      role="presentation"
      onClick={() => {
        setChecked(index);
        setExpend(false);
      }}
      style={
        clicked.current
          ? ({
              "--slide-up-transform-start": "translateY(16px) scale(0.95)",
              "--slide-up-transform-end": "translateY(0px) scale(1)",

              animationName: "slide-up",
              animationDirection: expend ? "normal" : "reverse",
              animationDuration: "150ms",
              animationFillMode: "forwards",
              animationDelay: expend ? `${index * 150}ms` : "0ms",
              animationTimingFunction: "ease-in-out",
            } as React.CSSProperties)
          : {}
      }
      {...props}
    >
      <div className="flex gap-2">
        <Icon className="size-6" />
        <p className="font-semibold">{title}</p>
      </div>
      <div>
        <CheckedIcon
          className={clsx(
            "size-6",
            checked === index
              ? "fill-green-500 stroke-none"
              : "fill-white stroke-neutral-300 size-6",
          )}
        />
        <input
          hidden
          type="radio"
          name="filter-disclouser-option"
          value={title}
          checked={checked === index}
        />
      </div>
    </div>
  );
};

export default FilterDisclouser;
