"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";

type Options = {
  /** Number of slides visible at once. The carousel advances by one slide at a
   * time, producing a sliding-window effect (e.g. `VISIBLE = 3`: 1-2-3 → 2-3-4
   * → 3-4-5 → 4-5-1 → ...). */
  visible: number;
  /** Autoplay delay in ms. Pass `null` to disable autoplay. */
  autoplayDelay: number | null;
  /** Additional embla options merged with the sliding-window defaults. */
  options?: EmblaOptionsType;
};

/**
 * Wires up an Embla carousel configured as a sliding-window stepper:
 * `visible` slides shown at a time, advancing one slide per step, with `loop`
 * on, alignment to the start, and a per-render-stable autoplay plugin.
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
  const slideStyle: React.CSSProperties = { "--slide-size": `${100 / visible}%` };

  return { emblaRef, selected, scrollSnaps, scrollPrev, scrollNext, scrollTo, slideStyle };
}
