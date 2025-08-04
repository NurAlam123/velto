import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
}

const Badge = ({ title, className }: Props) => {
  return (
    <div
      className={cn(
        "text-xs px-3 py-px rounded-full text-neutral-800 bg-neutral-100 select-none whitespace-nowrap shrink-0 border border-neutral-200 font-medium flex items-center justify-center",
        className,
      )}
    >
      {title}
    </div>
  );
};

export default Badge;
