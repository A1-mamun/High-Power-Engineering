"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";

type Options = {
  /** Number of slides visible at once, or a function that returns the count
   *  given the current viewport width. */
  visible: number | ((width: number) => number);
  /** Autoplay delay in ms. Pass `null` to disable autoplay. */
  autoplayDelay: number | null;
  /** Additional embla options merged with the sliding-window defaults. */
  options?: EmblaOptionsType;
};

const resolveVisible = (
  visible: number | ((width: number) => number),
  width: number,
) => (typeof visible === "function" ? visible(width) : visible);

/**
 * Wires up an Embla carousel configured as a sliding-window stepper:
 * `visible` slides shown at a time, advancing one slide per step, with `loop`
 * on, alignment to the start, and a per-render-stable autoplay plugin.
 *
 * If `visible` is a function, it will be called with the current viewport
 * width whenever the window resizes; the carousel will `reInit()` so the
 * slide-size CSS variable updates correctly.
 *
 * Returns the viewport ref, scroll-snap state, and `prev`/`next`/`scrollTo`
 * handlers. The component is responsible for rendering slides and any chrome
 * (arrows/dots).
 */
export function useEmblaSlider({ visible, autoplayDelay, options = {} }: Options) {
  // Keep the autoplay plugin instance stable across renders — recreating it
  // every render re-registers it with embla.
  const autoplay = React.useRef(
    autoplayDelay == null ? null : Autoplay({ delay: autoplayDelay, stopOnInteraction: false }),
  );

  // Track viewport width when `visible` is a function
  const [width, setWidth] = React.useState<number>(() =>
    typeof window === "undefined" ? 1280 : window.innerWidth,
  );

  React.useEffect(() => {
    if (typeof visible !== "function") return;
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [visible]);

  const visibleCount = resolveVisible(visible, width);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: false,
      ...options,
    },
    autoplay.current ? [autoplay.current] : [],
  );

  // Re-initialise whenever visibleCount changes so the slide-size CSS
  // variable updates and embla re-aligns correctly.
  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, visibleCount]);

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

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = React.useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  // Spread on the viewport so `.embla__slide { flex: 0 0 var(--slide-size, 100%) }`
  // resolves to the right width.
  const slideStyle = {
    "--slide-size": `${100 / visibleCount}%`,
  } as React.CSSProperties;

  return { emblaRef, selected, scrollSnaps, scrollPrev, scrollNext, scrollTo, slideStyle };
}