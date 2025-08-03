import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

const Box = ({
  title,
  className,
  ...props
}: { title?: string } & HTMLProps<HTMLDivElement>) => {
  return (
    <div className="h-full w-full">
      <div>
        <p className="text-sm md:text-base text-neutral-500 px-4 py-1">
          {title}
        </p>
      </div>
      <div
        className={cn(
          "w-full max-w-screen h-96 min-h-96 overflow-hidden border relative flex justify-center items-center rounded-xl border-neutral-200 shadow-sm bg-neutral-50 p-1",
          className,
        )}
        {...props}
      ></div>
    </div>
  );
};

export default Box;
