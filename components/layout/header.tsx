import Link from "next/link";
import Image from "next/image";
import type { IconType } from "react-icons";

import { Phone, Mail, MapPin } from "@/components/icons";
import { company } from "@/lib/data";
import { MobileNav } from "./mobile-nav";
import { TopBar } from "./top-bar";

export function Header() {
  return (
    <header className="">
      <TopBar />

      {/* Logo / contact strip */}
      <div className="border-b bg-white">
        <div className="container flex h-16 md:h-20 lg:h-24 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-md">
              <Image
                src="/logo.png"
                alt={`${company.name} logo`}
                fill
                priority
                sizes="56px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold tracking-tight text-primary md:text-xl">
                HIGH POWER
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary md:text-sm">
                Engineering
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <ContactItem
              icon={Phone}
              label="Call Us"
              value={company.phone}
              href={`tel:${company.phone.replace(/\s/g, "")}`}
            />
            <ContactItem
              icon={Mail}
              label="Email Us"
              value={company.email}
              href={`mailto:${company.email}`}
            />
            <ContactItem
              icon={MapPin}
              label="Our Address"
              value={company.shortAddress}
            />
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="text-sm font-semibold text-foreground">{value}</span>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="transition-opacity hover:opacity-80">
      {inner}
    </a>
  ) : (
    inner
  );
}
