import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import SectionTitle from "../shared/SectionTitle";

export function ProductsGrid() {
  return (
    <section className="container">
      <div className="">
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Products grid - takes 3 cols */}
          <div className=" bg-slate-200 p-8 lg:col-span-3">
            <div className="mb-5 flex items-center justify-center">
              <SectionTitle title="Our Products" subtitle="What we Deliver" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <Link
                    key={product.title}
                    href={product.href}
                    className="group flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:border-primary hover:shadow-lg"
                  >
                    <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-secondary via-primary to-slate-900">
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary blur-2xl" />
                      </div>
                      <Icon
                        className="relative z-10 h-16 w-16 text-white transition-transform group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-4">
                      <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                        {product.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-primary transition-colors group-hover:text-secondary">
                        Read more
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-5">
              <Button asChild variant="default">
                <Link href="/products">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Promo sidebar */}
          <aside className="relative hidden overflow-hidden rounded-lg bg-gradient-to-br from-primary via-primary to-secondary p-8 text-white lg:block">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Power Solutions
                </span>
                <h3 className="mt-4 text-2xl font-extrabold leading-tight">
                  End-to-End Electrical Infrastructure
                </h3>
                <p className="mt-3 text-sm text-slate-100">
                  From concept to commissioning — we deliver complete turnkey
                  power projects for industrial and commercial clients.
                </p>
              </div>
              <Button
                asChild
                variant="default"
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
