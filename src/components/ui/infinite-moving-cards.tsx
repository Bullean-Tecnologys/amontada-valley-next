"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type InfiniteMovingCardsProps = {
  items: {
    image: string;
    alt: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const items = Array.from(scrollerRef.current.children);
    items.forEach((item) => {
      scrollerRef.current?.appendChild(item.cloneNode(true));
    });

    setCSSVariables();
    setStarted(true);
  }, []);

  const setCSSVariables = () => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden max-w-screen",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full flex-nowrap gap-8 py-6",
          started && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="
              group relative flex h-44 w-64 shrink-0 items-center justify-center
              rounded-2xl border border-white/10
              shadow-md transition-all duration-300 ease-out
              hover:-translate-y-2 hover:scale-110 hover:shadow-xl
            "
          >
            <img
              src={item.image}
              alt={item.alt}
              className="
                max-h-24 object-contain
                transition-transform duration-300
                group-hover:scale-105 rounded-sm
              "
            />

            
            <div
              className="
                pointer-events-none absolute inset-0 rounded-2xl
                bg-gradient-to-br from-primary/5 via-transparent to-transparent
              "
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
