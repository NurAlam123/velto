"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";
import { HeartIcon } from "@/assets/icons";

interface SlideToLikeContextType {}

const SlideToLikeContext = createContext<SlideToLikeContextType | undefined>(
  undefined,
);

const SlideToLike = () => {
  return (
    <SlideToLikeContext.Provider value={{}}>
      <div className="bg-neutral-50 p-2 rounded-2xl shadow-xs border border-neutral-200 overflow-hidden">
        <SlideToLike.Card />
        <SlideToLike.Card />
        <SlideToLike.Card />
        <SlideToLike.Card />
      </div>
    </SlideToLikeContext.Provider>
  );
};

SlideToLike.Card = function SlideToLikeCard() {
  const context = useContext(SlideToLikeContext);
  if (!context)
    throw new Error("SlideToLike.Card must be used inside SlideToLike");

  const x = useMotionValue(0);
  const [liked, setLiked] = useState<boolean>(false);
  const crossed = useRef<boolean>(false);

  useMotionValueEvent(x, "change", (latest) => {
    if (latest < 10) {
      crossed.current = false;
      return;
    }

    if (latest > 40) {
      crossed.current = true;
    }
  });

  const dragEndHandler = () => {
    if (crossed.current) {
      crossed.current = false;

      if (!liked) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  };

  return (
    <div className="w-72 h-16 relative cursor-grab active:cursor-grabbing">
      <div className="bg-rose-400 absolute top-1/2 -translate-1/2 left-1/2 w-full max-w-[calc(100%-4px)] min-h-14 h-full max-h-[calc(var(--spacing)*15.5)] z-[0] rounded-xl flex items-center">
        <HeartIcon className="fill-white stroke-none size-9 ms-2" />
      </div>
      <motion.div
        className="bg-neutral-50 hover:bg-neutral-100 rounded-xl flex items-center px-3 gap-4 h-full w-full z-[1] relative"
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 650 }}
        style={{
          x,
        }}
        onDragEnd={dragEndHandler}
      >
        <AnimatePresence mode="wait">
          {liked && (
            <motion.div
              key={"liked"}
              className="border-2 border-neutral-100 rounded-full p-1 absolute top-1 left-1 bg-rose-400 shadow-sm cursor-pointer origin-center"
              initial={{
                rotate: -45,
                scale: 0.9,
                opacity: 0.8,
              }}
              animate={{
                rotate: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                rotate: 0,
                scale: 0,
                transition: {
                  duration: 0.15,
                },
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <HeartIcon className="size-4 stroke-none fill-white" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="min-w-12 min-h-12 border rounded-full"></div>
        <div className="flex justify-between items-center w-full gap-2">
          <div className="w-full">
            <p className="font-semibold select-none">Title</p>
          </div>
          <div>
            <p className="text-xs select-none">03:40</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SlideToLike;
