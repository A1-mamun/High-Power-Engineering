import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <section className="bg-slate-50 py-16 ">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle title="Featured Project" subtitle="Recent work" />
          <Button asChild variant="outline">
            <Link href="/gallery">
              All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
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
