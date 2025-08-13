"use client";

import { useCallback, useRef, useState } from "react";
import Image from "../ui/image";
import { cn } from "@/lib/utils";

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [cardDistances, setCardDistances] = useState<number[]>([]);

  const cardWidth = 288 + 16;

  const calcDistance = useCallback(() => {
    if (!carouselRef.current || !containerRef.current) return;

    const carousel = carouselRef.current;
    const container = containerRef.current;
    const carouselRect = carousel.getBoundingClientRect();

    const carouselCenter = carouselRect.left + carouselRect.width / 2;
    const cards = container.children;
    const distances: Array<number> = [];

    let closestIndex = 0;
    let closestDistance = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(carouselCenter - cardCenter);

      distances.push(distance);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    }

    setCardDistances(distances);
    setCurrent(closestIndex);
  }, []);

  // dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;

    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
    calcDistance();
  };

  const handleMouseUp = () => {
    if (!carouselRef.current) return;

    setIsDragging(false);

    const targetScroll = current * cardWidth;
    carouselRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 left-0 top-1/2 -translate-y-1/2 h-full backdrop-blur-xs pointer-events-none z-10 [mask-image:linear-gradient(to_right,black,black_18%,transparent_26%,transparent_80%,black_88%,black)] bg-white/10" />

      <div
        ref={carouselRef}
        className={cn(
          "relative overflow-x-auto px-24 py-4 select-none",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        )}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex gap-4 items-center mx-auto min-w-max relative"
          ref={containerRef}
        >
          {source.map((image, i) => (
            <BlurCarousel.Card
              key={i}
              src={image.src}
              alt={image.alt}
              index={i}
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
  index: number;
  current: number;
}) {
  return (
    <div
      className={cn(
        "min-w-[288px] max-w-[288px] h-44 border-neutral-300 rounded-2xl bg-neutral-200 overflow-hidden transition-all duration-200 ease-out blur-xs scale-90",
        current === index && "scale-100 blur-none",
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={1024}
        height={1024}
        className="object-cover w-full h-full pointer-events-none"
        draggable={false}
      />
    </div>
  );
};

export default BlurCarousel;
