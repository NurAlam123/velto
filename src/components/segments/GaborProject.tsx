"use client";

import {
  GABOR_PROJECT_DATA_TYPES,
  GABOR_PROJECT_IMAGE_POSITION,
  GABOR_PROJECT_IMAGE_SOURCE,
  GABOR_PROJECT_IMAGE_SOURCE_VALUES,
} from "@/constants/gabor";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import { random } from "@/lib/utils";

const GaborProject = () => {
  const [show, setShow] = useState(false);
  const [source, setSource] = useState<GABOR_PROJECT_IMAGE_SOURCE_VALUES>(
    GABOR_PROJECT_IMAGE_SOURCE.write,
  );

  const GABOR_PROJECT_DATA: GABOR_PROJECT_DATA_TYPES = [
    { title: "Write", source: GABOR_PROJECT_IMAGE_SOURCE.write },
    { title: "Process", source: GABOR_PROJECT_IMAGE_SOURCE.process },
    { title: "Burn", source: GABOR_PROJECT_IMAGE_SOURCE.burn },
  ];

  return (
    <div className="w-full">
      <p className="text-6xl mb-4 font-bold text-neutral-800 h-12 text-center uppercase">
        Flow
      </p>
      <div className="relative">
        <div className="mt-12">
          <div className="flex flex-col justify-center items-center">
            {GABOR_PROJECT_DATA.map(({ title, source }) => (
              <GaborProject.Title
                key={title}
                title={title}
                setShow={setShow}
                setSource={setSource}
                source={source}
              />
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              key="image-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className=" top-0 left-0 pointer-events-none inset-0 w-full h-full absolute flex justify-center items-center"
            >
              {source.map((image, i) => (
                <GaborProject.ImageBox
                  key={`image-box-${i}`}
                  position={image.position}
                >
                  <GaborProject.Image src={image.src} alt={image.alt} />
                </GaborProject.ImageBox>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

GaborProject.Title = function GaborProjectTitle({
  title,
  setShow,
  source,
  setSource,
}: {
  title: string;
  setShow: (value: boolean) => void;
  source: GABOR_PROJECT_IMAGE_SOURCE_VALUES;
  setSource: (source: GABOR_PROJECT_IMAGE_SOURCE_VALUES) => void;
}) {
  const handleHoverStart = (source: GABOR_PROJECT_IMAGE_SOURCE_VALUES) => {
    setShow(true);
    setSource(source);
  };

  const handleHoverEnd = () => {
    setShow(false);
  };
  return (
    <div className="relative w-full flex flex-col justify-start items-center">
      <p
        className="text-center contain-paint text-3xl/[1.1em] font-bold transition-[scale] duration-700 w-fit text-neutral-800/70 hover:text-neutral-800 cursor-pointer select-none scale-y-[115%] hover:scale-y-[125%] ease-elastic uppercase"
        onMouseEnter={() => handleHoverStart(source)}
        onMouseLeave={handleHoverEnd}
      >
        {title}
      </p>
    </div>
  );
};

GaborProject.ImageBox = function GaborProjectImageBox({
  children,
  position,
}: {
  children: React.ReactNode;
  position: GABOR_PROJECT_IMAGE_POSITION;
}) {
  const calculatedPosition = {
    x: position.x + random(-8, 8),
    y: position.y + random(-8, 8),
  };

  const roate = random(0, 6);

  const animationVariant = {
    initial: {
      scale: 0,
      rotate: roate,
      x: position.x,
      y: position.y,
    },
    animate: {
      scale: 1,
      rotate: random(-6, 0),
      x: calculatedPosition.x,
      y: calculatedPosition.y,

      transition: {
        scale: { type: "spring", stiffness: 200, damping: 10 },
        rotate: { type: "spring", stiffness: 150, damping: 5, duration: 0.1 },
        y: { type: "spring", stiffness: 150, damping: 10, duration: 0.1 },
        x: { type: "spring", stiffness: 150, damping: 10, duration: 0.1 },
      },
    },
    exit: {
      scale: 0,
      rotate: roate,
      x: calculatedPosition.x,
      y: calculatedPosition.y,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  } satisfies Variants;

  return (
    <motion.div
      suppressHydrationWarning
      className="absolute w-auto h-auto min-w-12 min-h-12 max-w-24 max-h-24 bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-md pointer-events-none"
      variants={animationVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

GaborProject.Image = function GaborProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
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
