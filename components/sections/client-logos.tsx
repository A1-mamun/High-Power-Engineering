"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useEmblaSlider } from "@/lib/hooks/use-embla-slider";

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

const VISIBLE = 5;

export function ClientLogos() {
  const {
    emblaRef,
    selected,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
    slideStyle,
  } = useEmblaSlider({ visible: VISIBLE, autoplayDelay: 2500 });

  return (
    <section className="container  py-16">
      <div className="bg-white">
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Trusted by industry leaders
          </span>
          <h2 className="section-title mx-auto mt-2 inline-block">
            Our Valuable Clients
          </h2>
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
                <div key={label} className="embla__slide px-3">
                  <div className="group flex aspect-[3/2] items-center justify-center rounded-md border bg-slate-50 p-4 transition-all hover:border-primary hover:bg-white hover:shadow-md">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br ${color} text-sm font-extrabold text-white shadow-sm transition-transform group-hover:scale-110`}
                      >
                        {label.charAt(0)}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 text-center leading-tight">
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
          className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition-all hover:bg-primary hover:text-primary-foreground md:flex md:left-6"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition-all hover:bg-primary hover:text-primary-foreground md:flex md:right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
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
