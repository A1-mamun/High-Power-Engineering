"use client";

import * as React from "react";
import { Play } from "@/components/icons";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  videoId: string;
  category: string;
  title: string;
};

export function FeaturedProjectVideo({
  videoId,
  category,
  title,
}: Props) {
  const [open, setOpen] = React.useState(false);

  // Use the proper /embed/ path so the iframe actually plays.
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  // YouTube auto-generated thumbnail (high resolution) for the preview.
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackThumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="group relative overflow-hidden rounded-xl border border-primary/10 bg-slate-900 shadow-[0_25px_60px_-15px_rgba(2,143,217,0.45),0_10px_25px_-10px_rgba(1,30,128,0.6)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_80px_-15px_rgba(2,143,217,0.6),0_15px_35px_-10px_rgba(1,30,128,0.75)]">
        {/* Thumbnail with graceful fallback to lower-res if maxres is missing */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnailUrl}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            if (img.src !== fallbackThumbnailUrl) {
              img.src = fallbackThumbnailUrl;
            }
          }}
        />

        {/* Brand gradient overlay so the white play button + text always read well */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-primary/55 to-secondary/85 mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        {/* Soft brand color glow blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-primary/60 blur-3xl sm:h-56 sm:w-56" />
          <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-secondary/80 blur-3xl sm:h-56 sm:w-56" />
        </div>

        {/* Centered play button + caption */}
        <div className="relative z-10 flex aspect-video items-center justify-center">
          <div className="flex flex-col items-center gap-3 px-4 text-center sm:gap-4">
            <DialogTrigger asChild>
              <button
                type="button"
                aria-label={`Play featured project video: ${title}`}
                className="group/btn relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(2,143,217,0.6)] ring-4 ring-white/15 transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_40px_rgba(2,143,217,0.85)] focus-visible:outline-none focus-visible:ring-white/40 sm:h-20 sm:w-20"
              >
                {/* pulsing ring */}
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40 opacity-60" />
                <Play className="ml-0.5 h-6 w-6 fill-current sm:ml-1 sm:h-9 sm:w-9" />
              </button>
            </DialogTrigger>
            <div className="space-y-1.5 sm:space-y-2">
              <span className="inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur sm:px-3 sm:py-1 sm:text-xs">
                {category}
              </span>
              <h3 className="text-base font-extrabold leading-tight text-white drop-shadow-md sm:text-2xl md:text-3xl">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <DialogContent className="max-w-5xl border-0 bg-black p-0 sm:rounded-lg">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)]">
          {open && (
            <iframe
              key={videoId}
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}