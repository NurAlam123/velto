"use client";

import clsx from "clsx";
import React, { useState } from "react";

const EditBadge = () => {
  const [expend, setExpend] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-2 relative justify-center">
        <div
          className={clsx(
            "bg-green-200/80 px-3 py-2 rounded-full transition-all duration-200 w-full h-full",
            expend && "bg-neutral-200",
          )}
        >
          <p className="text-green-500 font-semibold flex items-center gap-2 select-none">
            <CheckIcon className="size-6 fill-green-500" />
            <span className="text-lg">Completed</span>
          </p>
        </div>

        <div className="absolute -right-12">
          <button
            className="bg-neutral-200 rounded-full p-2 cursor-pointer hover:bg-neutral-300 transition-all active:scale-[95%] outline-none ring-0 shadow-xs"
            onClick={() => setExpend(!expend)}
          >
            <PencilIcon className="fill-black size-6" />
          </button>
        </div>

        <div
          key={expend ? "edit-badge-expand" : "edit-badge-shrink"}
          className="absolute bg-neutral-200/80 rounded-full px-3 py-2 opacity-100 min-w-36"
          // className="absolute bg-neutral-300 rounded-md px-3 py-2 w-72 h-80"
          style={
            {
              "--expend-opacity-start": "0%",
              "--expend-opacity-5": "100%",
              "--expend-radius-start": "99px",
              "--expend-background-start": "#b9f8cfcc",
              "--expend-width-start": "calc(var(--spacing) * 40)",
              "--expend-height-start": "calc(var(--spacing) * 10)",
              "--expend-width-end": "calc(var(--spacing) * 72)",
              "--expend-height-end": "calc(var(--spacing) * 80)",
              "--expend-background-end": "#d4d4d4",
              "--expend-radius-end": "12px",

              animation: expend
                ? "expend 0.3s forwards var(--ease-wiggle)"
                : "expend 0.3s forwards reverse var(--ease-wiggle)",
            } as React.CSSProperties
          }
        >
          <div
            key={expend ? "edit-badge-focus-in" : "edit-badge-focus-out"}
            className={clsx(
              "flex justify-between items-center scale-0 opacity-0",
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
            {/* INSIDE */}
            <CloseIcon className="size-6" onClick={() => setExpend(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Icons
const PencilIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17.0671 2.27157C17.5 2.09228 17.9639 2 18.4324 2C18.9009 2 19.3648 2.09228 19.7977 2.27157C20.2305 2.45086 20.6238 2.71365 20.9551 3.04493C21.2864 3.37621 21.5492 3.7695 21.7285 4.20235C21.9077 4.63519 22 5.09911 22 5.56761C22 6.03611 21.9077 6.50003 21.7285 6.93288C21.5492 7.36572 21.2864 7.75901 20.9551 8.09029L20.4369 8.60845L15.3916 3.56308L15.9097 3.04493C16.241 2.71365 16.6343 2.45086 17.0671 2.27157Z" />
      <path d="M13.9774 4.9773L3.6546 15.3001C3.53154 15.4231 3.44273 15.5762 3.39694 15.7441L2.03526 20.7369C1.94084 21.0831 2.03917 21.4534 2.29292 21.7071C2.54667 21.9609 2.91693 22.0592 3.26314 21.9648L8.25597 20.6031C8.42387 20.5573 8.57691 20.4685 8.69996 20.3454L19.0227 10.0227L13.9774 4.9773Z" />
    </svg>
  );
};

const CheckIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path d="M429.811 577.1l-80.485-86.309c-21.425-22.976-57.42-24.233-80.396-2.807s-24.233 57.42-2.807 80.396l81.839 87.762-.158.152 43.493 45.038c19.643 20.341 52.056 20.907 72.397 1.264l35.686-34.462 8.195-7.642-.133-.143 251.802-243.163c22.607-21.832 23.236-57.857 1.405-80.464s-57.857-23.236-80.464-1.405L429.812 577.1zM512 1024C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512z" />
    </svg>
  );
};

const CloseIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" />
    </svg>
  );
};

export default EditBadge;
