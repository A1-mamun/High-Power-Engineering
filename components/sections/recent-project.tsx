import Link from "next/link";
import { Play, ArrowRight, Zap, ChevronLeft, ChevronRight } from "lucide-react";

import { recentProjects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FeaturedProjectsCarousel } from "@/components/sections/featured-projects-carousel";

export function RecentProject() {
  const featured = recentProjects[0];
  // Other projects cycle through the right-side carousel.
  const otherProjects = recentProjects.slice(1);

  return (
    <section className="bg-slate-50 py-16 ">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Recent work
            </span>
            <h2 className="section-title mt-2">Featured Project</h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/gallery">
              All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Featured video placeholder */}
          <div className="lg:col-span-2">
            <div className="group relative overflow-hidden rounded-lg border bg-slate-900 shadow-md">
              <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-secondary via-primary to-slate-900">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-primary blur-3xl" />
                </div>
                <div className="relative flex flex-col items-center gap-4 text-center">
                  <button
                    type="button"
                    aria-label="Play video"
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform hover:scale-110"
                  >
                    <Play className="ml-1 h-9 w-9 fill-current" />
                  </button>
                  <div className="space-y-2 px-4">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
                      {featured.category}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                      {featured.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured projects carousel — one image at a time */}
          <div className="h-full">
            <FeaturedProjectsCarousel projects={otherProjects} />
          </div>
        </div>
      </div>
    </section>
  );
}
