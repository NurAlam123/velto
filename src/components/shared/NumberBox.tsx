import { cn, range } from "@/lib/utils";

const NumberBox = ({
  count,
  current,
  className,
  ...props
}: { count: number; current: number } & React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "text-lg font-bold text-white relative h-fit overflow-hidden flex items-center justify-center",
        current <= 0 && "hidden",
        className,
      )}
      {...props}
    >
      <div className="h-8 flex justify-center">
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-transform duration-200"
          style={{
            transform: `translateY(-${100 - (current / count) * 100}%)`,
          }}
        >
          {[...range(1, count)].map((i) => (
            <span
              className={cn(
                "h-8 flex transition-all opacity-100 duration-100 ease-in-out scale-100 items-center",
                current !== count - i + 1 &&
                  current > 0 &&
                  "opacity-0 transition-all duration-100 ease-in-out scale-50",
              )}
              key={i}
            >
              {count - i + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberBox;
