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

  // Track viewport width when `visible` is a function. We start with a stable
  // SSR-safe default so the server-rendered HTML matches the first client
  // render — preventing hydration mismatches. `useLayoutEffect` then snaps to
  // the real width *before* the browser paints, so embla mounts on the right
  // breakpoint and we never flash a desktop layout on mobile.
  const isResponsive = typeof visible === "function";
  const [width, setWidth] = React.useState<number>(1280);

  React.useLayoutEffect(() => {
    if (!isResponsive) return;
    const apply = () => setWidth(window.innerWidth);
    apply();
    window.addEventListener("resize", apply, { passive: true });
    return () => window.removeEventListener("resize", apply);
  }, [isResponsive]);

  const visibleCount = isResponsive ? resolveVisible(visible, width) : visible;

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
  // variable updates and embla re-aligns correctly. Use a layout effect so
  // the re-init happens before paint, eliminating the "wrong count flash".
  React.useLayoutEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
    // After a re-init, jump back to the first slide so the carousel always
    // opens from a consistent position — particularly important when the
    // visible count changes between breakpoints.
    emblaApi.scrollTo(0, true);
  }, [emblaApi, visibleCount]);

  const [selected, setSelected] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
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
