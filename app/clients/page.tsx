import { ClientLogos } from "@/components/sections/client-logos";
import { ClientReviews } from "@/components/sections/client-reviews";

export default function ClientsPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white md:py-20">
        <div className="container text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            Our Partners
          </span>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Our Clients
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Trusted by leading companies across multiple industries. From
            power plants to hospitals, our clients rely on us for reliable,
            world-class power solutions.
          </p>
        </div>
      </section>

      <ClientLogos />

      <ClientReviews />
    </div>
  );
}