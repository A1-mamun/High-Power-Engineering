import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import {
  company,
  contactEmails,
  socialLinks,
  recentProjects,
} from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-secondary text-slate-200">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-md bg-white shadow-md">
                <Image
                  src="/logo.png"
                  alt={`${company.name} logo`}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-extrabold tracking-tight text-white">
                  HIGH POWER
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Electricity
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {company.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Updates */}
          <div>
            <h4 className="mb-4 text-base font-bold uppercase tracking-wider text-white">
              Get Our Updates
            </h4>
            <p className="mb-4 text-sm text-slate-300">
              Subscribe to our newsletter to receive the latest news and
              project updates.
            </p>
            <form className="flex flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Your email address"
                className="border-white/20 bg-white/10 text-white placeholder:text-slate-300 focus-visible:ring-primary"
              />
              <Button variant="default" type="submit" className="shrink-0">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Recent Projects */}
          <div>
            <h4 className="mb-4 text-base font-bold uppercase tracking-wider text-white">
              Recent Projects
            </h4>
            <ul className="flex flex-col gap-3">
              {recentProjects.slice(0, 2).map((p) => (
                <li key={p.title}>
                  <Link
                    href="/gallery"
                    className="group flex gap-3 rounded-md p-2 transition-colors hover:bg-white/10"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-primary to-secondary text-white">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {p.category}
                      </span>
                      <span className="text-sm font-medium text-white transition-colors group-hover:text-primary">
                        {p.title}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="mb-4 text-base font-bold uppercase tracking-wider text-white">
              Our Location
            </h4>
            <div className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{company.address}</span>
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm text-slate-300">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="hover:text-primary transition-colors"
              >
                {company.phone}
              </a>
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm text-slate-300">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a
                href={`mailto:${company.email}`}
                className="hover:text-primary transition-colors"
              >
                {company.email}
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Send a message + Call us strip */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">
              Send a Message
            </h4>
            <div className="flex flex-col gap-1 text-sm">
              {contactEmails.map((e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  {e}
                </a>
              ))}
            </div>
          </div>
          <div className="md:text-right">
            <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">
              Call Us
            </h4>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="text-2xl font-extrabold text-primary hover:text-primary/80 transition-colors"
            >
              {company.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>
            Crafted with precision for industrial excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
