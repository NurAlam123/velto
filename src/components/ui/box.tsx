import { cn } from "@/lib/utils";
import { HTMLProps } from "react";
import CopyLink from "../shared/CopyLink";
import Badge from "./badge";
import Version from "./version";

const Box = ({
  title,
  className,
  badges,
  date,
  children,
  versions,
  ...props
}: {
  title: string;
  badges?: Array<string>;
  date?: string;
  versions?: number;
} & HTMLProps<HTMLDivElement>) => {
  const id = title.toLocaleLowerCase()?.replaceAll(" ", "-");

  return (
    <div className="h-full w-full relative" id={id}>
      <div className="flex justify-between items-end-safe px-4 py-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <CopyLink id={id} />
            <p className="text-sm md:text-base text-neutral-800 font-semibold">
              {title}
            </p>
          </div>
          <div className="flex gap-0.5">
            {badges?.map((badge) => (
              <Badge key={badge} title={badge} />
            ))}
          </div>
        </div>

        {date && (
          <Badge
            title={date}
            className="bg-neutral-800 text-white border-none font-semibold"
          />
        )}
      </div>

      <div
        className={cn(
          "w-full max-w-screen h-96 min-h-96 overflow-hidden border relative flex justify-center items-center rounded-xl border-neutral-200 shadow-sm bg-neutral-50 p-1",
          className,
        )}
        {...props}
      >
        <Version versions={versions || 1}>{children}</Version>
      </div>
    </div>
  );
};

export default Box;
