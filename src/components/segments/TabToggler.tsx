"use client";

import clsx from "clsx";
import { useState } from "react";

const TabToggler = () => {
  const [active, setActive] = useState(0);
  const tabs = ["Home", "About", "Contact", "Blog"];

  return (
    <div className="w-full px-4 flex flex-col items-center">
      <div className="flex justify-between items-center w-full py-2 rounded-full bg-neutral-200 relative">
        <div
          className={clsx(
            "absolute top-1/2 -translate-y-1/2 left-[2px] bg-black h-[calc(100%-4px)] rounded-full z-0 transition-transform duration-300 ease-out",
          )}
          style={{
            minWidth: `calc(${1 / tabs.length} * 100%)`,
            transform: `translateX(${active * 98.5}%)`,
          }}
        ></div>

        {tabs.map((tab, i) => (
          <button
            className="z-[1] flex-1/3 cursor-pointer"
            key={i}
            onClick={() => setActive(i)}
          >
            <p
              className={clsx(
                "font-semibold text-sm text-center select-none transition-colors duration-150 ease-out relative",
                active === i ? "text-white" : "text-neutral-500",
              )}
            >
              {tab}
            </p>
          </button>
        ))}
      </div>

      {/* Tabs content */}
      <div className="mt-8">
        <style jsx>
          {`
            @keyframes slideUp {
              0% {
                transform: translateY(20px);
                filter: blur(4px);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                filter: blur(0px);
                opacity: 1;
              }
            }
            .animate-slideup {
              animation: slideUp 0.15s ease-out;
            }
          `}
        </style>
        {tabs[active] === "Home" && (
          <div className="font-semibold animate-slideup">Home Content</div>
        )}
        {tabs[active] === "About" && (
          <div className="font-semibold animate-slideup">About Content</div>
        )}
        {tabs[active] === "Contact" && (
          <div className="font-semibold animate-slideup">Contact Content</div>
        )}
        {tabs[active] === "Blog" && (
          <div className="font-semibold animate-slideup">Blog Content</div>
        )}
      </div>
    </div>
  );
};

export default TabToggler;
