"use client";

import { useState } from "react";
import Image from "../ui/image";

const CopyLink = ({ id }: { id: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleClick = () => {
    const href = window.location.host + `/#${id}`;

    if (window.navigator.clipboard) {
      window.navigator.clipboard
        .writeText(href)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1000);
        })
        .catch((err) => {
          console.error("Clipboard write failed:", err);
        });
    }
  };

  return (
    <div className="relative">
      {copied && (
        <div className="absolute -top-full left-1/2 -translate-x-1/2 -translate-y-2">
          <div className="size-4 rotate-45 bg-neutral-700 -z-10 absolute -bottom-0.5 left-1/2 -translate-x-1/2 rounded-[2px]"></div>
          <div className="text-xs bg-neutral-600 px-3 py-1 rounded-full text-white z-10 shadow-xs">
            Copied
          </div>
        </div>
      )}
      <button
        className="cursor-pointer group active:scale-90 transition duration-100 ease-in-out"
        aria-label="copy link"
        onClick={handleClick}
      >
        <Image
          src="/icons/link.svg"
          alt="link"
          width={24}
          height={24}
          className="size-4 opacity-50 group-hover:opacity-100 transition duration-100 ease-in-out"
        />
      </button>
    </div>
  );
};

export default CopyLink;
