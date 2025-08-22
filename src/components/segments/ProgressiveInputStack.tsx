"use client";

import { cn } from "@/lib/utils";
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  SVGProps,
  useState,
} from "react";

const ProgressiveInputStack = () => {
  const [current, setCurrent] = useState(1);

  const MIN = 1;
  const MAX = 3;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrent(MIN);

    const form = e.currentTarget;
    const formData = new FormData(form);
    console.log("Demo submit");
    console.log(formData);
  };

  return (
    <div className="flex items-start justify-center flex-col">
      <p className="text-xl font-bold">Invite a friend</p>
      <form className="mt-5 flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col relative">
          <ProgressiveInputStack.Div current={current} index={0}>
            <ProgressiveInputStack.Input
              type="text"
              placeholder="Friend's Name"
              name="friend-name"
            />
          </ProgressiveInputStack.Div>
          <ProgressiveInputStack.Div current={current} index={1}>
            <ProgressiveInputStack.Input
              placeholder="Friend's Email"
              name="friend-email"
              type="email"
            />
          </ProgressiveInputStack.Div>
          <ProgressiveInputStack.Div current={current} index={2}>
            <div className="flex justify-between w-full">
              <p className="text-sm font-medium text-neutral-500">
                Send a reminder in 5 days
              </p>
              <ProgressiveInputStack.ToggleSwitch name="daily-reminder" />
            </div>
          </ProgressiveInputStack.Div>
        </div>

        <div className="flex justify-between mt-4">
          <ProgressiveInputStack.PreviousButton
            current={current}
            MIN={MIN}
            setCurrent={setCurrent}
          />
          <ProgressiveInputStack.NextButton
            current={current}
            MAX={MAX}
            setCurrent={setCurrent}
          />
        </div>
      </form>
    </div>
  );
};

// ===========
// Progressive Div
// ===========
ProgressiveInputStack.Div = function ProgressiveInputStackDiv({
  current,
  index,
  children,
  ...props
}: {
  current: number;
  index: number;
} & HTMLAttributes<HTMLDivElement>) {
  const relativeIndex = current - index - 1;
  const y = 0.375 + 0.5 * relativeIndex;
  const scale = relativeIndex >= 0 ? 1 - relativeIndex * 0.05 : 1.1;

  const isVisible = index <= current - 1;

  const maxVisible = 3;
  const hide = index < current - maxVisible;
  const overflow = index >= current + maxVisible - 1;

  return (
    <div
      className={cn(
        "first:relative absolute transition-all duration-300 ease-in-out blur-none border-2 border-neutral-200 rounded-xl px-4 py-2  bg-neutral-50 w-full min-h-10 max-h-12 flex justify-between items-center",
        (!isVisible || hide) && "opacity-0 pointer-events-none blur-sm",
        overflow && "opacity-0 translate-y-6",
      )}
      style={{
        transform: !isVisible ? "translateY(10px)" : `translateY(-${y}rem)`,
        scale,
        zIndex: current - 1 === index ? 10 : 0,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// ===========
// Next and Previous Button
// ===========
//
// Next Button
ProgressiveInputStack.NextButton = function ProgressiveInputStackNextButton({
  current,
  setCurrent,
  MAX,
}: {
  current: number;
  setCurrent: (value: number) => void;
  MAX: number;
}) {
  return (
    <>
      <style jsx>
        {`
          @keyframes slideUp {
            0% {
              transform: translateY(20px);
              filter: blur(4px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              filter: blur(0px);
              opacity: 1;
            }
          }
          .animate-slideup {
            animation: slideUp 0.1s ease-out forwards;
          }
        `}
      </style>
      <button
        className={cn(
          "bg-black text-white rounded-full px-2.5 py-1.5 font-semibold cursor-pointer active:scale-[0.97] transition-all duration-100 ease-out origin-center hover:bg-black/80 shadow blur-none overflow-hidden",
        )}
        type={current > MAX ? "submit" : "button"}
        onClick={() => {
          if (current <= MAX) setCurrent(current + 1);
        }}
      >
        {current >= MAX ? (
          <div
            className={cn(
              "flex justify-between items-center gap-1 animate-slideup",
            )}
          >
            <Check />
            <span>Done</span>
          </div>
        ) : (
          <div className="flex justify-between items-center gap-0.5">
            Next <ArrowRight className="stroke-white" />
          </div>
        )}
      </button>
    </>
  );
};

// Previous Button
ProgressiveInputStack.PreviousButton =
  function ProgressiveInputStackPreviousButton({
    current,
    setCurrent,
    MIN,
  }: {
    current: number;
    setCurrent: (value: number) => void;
    MIN: number;
  }) {
    return (
      <button
        className={cn(
          "bg-neutral-300 p-2 rounded-full overflow-hidden flex justify-center items-center shadow-xs cursor-pointer active:scale-[0.97] transition-all duration-150 ease-in-out origin-center",
          current <= MIN && "opacity-0 pointer-events-none blur-xs",
        )}
        type="button"
        onClick={() => {
          if (current <= MIN) return;
          setCurrent(current - 1);
        }}
      >
        <ArrowLeft className="stroke-black" />
      </button>
    );
  };

// ======
// Input Field
// ======
ProgressiveInputStack.Input = function ProgressiveInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "outline-none ring-0 font-medium selection:bg-neutral-400",
        className,
      )}
      {...props}
    />
  );
};

// ======
// Toggle Switch
// ======
ProgressiveInputStack.ToggleSwitch = function ProgressiveToggleSwitch({
  name,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const [on, setOn] = useState(false);

  return (
    <button
      className={cn(
        "bg-neutral-300 w-8 max-w-8 rounded-full p-0.5 cursor-pointer relative flex items-center",
        on && "bg-green-500",
      )}
      {...props}
      aria-label="toggle"
      onClick={() => setOn(!on)}
      type="button"
    >
      <input type="checkbox" checked={on} readOnly name={name} hidden />
      <div
        className={cn(
          "w-4 h-full bg-white rounded-full translate-x-0 transition-all duration-200 ease-in-out",
          on && "translate-x-[0.725rem]",
        )}
      ></div>
    </button>
  );
};

// ======
// Icons
// ======
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

const Check = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};

export default ProgressiveInputStack;
