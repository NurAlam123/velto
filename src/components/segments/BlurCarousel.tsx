"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const rafId = useRef<number>(0);
  const isTouchDevice = useRef(false);

  const cardWidth = 288 + 16;
  const maxEffectDistance = cardWidth * 1.5;

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

  // dragging - mouse
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

  // dragging - touch
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;

    isTouchDevice.current = true;
    setIsDragging(true);
    const touch = e.touches[0];
    setStartX(touch.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;

    const touch = e.touches[0];
    const x = touch.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (!carouselRef.current) return;

    setIsDragging(false);

    const targetScroll = current * (cardWidth - 8);
    carouselRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!carouselRef.current) return;

    calcDistance();
    const carousel = carouselRef.current;

    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(calcDistance);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [calcDistance]);

  return (
    <div className="relative overflow-hidden">
      <div className="max-md:hidden absolute inset-x-0 left-0 top-1/2 -translate-y-1/2 h-full backdrop-blur-xs pointer-events-none z-10 [mask-image:linear-gradient(to_right,black_0%,black_14%,transparent_26%,transparent_82%,black_90%,black)] bg-white/10" />

      <div
        ref={carouselRef}
        className={cn(
          "relative overflow-x-auto px-4 md:px-24 py-4 select-none",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        )}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        // mouse
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        // touch
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div
          className="flex gap-2 md:gap-4 items-center mx-auto min-w-max relative"
          ref={containerRef}
        >
          {source.map((image, i) => (
            <BlurCarousel.Card
              key={i}
              src={image.src}
              alt={image.alt}
              distance={cardDistances[i] ?? Infinity}
              maxEffectDistance={maxEffectDistance}
              isTouchDevice={isTouchDevice.current}
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
  distance,
  maxEffectDistance,
}: {
  src: string;
  alt: string;
  distance: number;
  maxEffectDistance: number;
  isTouchDevice: boolean;
}) {
  const ratio = Math.min(distance / maxEffectDistance, 1);

  const scale = Math.round((1 - 0.2 * ratio + Number.EPSILON) * 100) / 100;
  const blur = Math.round((8 * ratio + Number.EPSILON) * 100) / 100;

  return (
    <div
      className={cn(
        "min-w-[288px] max-w-[288px] h-44 border-neutral-300 rounded-2xl bg-neutral-200 overflow-hidden transition-all duration-200 ease-out",
      )}
      style={{
        transform: `scale(${scale})`,
        filter: `blur(${blur}px)`,
        transition: "transform 0.2s ease-out",
      }}
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
