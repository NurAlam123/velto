"use client";

import { cn } from "@/lib/utils";
import { SVGProps, useState } from "react";

const ProgressiveInputStack = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex items-start justify-center flex-col">
      <p className="text-xl font-bold">Invite a friend</p>
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col relative">
          <ProgressiveInputStack.Input
            data-index="0"
            placeholder="Friend name"
            className="scale-90 -translate-y-3"
          />
          <ProgressiveInputStack.Input
            data-index="1"
            placeholder="Friend email"
            className="absolute -translate-y-1.5 scale-95"
          />
          <ProgressiveInputStack.Input
            data-index="2"
            placeholder="Friend sele"
            className="absolute"
          />
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="bg-neutral-300 p-2 rounded-full overflow-hidden flex justify-center items-center shadow-xs"
            onClick={() => setCurrent(current - 1)}
          >
            <ArrowLeft className="stroke-black" />
          </button>
          <button
            className="bg-black text-white rounded-full px-2.5 py-1.5 font-semibold flex justify-between items-center gap-0.5 cursor-pointer active:scale-[0.97] transition-all duration-100 ease-out origin-center hover:bg-black/80 shadow"
            onClick={() => setCurrent(current + 1)}
          >
            Next <ArrowRight className="stroke-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

ProgressiveInputStack.Input = function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "border-2 border-neutral-200 rounded-lg px-2 py-2 outline-none ring-0 font-medium bg-neutral-50 selection:bg-neutral-400",
        className,
      )}
      {...props}
    />
  );
};

// Icons
const ArrowRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 8L22 12L18 16" />
      <path d="M8 12H22" />
    </svg>
  );
};

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 8L2 12L6 16" />
      <path d="M2 12H22" />
    </svg>
  );
};

export default ProgressiveInputStack;
