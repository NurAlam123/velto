"use client";

import {
  GABOR_PROJECT_SOURCE,
  GABOR_PROJECT_SOURCE_VALUES,
} from "@/constants/gabor";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";

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

  const jiggleVariant = {
    initial: { scale: 0, rotate: 0 },
    animate: {
      scale: 1,
      rotate: [-10, 0],
      transition: {
        scale: { type: "spring", stiffness: 200, damping: 10 },
        rotate: { type: "spring", stiffness: 150, damping: 5, duration: 0.6 },
      },
    },
    exit: {
      scale: 0,
      rotate: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  } satisfies Variants;

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
                className="text-center contain-paint text-3xl/[1.1em] font-bold transition-[scale] duration-700 w-fit text-neutral-800/50 hover:text-neutral-800 cursor-pointer select-none scale-y-[130%] hover:scale-y-[140%] ease-elastic uppercase"
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
                className="text-center contain-paint text-3xl/[1.1em] font-bold transition-[scale] duration-700 w-fit text-neutral-800/50 hover:text-neutral-800 cursor-pointer select-none scale-y-[130%] hover:scale-y-[140%] ease-elastic uppercase"
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
                className="text-center contain-paint text-3xl/[1.1em] font-bold transition-[scale] duration-700 w-fit text-neutral-800/50 hover:text-neutral-800 cursor-pointer select-none scale-y-[130%] hover:scale-y-[140%] ease-elastic uppercase"
              >
                Burn
              </p>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              key="image-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                key="image-box-1"
                className="absolute w-auto h-auto max-w-24 max-h-24 bg-white rounded-xl -top-10 left-4 -rotate-12 overflow-hidden border border-neutral-200 shadow-md"
                variants={jiggleVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <GaborProject.Image src={source[0].src} alt="write" />
              </motion.div>
              <motion.div
                key="image-box-2"
                className="absolute w-auto h-auto max-w-24 max-h-24 bg-white rounded-xl -top-32 left-1/2 -rotate-12 overflow-hidden border border-neutral-200 shadow-md"
                variants={jiggleVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <GaborProject.Image src={source[1].src} alt="process" />
              </motion.div>
              <motion.div
                key="image-box-3"
                className="absolute w-auto h-auto max-w-24 max-h-24 bg-white rounded-xl top-4 right-4 -rotate-12 overflow-hidden border border-neutral-200 shadow-md"
                variants={jiggleVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <GaborProject.Image src={source[2].src} alt="burn" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

GaborProject.Image = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={96}
      height={96}
      className="object-cover w-full h-full"
      unoptimized={src.endsWith(".gif")}
    />
  );
};

export default GaborProject;
