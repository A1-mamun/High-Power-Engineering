import { HeroSlider } from "@/components/sections/hero-slider";
import { ServiceTiles } from "@/components/sections/service-tiles";
import { ProductsGrid } from "@/components/sections/products-grid";
import { ServicesCards } from "@/components/sections/services-cards";
import { RecentProject } from "@/components/sections/recent-project";
import { ClientLogos } from "@/components/sections/client-logos";
import { CtaBanner } from "@/components/sections/cta-banner";

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