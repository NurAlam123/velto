"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";
import { HeartIcon } from "@/assets/icons";
import Image from "next/image";

const CARDS_DATA = [
  {
    image: "https://i.scdn.co/image/ab67616d00001e02fc8633e22a7dba6aab817bff",
    title: "Payphone",
    artist: "Maroon 5",
    duration: "03:51",
  },
  {
    image: "https://i.scdn.co/image/ab67616d00001e027e98a30f3a9af0fb35771ae1",
    title: "Breathe",
    artist: "Olly Alexander",
    duration: "03:53",
  },
  {
    image: "https://i.scdn.co/image/ab67616d00001e02a0934c15232680a3afc9da6e",
    title: "her",
    artist: "JVKE",
    duration: "02:51",
  },
  {
    image: "https://i.scdn.co/image/ab67616d00001e029214ff0109a0e062f8a6cf0f",
    title: "I Love You So",
    artist: "The Walters",
    duration: "02:40",
  },
];

const SlideToLike = () => {
  return (
    <div className="bg-neutral-50 p-2 rounded-2xl shadow-xs border border-neutral-200 overflow-hidden">
      {CARDS_DATA.map((data, i) => (
        <SlideToLikeCard
          key={`card-data-${i}`}
          title={data.title}
          duration={data.duration}
          image={data.image}
          artist={data.artist}
        />
      ))}
    </div>
  );
};

const SlideToLikeCard = ({
  title,
  duration,
  image,
  artist,
}: {
  title: string;
  duration: string;
  image: string;
  artist: string;
}) => {
  const x = useMotionValue(0);
  const [liked, setLiked] = useState<boolean>(false);
  const crossed = useRef<boolean>(false);

  useMotionValueEvent(x, "change", (latest) => {
    if (latest < 10) {
      crossed.current = false;
      return;
    }

    if (latest > 40) crossed.current = true;
  });

  const dragEndHandler = () => {
    if (!crossed.current) return;

    crossed.current = false;
    if (!liked) setLiked(true);
    else setLiked(false);
  };

  return (
    <div className="w-72 h-16 relative cursor-grab active:cursor-grabbing">
      <div className="bg-rose-400 absolute top-1/2 -translate-1/2 left-1/2 w-full max-w-[calc(100%-4px)] min-h-14 h-full max-h-[calc(var(--spacing)*15.5)] z-[0] rounded-xl flex items-center">
        <HeartIcon className="fill-white stroke-none size-9 ms-2" />
      </div>
      <motion.div
        className="bg-neutral-50 hover:bg-neutral-100 rounded-xl flex items-center px-3 gap-4 h-full w-full z-[1] relative"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragTransition={{ bounceStiffness: 650 }}
        style={{ x }}
        onDragEnd={dragEndHandler}
      >
        <AnimatePresence mode="wait">
          {liked && (
            <motion.div
              key={"liked"}
              className="border-2 border-neutral-100 rounded-full p-1 absolute top-1 left-1 bg-rose-400 shadow-sm cursor-pointer origin-center"
              initial={{ rotate: -45, scale: 0.9, opacity: 0.8 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 0, scale: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.3 }}
            >
              <HeartIcon className="size-4 stroke-none fill-white" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="min-w-12 min-h-12 border rounded-full border-neutral-200 overflow-hidden flex justify-center items-center">
          <Image
            src={image}
            alt={title}
            width={420}
            height={420}
            className="object-cover w-12 h-12"
          />
        </div>
        <div className="flex justify-between items-center w-full gap-2">
          <div className="w-full">
            <p className="font-semibold select-none">{title}</p>
            <p className="text-xs text-neutral-500">{artist}</p>
          </div>
          <div>
            <p className="text-xs select-none">{duration}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SlideToLike;
