import type { Metadata } from "next";

import { HeroSlider } from "@/components/sections/hero-slider";
import { ServiceTiles } from "@/components/sections/service-tiles";
import { ProductsGrid } from "@/components/sections/products-grid";
import { ServicesCards } from "@/components/sections/services-cards";
import { RecentProject } from "@/components/sections/recent-project";
import { ClientLogos } from "@/components/sections/client-logos";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Industrial Power Solutions & Electrical Infrastructure",
  description:
    "Powering South Asia's industries with reliable generators, transformers, substations, panel boards, and turnkey power plants. Trusted by leading enterprises across Bangladesh.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServiceTiles />
      <ProductsGrid />
      <ServicesCards />
      <RecentProject />
      <ClientLogos />
      <CtaBanner />
    </>
  );
}
