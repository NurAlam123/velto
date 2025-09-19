"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const SetStatus = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

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
          <SetStatus.Item key={item.title} {...item}></SetStatus.Item>
        ))}
      </div>

      <div
        className="bg-neutral-200 px-4 py-2 rounded-full flex items-center gap-2 shadow-xs cursor-pointer active:scale-[98%] transition-all select-none ease-in-out duration-300"
        onClick={toggleOpen}
      >
        <div className="w-4 h-4 border border-dashed rounded-full relative border-neutral-500">
          <div className="w-2 h-2 border border-neutral-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <p className="text-neutral-600 font-semibold">
          {!selectedItem ? "Set Status" : selectedItem}
        </p>
      </div>
    </div>
  );
};

SetStatus.Item = function SetStatusItem({
  icon,
  title,
  ...props
}: { icon: string; title: string } & React.HTMLProps<HTMLDivElement>) {
  return (
    <div className="group">
      <div>
        <style jsx>
          {`
            @keyframes popin {
              0% {
                opacity: 0;
                transform: scale(0.8);
                filter: blur(4px);
              }
              100% {
                opacity: 1;
                transform: scale(1);
                filter: blur(0);
              }
            }

            @keyframes popout {
              0% {
                opacity: 1;
                transform: scale(1);
                filter: blur(0);
              }
              100% {
                opacity: 0;
                transform: scale(0.8);
                filter: blur(4px);
              }
            }
          `}
        </style>

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
        onClick={() => setOpen}
        {...props}
      >
        {icon}
      </div>
    </div>
  );
};

const status = [
  {
    icon: "🫡",
    title: "Salute you",
  },
  {
    icon: "😀",
    title: "Be happy",
  },
  {
    icon: "😇",
    title: "Pleased",
  },
  {
    icon: "🫠",
    title: "Melting",
  },
  {
    icon: "😗",
    title: "AHHHH",
  },
];

export default SetStatus;
