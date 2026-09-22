import { Play, Zap } from "lucide-react";

import { recentProjects } from "@/lib/data";

export default function GalleryPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Project Gallery</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Showcasing our recent work across power generation and electrical
            infrastructure.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentProjects.map((p, idx) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-secondary via-primary to-slate-900">
                <Zap className="h-16 w-16 text-white/50" strokeWidth={1.5} />
                {idx === 0 && (
                  <button
                    type="button"
                    aria-label="Play video"
                    className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110"
                  >
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  </button>
                )}
              </div>
              <div className="p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {p.category}
                </span>
                <h3 className="mt-1 text-base font-bold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}