"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";

import { useEmblaSlider } from "@/lib/hooks/use-embla-slider";

type Project = { title: string; category: string };

const gradients = [
  "from-primary to-secondary",
  "from-secondary to-primary/80",
  "from-primary/80 to-slate-900",
  "from-secondary to-slate-900",
];

export function FeaturedProjectsCarousel({
  projects,
}: {
  projects: Project[];
}) {
  const { emblaRef, scrollPrev, scrollNext, slideStyle } = useEmblaSlider({
    visible: 1,
    autoplayDelay: 2000,
  });

  return (
    <div className="relative h-full">
      <div
        className="overflow-hidden rounded-lg border bg-slate-900 shadow-md h-full"
        ref={emblaRef}
        style={slideStyle}
      >
        <div className="flex h-full">
          {projects.map((project, idx) => {
            const gradient = gradients[idx % gradients.length];
            return (
              <Link
                key={project.title}
                href="/gallery"
                className="embla__slide block"
                aria-label={`View ${project.title}`}
              >
                <div
                  className={`relative flex aspect-video w-full h-full items-center justify-center bg-gradient-to-br ${gradient} text-white`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-white blur-3xl" />
                  </div>
                  <Zap
                    className="relative h-16 w-16 drop-shadow-lg"
                    strokeWidth={2}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous project"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition-all hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next project"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition-all hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
