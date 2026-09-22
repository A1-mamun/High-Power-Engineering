import Link from "next/link";
import { ArrowRight } from "@/components/icons";

import { recentProjects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FeaturedProjectsCarousel } from "@/components/sections/featured-projects-carousel";
import { FeaturedProjectVideo } from "@/components/sections/featured-project-video";
import SectionTitle from "../shared/SectionTitle";

export function RecentProject() {
  const featured = recentProjects[0];
  // Other projects cycle through the right-side carousel.
  const otherProjects = recentProjects.slice(1);

  return (
    <section className="bg-slate-50 py-12 sm:py-14 md:py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-10 md:flex-row md:items-end">
          <SectionTitle title="Featured Project" subtitle="Recent work" />
          <Button
            asChild
            variant="outline"
            size="sm"
            className="md:size-default"
          >
            <Link href="/gallery">
              All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="space-y-5 md:space-y-10 lg:space-y-0 lg:gap-5 lg:grid lg:grid-cols-3">
          {/* Featured video */}
          <div className="lg:col-span-2">
            <FeaturedProjectVideo
              videoId="VREiOSKyLnA"
              category={featured.category}
              title={featured.title}
            />
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
