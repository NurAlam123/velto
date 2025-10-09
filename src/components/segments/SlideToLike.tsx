"use client";

import { createContext, useContext } from "react";
import { motion } from "motion/react";

interface SlideToLikeContextType {}

const SlideToLikeContext = createContext<SlideToLikeContextType | undefined>(
  undefined,
);

const SlideToLike = () => {
  return (
    <SlideToLikeContext.Provider value={{}}>
      <div className="bg-white p-2 rounded-2xl shadow-xs border border-neutral-200 overflow-hidden">
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

  return (
    <div className="w-72 h-16 relative">
      <div className="bg-amber-300 absolute top-1/2 -translate-y-1/2 left-0 w-full min-h-14 h-full max-h-[calc(var(--spacing)*15.5)] z-[0] rounded-xl"></div>
      <motion.div
        className="bg-white hover:bg-neutral-100 rounded-xl flex items-center px-3 gap-4 h-full w-full z-[1] relative"
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        dragElastic={0.2}
      >
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
