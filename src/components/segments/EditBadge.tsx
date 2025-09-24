"use client";

import {
  BlockedIcon,
  CheckedIcon,
  CloseIcon,
  InProgressIcon,
  LoadingIcon,
  PencilIcon,
  ScheduledIcon,
} from "@/assets/icons";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

type ElementType = React.FC<React.SVGProps<SVGSVGElement>>;
type StatusDataType = {
  colorID: number;
  iconID: number;
};

const STATUS_COLORS: Array<string> = [
  "var(--color-blue-500)",
  "var(--color-yellow-500)",
  "var(--color-orange-500)",
  "var(--color-green-500)",
  "var(--color-red-500)",
  "var(--color-sky-500)",
];

const STATUS_ICON: Array<ElementType> = [
  LoadingIcon,
  ScheduledIcon,
  InProgressIcon,
  CheckedIcon,
  BlockedIcon,
];

const EditBadge = () => {
  const clicked = useRef<boolean>(false);
  const [expend, setExpend] = useState<boolean>(false);
  const [statusTitle, setStatusTitle] = useState<string>("Completed");
  const [statusColorID, setStatusColorID] = useState<number>(3);
  const [statusIconID, setStatusIconID] = useState<number>(3);

  const [boxSize, setBoxSize] = useState<number>(0);
  const StatusBoxRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!StatusBoxRef.current) return;
    const size = StatusBoxRef.current.offsetWidth;
    setBoxSize(size);
  }, []);

  return (
    <div>
      <div className="flex items-center gap-2 relative justify-center">
        <div
          className={clsx(
            "px-3 py-2 rounded-full transition-all duration-200 w-full h-full max-w-64 min-w-36",
            expend && "bg-neutral-200",
          )}
          style={{
            backgroundColor: `color-mix(in srgb, ${STATUS_COLORS[statusColorID]} 25%, transparent)`,
          }}
        >
          <p
            className="font-semibold flex items-center gap-2 select-none"
            style={{
              color: STATUS_COLORS[statusColorID],
            }}
          >
            {React.createElement(STATUS_ICON[statusIconID], {
              className: "size-6",
            })}
            <span className="text-lg">{statusTitle}</span>
          </p>
        </div>

        <div className="absolute -right-12">
          <button
            className="bg-neutral-200 rounded-full p-2 cursor-pointer hover:bg-neutral-300 transition-all active:scale-[95%] outline-none ring-0 shadow-xs"
            onClick={() => {
              clicked.current = true;
              setExpend(!expend);
            }}
          >
            <PencilIcon className="fill-black size-6" />
          </button>
        </div>

        {/* Expended Div */}
        <div
          key={expend ? "edit-badge-expand" : "edit-badge-shrink"}
          className={clsx(
            "absolute bg-neutral-50/80 rounded-full p-6 opacity-0 min-w-36 border border-neutral-200 shadow-sm",
            !expend && "pointer-events-none",
          )}
          style={
            clicked.current
              ? ({
                  "--expend-opacity-start": "0%",
                  "--expend-opacity-5": "100%",
                  "--expend-radius-start": "calc(var(--spacing) * 8)",
                  "--expend-background-start": "#fafafa",
                  "--expend-width-start": "calc(var(--spacing) * 40)",
                  "--expend-height-start": "calc(var(--spacing) * 10)",
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
          <div
            key={expend ? "edit-badge-focus-in" : "edit-badge-focus-out"}
            className={clsx(
              "flex justify-center items-center scale-0 opacity-0 h-full",
            )}
            style={
              {
                "--focus-in-scale-start": "90%",
                "--focus-in-opacity-start": "0%",

                animation: expend
                  ? "focus-in 0.2s forwards 75ms"
                  : "focus-in 0.2s forwards reverse",
              } as React.CSSProperties
            }
          >
            <div>
              <EditBadge.EditBox
                setExpend={setExpend}
                statusTitle={statusTitle}
                setStatusTitle={setStatusTitle}
                setStatusIconID={setStatusIconID}
                statusIconID={statusIconID}
                setStatusColorID={setStatusColorID}
                statusColorID={statusColorID}
                boxSize={boxSize}
                StatusBoxRef={StatusBoxRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditBadge.EditBox = function EditBadgeEditBox({
  setExpend,
  statusTitle,
  setStatusTitle,
  setStatusIconID,
  statusIconID,
  setStatusColorID,
  statusColorID,
  boxSize,
  StatusBoxRef,
}: {
  setExpend: React.Dispatch<React.SetStateAction<boolean>>;
  statusTitle: string;
  setStatusTitle: React.Dispatch<React.SetStateAction<string>>;
  statusIconID: number;
  setStatusIconID: React.Dispatch<React.SetStateAction<number>>;
  statusColorID: number;
  setStatusColorID: React.Dispatch<React.SetStateAction<number>>;
  boxSize: number;
  StatusBoxRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const prevStatusData = useRef<StatusDataType>({
    colorID: statusColorID,
    iconID: statusIconID,
  });

  const [title, setTitle] = useState<string>(statusTitle);
  const [titleError, setTitleError] = useState<string>("");

  const update = () => {
    if (title.trim() === "") {
      setTitleError("Please enter a value");
      return;
    }
    setTitleError("");
    setStatusTitle(title);
    setExpend(false);
  };

  const reset = () => {
    setStatusColorID(prevStatusData.current.colorID);
    setStatusIconID(prevStatusData.current.iconID);
    setExpend(false);
  };

  return (
    <div>
      <div className="flex justify-between w-full select-none mb-6">
        <p className="font-semibold text-neutral-500">Edit Badge</p>
        <CloseIcon
          className="size-7 fill-neutral-400 hover:fill-neutral-500 active:scale-95 cursor-pointer transition-all"
          onClick={reset}
        />
      </div>

      <div className="space-y-3">
        <div className="relative">
          <div className="absolute text-xs text-red-500 -top-5">
            {titleError}
          </div>
          <input
            placeholder="Badge title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
            onKeyDown={(e) => {
              if (e.key === "Enter") update();
            }}
            className={clsx(
              "px-3 py-2 rounded-xl font-semibold border border-neutral-300",
              titleError &&
                "border-red-500 bg-red-500/5 ring-red-500 outline-red-500",
            )}
          />
        </div>
        <div className="flex gap-1 relative">
          <div
            className="absolute inset-0 border-2 rounded-xl z-10 transition-all"
            style={{
              maxWidth: boxSize,
              transform: `translateX(calc(${statusIconID * boxSize}px + ${statusIconID * 4}px)`,
            }}
          ></div>
          {STATUS_ICON.map((icon, i) => (
            <EditBadge.StatusBox
              key={`status-${i}`}
              icon={icon}
              index={i}
              current={statusIconID}
              setStatusIconID={setStatusIconID}
              StatusBoxRef={StatusBoxRef}
            />
          ))}
        </div>

        <div className="flex gap-1 w-full border rounded-xl border-neutral-300 px-4 py-2">
          {STATUS_COLORS.map((color, i) => (
            <EditBadge.ColorBox
              color={color}
              key={`color-${i}`}
              index={i}
              current={statusColorID}
              setColorID={setStatusColorID}
            />
          ))}
        </div>

        <div>
          <button
            className="bg-neutral-900 hover:bg-neutral-800 cursor-pointer active:scale-[98%] px-4 py-3 flex items-center justify-center w-full rounded-full text-white font-semibold transition-all"
            onClick={update}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

EditBadge.StatusBox = function EditBadgeStatusBox({
  index,
  current,
  icon: Icon,
  setStatusIconID,
  StatusBoxRef,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ElementType;
  index: number;
  current: number;
  setStatusIconID: React.Dispatch<React.SetStateAction<number>>;
  StatusBoxRef: React.RefObject<HTMLButtonElement | null>;
}) {
  return (
    <button
      ref={StatusBoxRef}
      className="border rounded-xl min-w-10 min-h-10 grow aspect-square border-neutral-300 flex items-center justify-center cursor-pointer relative"
      onClick={() => setStatusIconID(index)}
      {...props}
    >
      <div className={clsx("opacity-60", index === current && "opacity-100")}>
        <Icon />
      </div>
    </button>
  );
};

EditBadge.ColorBox = function EditBadgeColorBox({
  color,
  index,
  current,
  setColorID,
}: {
  color: string;
  index: number;
  current: number;
  setColorID: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <button
      className="rounded-full min-w-6 min-h-6 grow aspect-square cursor-pointer relative"
      style={{
        backgroundColor: color,
      }}
      onClick={() => setColorID(index)}
    >
      <div
        className={clsx(
          "absolute w-4 h-1 top-1/2 left-1/2 bg-white rounded-full -translate-1/2 -rotate-45",
          current === index ? "opacity-100" : "opacity-0",
        )}
      ></div>
    </button>
  );
};

export default EditBadge;
