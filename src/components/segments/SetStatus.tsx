"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

const SetStatus = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<StatusType | null>(null);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className="relative">
      <div
        className={cn(
          "flex items-center gap-1 absolute left-1/2 -translate-x-1/2 opacity-0 transition-all -top-12 scale-[80%] blur-md duration-300 ease-in-out bg-neutral-100 w-fit border border-neutral-200 rounded-full px-1.5 py-1",
          open && "opacity-100 scale-100 blur-none",
        )}
      >
        {status.map((item) => (
          <SetStatus.Item
            key={item.title}
            {...item}
            toggleOpen={toggleOpen}
            setSelectedItem={setSelectedItem}
          ></SetStatus.Item>
        ))}
      </div>

      <div
        className="bg-neutral-200 px-4 py-2 rounded-full flex items-center gap-2 shadow-xs cursor-pointer active:scale-[98%] transition-all select-none ease-in-out duration-300"
        onClick={toggleOpen}
      >
        <div>
          {!selectedItem ? (
            <>
              <div className="w-4 h-4 border border-dashed rounded-full relative border-neutral-500">
                <div className="w-2 h-2 border border-neutral-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </>
          ) : (
            <div className="[animation:popin_0.2s_forwards_ease-in-out]">
              {typeof selectedItem.icon === "string" ? (
                selectedItem.icon
              ) : (
                <selectedItem.icon />
              )}
            </div>
          )}
        </div>
        <div className="text-neutral-600 font-semibold">
          {!selectedItem ? (
            <p className="[animation:slideUp_0.2s_forwards_ease-in-out]">
              Set Status
            </p>
          ) : (
            <div className="flex gap-2 items-center">
              <p className="[animation:slideUp_0.2s_forwards_ease-in-out]">
                {selectedItem.title}
              </p>
              <p
                className="rounded-full size-5 flex items-center justify-center bg-neutral-300 p-1 hover:bg-neutral-400 transition-all"
                onClick={() => {
                  setSelectedItem(null);
                }}
              >
                <Close className="size-4" />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

SetStatus.Item = function SetStatusItem({
  icon: Icon,
  title,
  setSelectedItem,
  toggleOpen,
  ...props
}: {
  icon: string | React.ComponentType;
  title: string;
  setSelectedItem: (value: StatusType) => void;
  toggleOpen: () => void;
} & React.HTMLProps<HTMLDivElement>) {
  const selectItem = (value: StatusType) => {
    setSelectedItem(value);
    toggleOpen();
  };

  return (
    <div className="group">
      <div>
        <div className="absolute -top-10 w-fit text-xs bg-neutral-200 px-2 py-1 rounded-full font-medium opacity-0 group-hover:[animation:popin_0.3s_forwards_ease-in-out] ease-in-out [animation:popout_0.3s_forwards_ease-in-out] translate-x-2">
          <div className="w-3 h-3 rounded-full bg-neutral-200 absolute top-5 left-4"></div>
          <div className="w-2 h-2 rounded-full bg-neutral-200 absolute top-7.5"></div>
          <div className=" whitespace-nowrap overflow-hidden">
            <p>{title}</p>
          </div>
        </div>
      </div>

      <div
        className="w-fit h-fit min-w-8 min-h-8 p-1 bg-neutral-200 flex items-center justify-center rounded-full select-none group-hover:-translate-y-0.5 transition-transform ease-out duration-200"
        onClick={() =>
          selectItem({
            icon: Icon,
            title,
          })
        }
        {...props}
      >
        {typeof Icon === "string" ? Icon : <Icon />}
      </div>
    </div>
  );
};

const Close = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

type StatusType = {
  icon: string | React.ComponentType;
  title: string;
};

const status: StatusType[] = [
  {
    icon: "🌞",
    title: "Sunny vibes",
  },
  {
    icon: "🤔",
    title: "Thinking...",
  },
  {
    icon: "🌪️",
    title: "Tornado mode",
  },
  {
    icon: "😴",
    title: "Half asleep",
  },
  {
    icon: "🥳",
    title: "Let’s go!",
  },
  {
    icon: "👀",
    title: "Weekend mode",
  },
  {
    icon: "🙃",
    title: "Why not?",
  },
];

export default SetStatus;
