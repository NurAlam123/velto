"use client";

import useDevice from "@/hooks/useDevice";
import { animate, AnimationSequence, motion } from "motion/react";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Wallet = () => {
  const [clicked, setClicked] = useState(false);
  const [selectedColor, setSelectedColor] = useState<"black" | "amber">(
    "black",
  );

  const sequence = {
    default: [
      ["#card-3", { x: "0px", y: "0px" }],
      ["#card-2", { x: "0px", y: "0px" }],
      ["#card-1", { x: "0px", y: "0px" }],
    ] satisfies AnimationSequence,

    animate: [
      ["#card-1", { y: "-81px" }],
      ["#card-2", { y: "-76px" }],
      ["#card-3", { y: "-66px" }],
    ] satisfies AnimationSequence,
  };

  const onHover = (state: "start" | "end") => {
    animate(state === "start" ? sequence.animate : sequence.default, {
      defaultTransition: {
        duration: 0.15,
        ease: [0.33, 1, 0.68, 1],
      },
    });
  };

  const device = useDevice();

  return (
    <motion.div className="relative border w-96 h-96 rounded-xl border-neutral-200 shadow-sm bg-neutral-50 p-1">
      <div className="absolute right-2 top-2 flex gap-1">
        <button
          className="rounded-full size-6 bg-neutral-800 cursor-pointer"
          onClick={() => setSelectedColor("black")}
          aria-label="black"
        ></button>
        <button
          className="rounded-full size-6 bg-amber-600 cursor-pointer"
          onClick={() => setSelectedColor("amber")}
          aria-label="amber"
        ></button>
      </div>

      <div className="h-full w-full flex justify-center items-center">
        {!device ? (
          <Skeleton className="h-36 w-36 rounded-4xl" />
        ) : (
          <motion.div
            className={cn(
              "relative w-36 border h-36 rounded-4xl shadow-xl",
              selectedColor === "black" && "bg-neutral-800",
              selectedColor === "amber" && "bg-amber-700 border-amber-600",
            )}
            onClick={() => {
              setClicked(!clicked);
              onHover(clicked ? "start" : "end");
            }}
            onHoverStart={() => onHover("start")}
            onHoverEnd={() => onHover("end")}
          >
            <div
              className="bg-inherit w-full h-16 absolute z-1 bottom-0 rounded-br-4xl rounded-bl-4xl overflow-hidden bg-blend-multiply"
              style={{
                clipPath: `path("M0,0 H172 v144 H0 Z ${device === "mobile" ? "M24,0" : "M32,0"} c 10,-0 19,6 24,14 18,27 38,20 50,0 6,-12 10,-15 43,-15 Z")`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    selectedColor === "black"
                      ? "linear-gradient(to bottom,rgba(69, 69, 69, 0.69),rgba(0,0,0,1)), url('/noise.svg')"
                      : "linear-gradient(to bottom,rgba(255, 113, 0, 0.39),rgba(166, 79, 0, 1)), url('/noise.svg')",
                }}
              ></div>
            </div>
            <div className="p-2">
              <div className="text-black h-full rounded-3xl relative">
                <div
                  id="card-1"
                  className="w-full rounded-3xl h-24 bg-amber-400 p-2 absolute bg-gradient-to-r from-rose-500 via-orange-400 to-amber-500"
                ></div>
                <div
                  id="card-2"
                  className="w-full rounded-3xl h-24 bg-gradient-to-tr from-emerald-600 to-green-400 p-2 absolute top-4"
                ></div>
                <div
                  id="card-3"
                  className="w-full rounded-3xl h-24 bg-neutral-100 p-2 absolute top-8"
                >
                  <Image
                    src="/apple.svg"
                    alt="apple"
                    width={24}
                    height={24}
                    className="size-6 aspect-auto absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Wallet;
