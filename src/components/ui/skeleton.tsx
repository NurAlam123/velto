import React from "react";
import clsx from "clsx";

export const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "animate-pulse bg-neutral-200 dark:bg-neutral-400 rounded z-10",
        className,
      )}
    />
  );
};
