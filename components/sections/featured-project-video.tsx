"use client";

import * as React from "react";
import { Play } from "lucide-react";

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
  thumbnail?: string;
};

export function FeaturedProjectVideo({
  videoId,
  category,
  title,
  thumbnail,
}: Props) {
  const [open, setOpen] = React.useState(false);

  // Build the YouTube embed URL with autoplay so it starts immediately when opened.
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="group relative overflow-hidden rounded-lg border bg-slate-900 shadow-md">
        <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-secondary via-primary to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-primary blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center gap-4 text-center">
            <DialogTrigger asChild>
              <button
                type="button"
                aria-label={`Play featured project video: ${title}`}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform hover:scale-110"
              >
                <Play className="ml-1 h-9 w-9 fill-current" />
              </button>
            </DialogTrigger>
            <div className="space-y-2 px-4">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
                {category}
              </span>
              <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <DialogContent
        className="max-w-5xl border-0 bg-black p-0 sm:rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
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
          {!open && thumbnail && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbnail}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
