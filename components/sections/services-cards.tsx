import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import SectionTitle from "../shared/SectionTitle";

export function ServicesCards() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle title="Our Services" subtitle="What we do" />
          <Button asChild variant="outline">
            <Link href="/services">
              All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col items-center rounded-lg border bg-slate-50 p-8 text-center transition-all hover:border-primary hover:bg-white hover:shadow-lg"
              >
                <div className="relative mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary bg-white text-primary shadow-md transition-transform group-hover:scale-105">
                    <Icon className="h-10 w-10" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-secondary"
                >
                  Read more
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
