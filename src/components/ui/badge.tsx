import { cn } from "@/lib/utils";

interface Props {
  // title?: string;
  title: "click" | "hover" | string;
  className?: string;
}

const Badge = ({ title, className }: Props) => {
  return (
    <div
      className={cn(
        "text-xs px-3 py-px rounded-full text-neutral-800 bg-neutral-100 select-none whitespace-nowrap shrink-0 border border-neutral-200 font-medium flex items-center justify-center",
        // type === "click" && "bg-gradient-to-b from-indigo-600 to-indigo-700",
        // type === "hover" && "bg-gradient-to-b from-emerald-500 to-green-700",
        className,
      )}
    >
      {/* {type === "click" && "click"} */}
      {/* {type === "hover" && "hover"} */}
      {/* {type === "custom" && (title || "custom")} */}
      {title}
    </div>
  );
};

export default Badge;
