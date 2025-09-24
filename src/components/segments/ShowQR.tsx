"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ShowQR = () => {
  const URL = "https://youtu.be/dQw4w9WgXcQ";
  const clicked = useRef(false);
  const [expend, setExpend] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = () => {
    window.navigator.clipboard.writeText(URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  useEffect(() => {
    if (!expend) return;

    setTimeout(() => {
      setShowCode(true);
    }, 150);
  }, [expend]);

  return (
    <div>
      <div className="relative w-fit h-fit">
        <div
          key={expend ? "show-qr-expand" : "show-qr-shrink"}
          className={clsx("shadow-sm rounded-full !bg-neutral-200")}
          style={
            clicked.current
              ? ({
                  "--expend-width-start": "12rem",
                  "--expend-height-start": "3rem",
                  "--expend-radius-start": "6rem",
                  "--expend-width-end": "16rem",
                  "--expend-height-end": "18rem",
                  "--expend-radius-end": "2rem",

                  animation: !expend
                    ? "expend 0.3s forwards reverse var(--ease-wiggle)"
                    : "expend 0.3s forwards normal var(--ease-wiggle)",
                } as React.CSSProperties)
              : {}
          }
        >
          {!expend ? (
            <div className="flex items-center justify-center rounded-full w-full h-full">
              <button
                className="cursor-pointer px-4 py-2 flex gap-2 font-semibold justify-center items-center outline-none ring-0 w-full h-full"
                onClick={() => {
                  clicked.current = true;
                  setExpend(true);
                }}
              >
                <QRIcon className="size-6" />
                <span>Show QR Code</span>
              </button>
            </div>
          ) : (
            <div className="px-4 py-3 h-full relative">
              <div
                className={clsx(
                  "opacity-0",
                  showCode &&
                    "opacity-100 [animation:focus-in_0.3s_forwards_var(--ease-wiggle)] transition-all",
                )}
                style={
                  {
                    "--focus-in-scale-start": "130%",
                    "--focus-in-filter-start": "blur(2px)",
                    "--focus-in-filter-80": "blur(0px)",
                    "--focus-in-scale-end": "100%",
                  } as React.CSSProperties
                }
              >
                <div className="w-full h-56 mb-1 rounded-2xl flex justify-center items-center overflow-hidden border border-neutral-300">
                  <Image
                    src="/qr-code.svg"
                    alt="qr-code"
                    width={1024}
                    height={1024}
                    draggable="false"
                    className="select-none pointer-events-none h-full w-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between gap-1 mt-1.5">
                  <button
                    className="bg-white px-4 py-2 w-full rounded-full font-semibold flex items-center justify-center gap-1 ring-0 outline-none cursor-pointer overflow-hidden text-sm hover:text-neutral-600 border border-neutral-300"
                    onClick={copy}
                  >
                    <LinkIcon className="size-4" />
                    {!copied ? (
                      <span className="[animation:slideUp_0.3s]" key="copy">
                        Copy Link
                      </span>
                    ) : (
                      <span className="[animation:slideUp_0.3s]" key="copied">
                        Copied Link
                      </span>
                    )}
                  </button>

                  <button
                    className="h-full p-1 bg-white rounded-full cursor-pointer hover:text-neutral-600 transition-all border border-neutral-300"
                    onClick={() => {
                      setExpend(false);
                      setShowCode(false);
                    }}
                  >
                    <XIcon />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ICONS
const QRIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  );
};

const XIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
};

const LinkIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
};

export default ShowQR;
