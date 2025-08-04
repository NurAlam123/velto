"use client";

import { useEffect, useRef, useState } from "react";
import Image from "./ui/image";
import NumberBox from "./ui/NumberBox";

const Countdown = () => {
  const [duration, setDuration] = useState<number>(6);
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

  // reset on duration change
  useEffect(() => {
    setTimeLeft(duration);
    reset();
  }, [duration]);

  // cleanup requestAnimationFrame
  useEffect(() => {
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div>
      <div>
        <div
          className="relative h-72 w-32 rounded-2xl border-2 border-neutral-600 overflow-hidden flex justify-center items-center bg-gradient-to-b from-black to-neutral-600 shadow-md"
          onClick={handleClick}
        >
          <div
            className="absolute z-[1] inset-0 transition-all ease-[0.33,1,0.68,1] duration-200 bg-white"
            style={{
              height:
                duration > 0 ? `${100 - (timeLeft / duration) * 100}%` : "100%",
            }}
          ></div>

          <div className="z-[2] text-center select-none mix-blend-difference">
            {/* number animation */}
            <NumberBox current={timeLeft} count={duration} />

            {/* start - pause - reset */}
            <div className="text-neutral-400">
              {timeLeft <= 0 ? (
                <p className="flex flex-col">
                  <span className="font-bold text-white">Time Over</span>
                  <span className="text-xs">Tap to Reset</span>
                </p>
              ) : isRunning ? (
                <p className="text-xs">Tap to Pause</p>
              ) : (
                <p className="text-xs">Tap to Start</p>
              )}
            </div>
          </div>
        </div>

        {/* Reset butotn */}
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

      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        <div className="h-20 w-8 flex justify-around items-center flex-col rounded-xl bg-neutral-800 text-white">
          <button
            className="text-neutral-300"
            onClick={() => duration < 10 && setDuration(duration + 1)}
          >
            +
          </button>
          <div className="w-full bg-neutral-800 cursor-default select-none">
            <NumberBox count={duration} current={duration} />
          </div>
          <button
            className="text-neutral-300"
            onClick={() => duration > 1 && setDuration(duration - 1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
