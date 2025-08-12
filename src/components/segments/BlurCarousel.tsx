"use client";

import { cn, range } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Image from "../ui/image";

const source = [
  {
    src: "/carousel/bird-1.jpg",
    alt: "bird-1",
  },
  {
    src: "/carousel/forest-2.jpg",
    alt: "forest-1",
  },
  {
    src: "/carousel/forest-3.jpg",
    alt: "forest-1",
  },
  {
    src: "/carousel/forest-4.jpg",
    alt: "forest-1",
  },
];

const BlurCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const cardWidth = 288 + 16;

  useEffect(() => {
    if (!containerRef.current || !carouselRef.current) return;

    const totalCard = Math.floor(containerRef.current.clientWidth / cardWidth);
    const mid = Math.floor(totalCard / 2);
    setCurrent(mid);
    carouselRef.current.scrollLeft = cardWidth * mid;
  }, [containerRef.current]);

  useEffect(() => {
    if (!carouselRef.current || !containerRef.current) return;
    const carousel = carouselRef.current;

    const handleScrollEnd = () => {
      const scrollLeft = carousel.scrollLeft;
      const viewportCenter = scrollLeft + carousel.clientWidth / 2;

      console.log(viewportCenter, scrollLeft);
    };

    carouselRef.current.addEventListener("scrollend", handleScrollEnd);

    return () =>
      carouselRef.current?.removeEventListener("scrollend", handleScrollEnd);
  }, []);

  return (
    <div className="relative overflow-auto">
      <div className="absolute inset-x-0 left-0 top-1/2 -translate-y-1/2 h-full backdrop-blur-[2px] pointer-events-none z-10 [mask-image:linear-gradient(to_right,black,black_16%,transparent_18%,transparent_82%,black_84%,black)]" />
      <div
        ref={carouselRef}
        className="relative overflow-x-auto px-24 py-4 [scroll-snap-type:x_mandatory]"
      >
        <div
          className="flex gap-4 items-center mx-auto min-w-max relative"
          ref={containerRef}
        >
          {source.map((image, i) => (
            <BlurCarousel.Card
              key={i}
              index={i}
              src={image.src}
              alt={image.alt}
              current={current}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

BlurCarousel.Card = function BlurCarouselCard({
  src,
  alt,
  current,
  index,
}: {
  src: string;
  alt: string;
  current: number;
  index: number;
}) {
  return (
    <div
      className={cn(
        "min-w-[288px] max-w-[288px] h-44 border-neutral-300 rounded-2xl bg-neutral-200 snap-center transition-all duration-100 overflow-hidden scale-95",
        current === index && "scale-100 blur-none",
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={1024}
        height={1024}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default BlurCarousel;
