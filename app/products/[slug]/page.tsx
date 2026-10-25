import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@/components/icons";

import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { AccessoryGallery } from "@/components/sections/accessory-gallery";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: `${product.title} | High Power Engineering`,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const Icon = product.icon;
  const hasLiftTypes =
    !!product.liftTypes && product.liftTypes.length > 0;
  const accessoryGallery = product.accessoryGallery;

  return (
    <div className="bg-slate-50">
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary py-16 text-white">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="container relative">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Products
          </Link>
          <div className="mt-6 flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
              <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
            </span>
            <div>
              <h1 className="text-3xl font-extrabold md:text-5xl">
                {product.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base text-slate-100 md:text-lg">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product overview */}
      <section className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-gradient-to-br from-secondary via-primary to-slate-900 shadow-lg">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              Overview
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-foreground md:text-3xl">
              About {product.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {product.longDescription ?? product.description}
            </p>

            <ul className="mt-6 space-y-2">
              {[
                "Industry-grade quality and certified components",
                "Professional installation and commissioning",
                "Reliable after-sales service and AMC support",
                "Custom solutions tailored to your project",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lift types (only for products that have them) */}
      {hasLiftTypes && (
        <section className="container pb-16">
          <div className="mb-8 flex items-center justify-center">
            <div className="text-center">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                Categories
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-foreground md:text-3xl">
                {product.title} Types
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
                Explore our full range of {product.title.toLowerCase()} solutions
                — each engineered for a specific application and environment.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.liftTypes!.map((lift) => (
              <div
                key={lift.label}
                className="group flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300">
                  {/* Placeholder image using Icon-backed gradient */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-secondary via-primary to-slate-900 p-4 text-white">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white blur-2xl" />
                    </div>
                    <Icon
                      className="relative z-10 h-12 w-12 text-white/80"
                      strokeWidth={1.5}
                    />
                    <span className="relative z-10 mt-2 text-[10px] font-bold uppercase tracking-widest text-white/70">
                      Placeholder
                    </span>
                  </div>
                  <Image
                    src={lift.image}
                    alt={lift.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                    {lift.label}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {lift.description}
                  </p>
                  <div className="mt-auto flex items-center gap-1 pt-2 text-xs font-semibold text-primary transition-colors group-hover:text-secondary">
                    Learn more
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Accessories gallery (only for products that have one) */}
      {accessoryGallery && accessoryGallery.images.length > 0 && (
        <section className="container pb-16">
          <div className="mb-8 flex items-center justify-center">
            <div className="text-center">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                {accessoryGallery.eyebrow}
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-foreground md:text-3xl">
                {accessoryGallery.title}
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
                {accessoryGallery.description}
              </p>
            </div>
          </div>

          <AccessoryGallery images={accessoryGallery.images} />
        </section>
      )}

      {/* CTA */}
      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary p-8 text-white md:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-extrabold md:text-3xl">
                Need help choosing the right {product.title.toLowerCase()}?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-slate-100 md:text-base">
                Talk to our engineering team for a tailored recommendation and
                a free quotation.
              </p>
            </div>
            <Button
              asChild
              className="bg-white text-secondary hover:bg-white/90 hover:text-secondary"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
