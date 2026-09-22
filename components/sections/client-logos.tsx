"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "@/components/icons";

import { useEmblaSlider } from "@/lib/hooks/use-embla-slider";
import SectionTitle from "../shared/SectionTitle";

const colors = [
  "from-primary to-secondary",
  "from-secondary to-primary/80",
  "from-primary/80 to-secondary",
  "from-secondary/80 to-primary",
  "from-primary to-slate-900",
  "from-secondary/90 to-primary/70",
  "from-primary/70 to-secondary/90",
  "from-secondary to-primary",
];

const labels = [
  "Apex Group",
  "Vertex Energy",
  "Polaris",
  "Atlas Power",
  "BlueRiver",
  "Crescent",
  "Delta Corp",
  "Emirates",
  "Forge",
  "Ganges",
  "Horizon",
  "Indus",
  "Jupiter",
  "Kestrel",
  "Lotus",
  "Meridian",
  "Nimbus",
  "Orion",
  "Phoenix",
  "Quantum",
  "Riverside",
  "Sirius",
  "Titan",
  "Ursa",
  "Vega",
  "Wabash",
  "Xenon",
  "Yamuna",
  "Zenith",
  "Astra",
];

// Responsive slide count for the client logo carousel:
//  - Mobile  (<sm: 640px)         → 2 logos
//  - Small   (sm:  640–<md: 768)  → 3 logos
//  - Tablet  (md:  768–<lg: 1024) → 4 logos
//  - Desktop (lg:  1024–<xl: 1280)→ 5 logos
//  - Large   (xl:  ≥1280)         → 6 logos
const getVisible = (width: number) => {
  if (width < 640) return 2;
  if (width < 768) return 3;
  if (width < 1024) return 4;
  if (width < 1280) return 5;
  return 6;
};

export function ClientLogos() {
  const {
    emblaRef,
    selected,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
    slideStyle,
  } = useEmblaSlider({ visible: getVisible, autoplayDelay: 2500 });

  return (
    <section className="container  py-16">
      <div className="bg-white">
        <div className="mb-10 flex flex-col items-center text-center">
          <SectionTitle
            title="Our Valuable Clients"
            subtitle="Trusted by industry leaders"
          />
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We&apos;re proud to partner with leading companies across multiple
            industries to deliver reliable power and electrical solutions.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Carousel viewport */}
        <div className="overflow-hidden" ref={emblaRef} style={slideStyle}>
          <div className="flex">
            {labels.map((label, idx) => {
              const color = colors[idx % colors.length];
              return (
                <div key={label} className="embla__slide px-1.5 sm:px-2 md:px-3">
                  <div className="group flex aspect-[3/2] items-center justify-center rounded-md border bg-slate-50 p-3 transition-all hover:border-primary hover:bg-white hover:shadow-md sm:p-4">
                    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br ${color} text-sm font-extrabold text-white shadow-sm transition-transform group-hover:scale-110 sm:h-10 sm:w-10`}
                      >
                        {label.charAt(0)}
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600 text-center leading-tight sm:text-[10px]">
                        {label}
                      </span>
                    </div>
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
          className="absolute left-1 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition-all hover:bg-primary hover:text-primary-foreground sm:flex sm:left-2 sm:h-10 sm:w-10 md:left-6 md:h-11 md:w-11"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="absolute right-1 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition-all hover:bg-primary hover:text-primary-foreground sm:flex sm:right-2 sm:h-10 sm:w-10 md:right-6 md:h-11 md:w-11"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2 sm:mt-8">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === selected
                ? "w-8 bg-primary"
                : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
