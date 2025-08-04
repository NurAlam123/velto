import { cn } from "@/lib/utils";
import { HTMLProps } from "react";
import CopyLink from "../CopyLink";

const Box = ({
  title,
  className,
  ...props
}: { title: string } & HTMLProps<HTMLDivElement>) => {
  const id = title.toLocaleLowerCase()?.replace(" ", "-");

  return (
    <div className="h-full w-full" id={id}>
      <div className="flex items-center px-4 py-1 gap-2">
        <CopyLink id={id} />
        <p className="text-sm md:text-base text-neutral-800">{title}</p>
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
