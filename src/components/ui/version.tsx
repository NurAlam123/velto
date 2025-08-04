"use client";

import { cn, range } from "@/lib/utils";
import React, { useState } from "react";

const Version = ({
  children,
  versions,
}: {
  children: React.ReactNode;
  versions: number;
}) => {
  const [activeVersion, setActiveVersion] = useState(1);

  if (versions <= 1) return children;

  return (
    <>
      <div className="absolute top-2 left-2 flex items-center rounded-full text-sm overflow-hidden">
        {[...range(1, versions)].map((i) => (
          <button
            key={i}
            className={cn(
              "px-3 py-0.5 text-neutral-800 bg-neutral-200 first:rounded-l-full last:rounded-r-full transition duration-100 ease-in-out cursor-pointer",
              activeVersion === i &&
                "bg-neutral-800 text-neutral-100 font-medium",
            )}
            onClick={() => setActiveVersion(i)}
          >
            v{i}
          </button>
        ))}
      </div>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ version: number } & HTMLDivElement>,
              { version: activeVersion },
            )
          : child,
      )}
    </>
  );
};

export default Version;
