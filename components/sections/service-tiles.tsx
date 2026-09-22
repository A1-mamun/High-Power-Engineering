import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { serviceTiles } from "@/lib/data";

export function ServiceTiles() {
  return (
    <section className="border-b bg-white">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {serviceTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <Link
                key={tile.title}
                href={tile.href}
                className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-md border bg-gradient-to-br from-white to-slate-50 p-6 text-center shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl"
              >
                {/* Hover gradient backdrop */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon circle */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:rotate-6 group-hover:bg-white group-hover:text-primary group-hover:shadow-lg">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>

                {/* Title + subtitle */}
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold uppercase tracking-wider text-secondary transition-colors duration-300 group-hover:text-white">
                    {tile.title}
                  </span>
                  <span className="mt-1 flex items-center justify-center gap-1 text-[11px] font-medium text-muted-foreground transition-colors duration-300 group-hover:text-white/90">
                    Learn more
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}