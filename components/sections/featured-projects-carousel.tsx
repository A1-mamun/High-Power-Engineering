"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "@/components/icons";

import { useEmblaSlider } from "@/lib/hooks/use-embla-slider";

type Project = {
  title: string;
  category: string;
  image: string;
};

export function FeaturedProjectsCarousel({
  projects,
}: {
  projects: Project[];
}) {
  const { emblaRef, scrollPrev, scrollNext, slideStyle } = useEmblaSlider({
    visible: 1,
    autoplayDelay: 3500,
  });

  return (
    <div className="relative h-full">
      <div
        className="overflow-hidden rounded-xl border border-primary/10 bg-slate-900 shadow-[0_25px_60px_-15px_rgba(2,143,217,0.45),0_10px_25px_-10px_rgba(1,30,128,0.6)] h-full"
        ref={emblaRef}
        style={slideStyle}
      >
        <div className="flex h-full">
          {projects.map((project) => (
            <Link
              key={project.title}
              href="/gallery"
              className="embla__slide block group/slide relative"
              aria-label={`View ${project.title}`}
            >
              <div className="relative aspect-video w-full h-full overflow-hidden">
                {/* Banner image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover/slide:scale-105"
                />

                {/* Brand gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/30 mix-blend-overlay" />

                {/* Category badge */}
                <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground shadow-md sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-[10px]">
                  {project.category}
                </span>

                {/* Title overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
                  <h3 className="text-sm font-extrabold leading-tight text-white drop-shadow-md sm:text-base md:text-lg">
                    {project.title}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/80 sm:mt-2 sm:text-xs">
                    <span>View project</span>
                    <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous project"
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:left-3 sm:h-10 sm:w-10"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next project"
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-3 sm:h-10 sm:w-10"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
}