"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { heroSlides } from "@/lib/data";
import { useEmblaSlider } from "@/lib/hooks/use-embla-slider";

const VISIBLE = 3;

export function HeroSlider() {
  const {
    emblaRef,
    selected,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
    slideStyle,
  } = useEmblaSlider({ visible: VISIBLE, autoplayDelay: 4000 });

  return (
    <section className="relative overflow-hidden text-white container mx-auto">
      <div className="embla" ref={emblaRef} style={slideStyle}>
        <div className="embla__container">
          {heroSlides.map((slide) => {
            return (
              <div
                key={slide.title}
                className={`embla__slide relative aspect-square w-full px-2 md:px-3`}
              >
                {/* Background image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />

                {/* Gradient overlay for readability */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-70 mix-blend-multiply`}
                />

                {/* Bottom gradient for title legibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Title at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
                    {slide.title}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground md:left-8"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground md:right-8"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === selected
                ? "w-8 bg-primary"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
