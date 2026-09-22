import Link from "next/link";
import { ArrowRight, Phone } from "@/components/icons";

import { company } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary py-16 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="container relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Ready to Power Your Next Project?
          </h2>
          <p className="max-w-2xl text-lg text-slate-100">
            Talk to our engineering team. We&apos;ll help you design the right
            solution and deliver it on time, on budget.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="default" size="lg" className="bg-secondary text-white hover:bg-secondary/90">
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                <Phone className="h-4 w-4" />
                {company.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}