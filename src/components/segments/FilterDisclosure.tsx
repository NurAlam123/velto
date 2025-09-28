"use client";

import {
  BellDotIcon,
  CalenderDaysIcon,
  CheckedIcon,
  ListChecksIcon,
  ListFilterIcon,
  PartyPopperIcon,
  PinIcon,
  UsersIcon,
} from "@/assets/icons";
import clsx from "clsx";
import React, { useContext, useEffect, useRef, useState } from "react";

type OptionsType = {
  title: string;
  icon: React.ElementType;
};

interface FilterDisclosureContextType {
  expend: boolean;
  setExpend: React.Dispatch<React.SetStateAction<boolean>>;
  checked: number;
  setChecked: React.Dispatch<React.SetStateAction<number>>;
  clicked: React.RefObject<boolean>;
  showList: boolean;
  setShowList: React.Dispatch<React.SetStateAction<boolean>>;
}

const options: OptionsType[] = [
  {
    title: "Tasks",
    icon: ListChecksIcon,
  },
  {
    title: "Events",
    icon: CalenderDaysIcon,
  },
  {
    title: "Reminders",
    icon: BellDotIcon,
  },
  {
    title: "Appointments",
    icon: PinIcon,
  },
  {
    title: "Mettings",
    icon: UsersIcon,
  },
  {
    title: "Celebrations",
    icon: PartyPopperIcon,
  },
];

// Context & Provider
const FilterDisclosureContext = React.createContext<
  FilterDisclosureContextType | undefined
>(undefined);

const FilterDisclosure = () => {
  const [expend, setExpend] = useState<boolean>(false);
  const [checked, setChecked] = useState<number>(0);
  const clicked = useRef<boolean>(false);

  const [showList, setShowList] = useState<boolean>(false);

  useEffect(() => {
    if (!expend && showList) {
      setTimeout(() => setShowList(false), 250);
      return;
    }

    setTimeout(() => {
      setShowList(true);
    }, 150);
  }, [expend]);

  return (
    <FilterDisclosureContext.Provider
      value={{
        checked,
        setChecked,
        expend,
        setExpend,
        clicked,
        showList,
        setShowList,
      }}
    >
      <div className="flex items-center gap-2 relative justify-center">
        <FilterDisclosure.FilterButton />
        <FilterDisclosure.FilterIcon />

        {/* Expended Div */}
        <FilterDisclosure.ExpendDiv />
      </div>
    </FilterDisclosureContext.Provider>
  );
};

FilterDisclosure.FilterButton = function FilterDisclouserFilterButton() {
  const context = useContext(FilterDisclosureContext);
  if (!context)
    throw new Error("FilterButton must be used inside FilterDisclouser");

  const { setExpend, clicked, expend } = context;

  return (
    <button
      className={clsx(
        "bg-neutral-50 p-2 size-14 flex items-center justify-center rounded-full shadow-xs cursor-pointer active:scale-[98%] z-[1] border-2 border-neutral-200 transition-all origin-center scale-100 ease-in-out",
        expend && "!scale-95",
      )}
      onClick={() => {
        setExpend(true);
        clicked.current = true;
      }}
    >
      <ListFilterIcon className="size-6" />
    </button>
  );
};

FilterDisclosure.FilterIcon = function FilterDisclouserFilterIcon() {
  const context = useContext(FilterDisclosureContext);
  if (!context)
    throw new Error("FilterIcon must be used inside FilterDisclouser");

  const { checked, expend } = context;

  return (
    <div
      className={clsx(
        "bg-neutral-50 border-2 border-neutral-200 size-14 rounded-full flex items-center justify-center z-0 absolute top-0 left-full inset-0 -translate-x-4 transition-all ease-in-out",
        expend && "-translate-x-5",
      )}
    >
      <div className="opacity-60">
        {React.createElement(options[checked].icon, {
          className: "size-6",
        })}
      </div>
    </div>
  );
};

FilterDisclosure.ExpendDiv = function FilterDisclouserExpendDiv() {
  const context = useContext(FilterDisclosureContext);
  if (!context)
    throw new Error("ExpendDiv must be used inside FilterDisclouser");

  const { expend, clicked, showList } = context;

  return (
    <div
      key={expend ? "filter-disclouser-expand" : "filter-disclouser-shrink"}
      className={clsx(
        "absolute bg-neutral-50 rounded-full p-6 opacity-0 min-w-12 min-h-12 border border-neutral-200 shadow-sm z-[2] overflow-hidden",
        !expend && "pointer-events-none",
      )}
      style={
        clicked.current
          ? ({
              "--expend-opacity-start": "0%",
              "--expend-opacity-5": "100%",
              "--expend-radius-start": "calc(var(--spacing) * 8)",
              "--expend-background-start": "#fafafa",
              "--expend-width-start": "calc(var(--spacing) * 12)",
              "--expend-height-start": "calc(var(--spacing) * 12)",
              "--expend-width-end": "calc(var(--spacing) * 72)",
              "--expend-height-end": "calc(var(--spacing) * 80)",
              "--expend-background-end": "#fafafa",
              "--expend-radius-end": "calc(var(--spacing) * 8)",

              animationName: "expend",
              animationDuration: expend ? "300ms" : "250ms",
              animationDelay: !expend ? "" : "75ms",
              animationDirection: expend ? "normal" : "reverse",
              animationFillMode: "forwards",
              animationTimingFunction: "var(--ease-wiggle)",
            } as React.CSSProperties)
          : {}
      }
    >
      {showList && (
        <>
          {options.map((option, i) => (
            <FilterDisclosure.RadioButton
              key={`filter-disclouser-option-x-${i}`}
              index={i}
              title={option.title}
              icon={option.icon}
            />
          ))}
        </>
      )}
    </div>
  );
};

FilterDisclosure.RadioButton = function FilterDisclouserRadioButton({
  title,
  icon: Icon,
  index,
  ...props
}: {
  title: string;
  icon: React.ElementType;
  index: number;
} & React.HTMLAttributes<HTMLDivElement>) {
  const context = useContext(FilterDisclosureContext);
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
              animationDelay: expend ? `${index * 75}ms` : "0ms",
              animationTimingFunction: "ease-in-out",
            } as React.CSSProperties)
          : {}
      }
      {...props}
    >
      <div className="flex gap-2">
        <Icon className="size-6 opacity-60" />
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
          readOnly
        />
      </div>
    </div>
  );
};

export default FilterDisclosure;
