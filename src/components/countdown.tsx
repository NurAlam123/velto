"use client";

import { useRef, useState } from "react";
import Image from "./ui/image";

const Countdown = () => {
  const duration = 6;
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const requestRef = useRef<number | null>(null);

  const startTimeRef = useRef<number | null>(null);
  const previousElapsedRef = useRef<number>(0);

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;

    const elapsed =
      (timestamp - startTimeRef.current) / 1000 + previousElapsedRef.current;

    const remaining = Math.ceil(Math.max(0, duration - elapsed));
    setTimeLeft(remaining);

    if (remaining > 0) requestRef.current = requestAnimationFrame(animate);
    else setIsRunning(false);
  };

  const handleClick = () => {
    // reset
    if (timeLeft <= 0) {
      reset();
      return;
    }

    // start the countdown
    if (!isRunning) {
      setIsRunning(true);
      startTimeRef.current = null;
      requestRef.current = requestAnimationFrame(animate);
      return;
    }

    // pause the countdown
    // and store already passed time in previousElapsedRef
    setIsRunning(false);
    cancelAnimationFrame(requestRef.current ?? 0);
    requestRef.current = null;

    if (startTimeRef.current) {
      const now = performance.now();
      previousElapsedRef.current += (now - startTimeRef.current) / 1000;
    }

    startTimeRef.current = null;
  };

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(duration);
    cancelAnimationFrame(requestRef.current ?? 0);
    requestRef.current = null;
    startTimeRef.current = null;
    previousElapsedRef.current = 0;
  };

  return (
    <div>
      <div
        className="relative h-72 w-32 rounded-2xl border-2 border-neutral-600 overflow-hidden flex justify-center items-center bg-gradient-to-b from-black to-neutral-600"
        onClick={handleClick}
      >
        <div
          className="absolute z-[1] inset-0 transition-all ease-[0.12,0,0.39,0] duration-150 bg-white"
          style={{
            height: `${100 - (timeLeft / duration) * 100}%`,
          }}
        ></div>

        <div className="z-[2] text-center select-none mix-blend-difference">
          <div className="text-lg font-bold text-white relative h-fit overflow-visible">
            <div className="h-7">
              <div className="absolute left-1/2 -translate-x-1/2 transition-transform duration-500">
                <p className="h-7">{timeLeft}</p>
                {/* <p className="h-7">{timeLeft - 1}</p> */}
                {/* <p className="h-7">{timeLeft - 2}</p> */}
              </div>
            </div>
          </div>
          <p className="text-xs text-neutral-100">
            {timeLeft <= 0
              ? "Tap to reset"
              : isRunning
                ? "Tap to Pause"
                : "Tap to Start"}
          </p>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-center">
        <button
          onClick={reset}
          className="not-disabled:active:scale-90 active:transition-transform active:duration-100 active:ease-in-out disabled:opacity-50 cursor-pointer disabled:cursor-no-drop"
          aria-label="reset clock"
          disabled={timeLeft === duration}
        >
          <Image
            src="/icons/reset.svg"
            alt="reset icon"
            width={24}
            height={24}
            className="size-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Countdown;
