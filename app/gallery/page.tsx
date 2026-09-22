import type { Metadata } from "next";
import Image from "next/image";

import { recentProjects } from "@/lib/data";
import { FeaturedProjectVideo } from "@/components/sections/featured-project-video";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Explore our portfolio of completed power generation, substation, and electrical infrastructure projects across South Asia.",
  alternates: {
    canonical: "/gallery",
  },
};

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
              className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-[0_25px_60px_-15px_rgba(2,143,217,0.45)]"
            >
              {idx === 0 ? (
                <FeaturedProjectVideo
                  videoId="VREiOSKyLnA"
                  category={p.category}
                  title={p.title}
                />
              ) : (
                <>
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {p.category}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-secondary">
                      {p.title}
                    </h3>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}