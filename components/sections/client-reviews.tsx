"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { clientReviews } from "@/lib/data";
import SectionTitle from "../shared/SectionTitle";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-slate-200 text-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

export function ClientReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 6000, stopOnInteraction: false })],
  );

  const [selected, setSelected] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (i: number) => emblaApi?.scrollTo(i);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-20">
      <div className="container">
        <div className="mb-10 flex flex-col items-center text-center">
          <SectionTitle title="What Our Clients Say" subtitle="Testimonials" />

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Real feedback from industry leaders who trust High Power BD with
            their most critical power infrastructure projects.
          </p>
        </div>

        <div className="relative">
          {/* Carousel viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {clientReviews.map((r) => (
                <div
                  key={r.name}
                  className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
                >
                  <div className="flex h-full flex-col rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md md:p-8">
                    {/* Quote icon */}
                    <div className="mb-4 flex items-start justify-between">
                      <Quote className="h-8 w-8 text-primary/30" />
                      <StarRating rating={r.rating} />
                    </div>

                    {/* Review text */}
                    <p className="flex-1 text-sm leading-relaxed text-slate-700 md:text-base">
                      &ldquo;{r.review}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${r.color} text-base font-extrabold text-white shadow-sm`}
                        aria-hidden
                      >
                        {r.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-bold text-slate-900 md:text-base">
                          {r.name}
                        </div>
                        <div className="truncate text-xs text-slate-500 md:text-sm">
                          {r.role}, {r.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition-all hover:bg-primary hover:text-primary-foreground md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next review"
            className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition-all hover:bg-primary hover:text-primary-foreground md:flex"
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
              aria-label={`Go to review ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === selected
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
