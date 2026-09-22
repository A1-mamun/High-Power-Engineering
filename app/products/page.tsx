import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";

import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Industrial-grade electrical equipment: diesel & gas generators, power transformers, panel boards, substations, synchronizing panels, and full electrical accessory lines.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Our Products</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Industrial-grade electrical equipment built for reliability and
            performance.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="group flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-secondary via-primary to-slate-900">
                  <Icon className="h-20 w-20 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">
                        Request Information
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}