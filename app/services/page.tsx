import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

import { services, serviceTiles } from "@/lib/data";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive electrical engineering and support services — from supply and installation to lifetime maintenance, AMCs, and corporate service contracts.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Our Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Comprehensive engineering and support services — from supply to
            lifetime maintenance.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="section-title">Service Categories</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <div
                key={tile.title}
                className="flex items-start gap-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{tile.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    End-to-end solutions including design, supply,
                    installation, and maintenance.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="section-title mt-16">Engagement Models</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-lg border bg-white p-8 shadow-sm transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary bg-white text-primary">
                  <Icon className="h-8 w-8" strokeWidth={2} />
                </div>
                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Button asChild variant="link" className="mt-4 px-0">
                  <Link href="/contact">
                    Talk to an expert
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}