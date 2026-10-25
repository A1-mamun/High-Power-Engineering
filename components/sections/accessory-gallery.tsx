"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "@/components/icons";

import type { AccessoryGalleryImage } from "@/lib/data";

export function AccessoryGallery({
  images,
}: {
  images: AccessoryGalleryImage[];
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const open = React.useCallback((i: number) => setOpenIndex(i), []);
  const close = React.useCallback(() => setOpenIndex(null), []);

  const step = React.useCallback(
    (delta: number) => {
      setOpenIndex((current) => {
        if (current == null) return current;
        return (current + delta + images.length) % images.length;
      });
    },
    [images.length],
  );

  // Lock body scroll + wire arrow keys while the lightbox is open.
  React.useEffect(() => {
    if (openIndex == null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, step]);

  const active = openIndex != null ? images[openIndex] : null;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((item, index) => (
          <figure
            key={item.title}
            className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:border-primary hover:shadow-lg"
            onClick={() => open(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open(index);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Open image: ${item.title}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <figcaption className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {item.caption}
              </p>
              <div className="mt-auto flex items-center gap-1 pt-2 text-xs font-semibold text-primary">
                View image
                <ChevronRight className="h-3 w-3" />
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 px-4 py-4 sm:px-6">
            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold text-white sm:text-base">
                {active.title}
              </h3>
              <p className="mt-1 text-xs text-white/60">
                {openIndex! + 1} / {images.length}
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Image */}
          <div className="relative flex flex-1 items-center justify-center px-4 sm:px-16">
            <div className="relative h-full w-full">
              <Image
                key={active.image}
                src={active.image}
                alt={active.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:left-4"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-4"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Caption */}
          <div
            className="px-4 pb-6 pt-4 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-white/70 sm:text-sm">
              {active.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}