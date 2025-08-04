"use client";

import useDevice from "@/hooks/useDevice";
import Image from "@/components/ui/image";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Wallet = ({ version }: { version?: number }) => {
  const [selectedColor, setSelectedColor] = useState<"black" | "amber">(
    "black",
  );

  const device = useDevice();

  return (
    <div>
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
          <div
            className={cn(
              "relative w-36 border h-36 rounded-4xl shadow-xl group",
              selectedColor === "black" && "bg-neutral-800",
              selectedColor === "amber" &&
                "bg-amber-700 border-amber-600 shadow-amber-700/15",
            )}
          >
            <div
              className="bg-inherit w-full h-16 absolute z-1 bottom-0 rounded-br-4xl rounded-bl-4xl overflow-hidden bg-blend-multiply"
              style={{
                clipPath: `path("M0,0 H174 v144 H0 Z ${device === "mobile" ? "M24,0" : "M32,0"} c 10,-0 19,6 24,14 18,27 38,20 50,0 6,-12 10,-15 43,-15 Z")`,
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
                  className={cn(
                    "w-full rounded-3xl h-24 p-2 absolute bg-gradient-to-br from-[#373736] to-[#515151] transition-transform duration-100 delay-[80ms] group-hover:delay-[0ms] ease-[[0.33,1,0.68,1]]",
                    version === 1 &&
                      "group-hover:-translate-y-[60px] group-hover:-translate-x-[60px] group-hover:-rotate-[30deg]",
                    version === 2 && "group-hover:-translate-y-[41px]",
                  )}
                >
                  <Image
                    src="/logo/mastercard.svg"
                    alt="visa card"
                    width={256}
                    height={256}
                    className="absolute aspect-auto w-6 h-4 right-4"
                  />
                </div>

                <div
                  className={cn(
                    "w-full rounded-3xl h-24 p-2 absolute bg-gradient-to-br from-zinc-400 via-white to-zinc-400 top-4 transition-transform duration-100 delay-[40ms] group-hover:delay-[40ms] ease-[[0.33,1,0.68,1]] flex justify-center items-center",
                    version === 1 &&
                      "group-hover:-translate-y-[68px] group-hover:translate-x-[60px] group-hover:rotate-[20deg] ",
                    version === 2 && "group-hover:-translate-y-[36px]",
                  )}
                >
                  <div className="ms-1 relative flex justify-center flex-col items-center w-full h-full">
                    <Image
                      src="/logo/amex-logo.svg"
                      alt="apple"
                      width={235}
                      height={15}
                      className="w-3/4 h-2 -mt-4"
                    />
                    <Image
                      src="/logo/amex.svg"
                      alt="apple"
                      width={1024}
                      height={1024}
                      className="w-16"
                    />
                  </div>
                </div>

                <div className="w-full rounded-3xl h-24 bg-gradient-to-br from-sky-400 to-blue-700 p-2 absolute top-8 group-hover:-translate-y-[26px] transition-transform duration-100 delay-[0ms] group-hover:delay-[80ms] ease-[[0.33,1,0.68,1]]">
                  <Image
                    src="/logo/visa.svg"
                    alt="visa card"
                    width={250}
                    height={81}
                    className="absolute aspect-auto w-6 h-4 right-4"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
