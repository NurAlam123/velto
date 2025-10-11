"use client";

import {
  ChevronDownIcon,
  FootPrintsIcon,
  GlassWaterIcon,
  SunriseIcon,
  ThermometerIcon,
} from "@/assets/icons";
import { cn } from "@/lib/utils";
import { HTMLProps, useState } from "react";

interface CardsDataType {
  id: string;
  title: string;
  subtitle: string;
  value: string;
  icon: React.ElementType;
}

const CARDS_DATA: CardsDataType[] = [
  {
    id: "card-001",
    icon: SunriseIcon,
    title: "Sunrise",
    subtitle: "Time today",
    value: "06:12 AM",
  },
  {
    id: "card-002",
    icon: ThermometerIcon,
    title: "Temperature",
    subtitle: "Current outside",
    value: "27°C",
  },
  {
    id: "card-003",
    icon: FootPrintsIcon,
    title: "Steps",
    subtitle: "Today",
    value: "4,356",
  },
  {
    id: "card-004",
    icon: GlassWaterIcon,
    title: "Water Intake",
    subtitle: "Today",
    value: "1.2 L",
  },
];

const StackGroup = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full pt-8 w-full">
      <div className="max-w-72 mx-auto">
        <div
          className="flex justify-between mb-3 select-none"
          onClick={() => setOpen(!open)}
        >
          <p className="text-sm font-semibold">Quick Stats</p>
          <div className="flex gap-1 items-center">
            <span className="text-sm font-medium">{CARDS_DATA.length}</span>
            <ChevronDownIcon
              className={cn(
                "size-5 transition-transform ease-in-out",
                open ? "-rotate-180" : "rotate-0",
              )}
            />
          </div>
        </div>

        <div className="gap-1 relative h-[180px]">
          {CARDS_DATA.map((card, i) => (
            <StackGroupCard key={`stack-group-${card.id}`} i={i} open={open}>
              <div className="flex items-center h-full justify-between">
                <div className="flex items-center justify-center gap-3">
                  <card.icon className="size-5 stroke-neutral-700" />
                  <div className="flex flex-col">
                    <p className="font-medium text-sm">{card.title}</p>
                    <p className="text-[0.65rem] text-neutral-400">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <div className="text-xs font-medium text-neutral-600">
                  {card.value}
                </div>
              </div>
            </StackGroupCard>
          ))}
        </div>
      </div>
    </div>
  );
};

const StackGroupCard = ({
  i,
  open,
  children,
  ...props
}: { i: number; open: boolean } & HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "bg-neutral-100 min-w-72 min-h-16 h-16 rounded-2xl py-2 px-4 border border-neutral-200 absolute transition-transform duration-200 ease-in-out shadow-xs",
      )}
      style={
        {
          "--card-height": "calc((var(--spacing) * 16) + (var(--spacing) * 1))",
          "--y": "calc((var(--spacing) * 3))",

          zIndex: 4 - i,
          transform: open
            ? `translateY(calc(var(--card-height) * ${i})) scale(1)`
            : `translateY(calc(var(--y) * ${i < 3 ? i : 0})) scale(${i < 3 ? 1 - i * 0.08 : 0.76})`,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
};

export default StackGroup;
