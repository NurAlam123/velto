"use client";

import {
  BlockedIcon,
  CheckedIcon,
  ListFilterIcon,
  ScheduledIcon,
} from "@/assets/icons";
import clsx from "clsx";
import React, { useState } from "react";

type OptionsType = {
  title: string;
  icon: React.ElementType;
};

const options: OptionsType[] = [
  {
    title: "Tasks",
    icon: BlockedIcon,
  },
  {
    title: "Creation",
    icon: ScheduledIcon,
  },
];

const FilterDisclouser = () => {
  const [expend, setExpend] = useState<boolean>(false);
  const [checked, setChecked] = useState<number>(0);

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
            {React.createElement(options[checked].icon, {
              className: "size-6",
            })}
          </div>
        </div>

        {/* Expended Div */}
        <FilterDisclouser.ExpendDiv
          expend={expend}
          setExpend={setExpend}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
    </div>
  );
};

FilterDisclouser.ExpendDiv = function FilterDisclouserExpendDiv({
  expend,
  setExpend,
  checked,
  setChecked,
}: {
  expend: boolean;
  setExpend: React.Dispatch<React.SetStateAction<boolean>>;
  checked: number;
  setChecked: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
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
      <div>
        {options.map((option, i) => (
          <FilterDisclouser.RadioButton
            key={`filter-disclouser-option-${i}`}
            index={i}
            checked={checked}
            setChecked={setChecked}
            setExpend={setExpend}
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
  checked,
  setChecked,
  setExpend,
  ...props
}: {
  title: string;
  icon: React.ElementType;
  index: number;
  checked: number;
  setChecked: React.Dispatch<React.SetStateAction<number>>;
  setExpend: React.Dispatch<React.SetStateAction<boolean>>;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="flex items-center justify-between cursor-pointer py-2"
      {...props}
      role="presentation"
      onClick={() => {
        setChecked(index);
        setExpend(false);
      }}
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
