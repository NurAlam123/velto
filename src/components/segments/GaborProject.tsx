"use client";

import {
  GABOR_PROJECT_SOURCE,
  GABOR_PROJECT_SOURCE_VALUES,
} from "@/constants/gabor";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const GaborProject = () => {
  const [show, setShow] = useState(false);
  const [source, setSource] = useState<GABOR_PROJECT_SOURCE_VALUES>(
    GABOR_PROJECT_SOURCE.burn,
  );

  const handleHoverStart = (source: GABOR_PROJECT_SOURCE_VALUES) => {
    setShow(true);
    setSource(source);
  };

  const handleHoverEnd = () => {
    setShow(false);
  };

  return (
    <div className="w-full">
      <p className="text-6xl mb-4 font-bold text-neutral-600 h-12 text-center">
        PROJECT
      </p>
      <div className="relative">
        <div className="mt-12">
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-full flex flex-col justify-start items-center">
              <p
                className="text-center contain-paint text-3xl/[1em] font-bold transition-[scale] duration-700 w-fit text-neutral-800/50 hover:text-neutral-800 cursor-pointer select-none scale-y-110 hover:scale-y-[120%] ease-elastic uppercase peer"
                onMouseEnter={() =>
                  handleHoverStart(GABOR_PROJECT_SOURCE.write)
                }
                onMouseLeave={handleHoverEnd}
              >
                Write
              </p>
            </div>
            <div className="relative w-full flex flex-col justify-center items-center">
              <p
                className="text-center contain-paint text-3xl/[1em] font-bold transition-[scale] duration-700 w-fit text-neutral-800/50 hover:text-neutral-800 cursor-pointer select-none scale-y-110 hover:scale-y-[120%] ease-elastic uppercase peer"
                onMouseEnter={() =>
                  handleHoverStart(GABOR_PROJECT_SOURCE.process)
                }
                onMouseLeave={handleHoverEnd}
              >
                Process
              </p>
            </div>
            <div className="relative w-full flex flex-col justify-center items-center">
              <p
                onMouseEnter={() => handleHoverStart(GABOR_PROJECT_SOURCE.burn)}
                onMouseLeave={handleHoverEnd}
                className="text-center contain-paint text-3xl/[1em] font-bold transition-[scale] duration-700 w-fit text-neutral-800/50 hover:text-neutral-800 cursor-pointer select-none scale-y-[120%] hover:scale-y-[130%] ease-elastic uppercase peer"
              >
                Burn
              </p>
            </div>
          </div>
        </div>
        <div className={cn("hidden", show && "block")}>
          <div className="absolute w-24 h-24 bg-white rounded-xl -top-10 left-4 -rotate-12 overflow-hidden border border-neutral-200 shadow-md">
            <Image
              src={source[0].src}
              alt="writing"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute w-24 h-24 bg-white rounded-xl -top-32 left-1/2 -rotate-12 overflow-hidden border border-neutral-200 shadow-md">
            <Image
              src={source[1].src}
              alt="writing"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute w-24 h-24 bg-white rounded-xl top-4 right-4 -rotate-12 overflow-hidden border border-neutral-200 shadow-md">
            <Image
              src={source[2].src}
              alt="writing"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaborProject;
