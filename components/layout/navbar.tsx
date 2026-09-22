"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  ChevronRight,
  Zap,
  Factory,
  Building2,
  Cog,
  Wind,
  Sofa,
  PanelsTopLeft,
  Power,
  Settings2,
  Plug,
} from "@/components/icons";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { navItems, type NavItem } from "@/lib/data";
import { Button } from "../ui/button";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import type { IconType as LucideIcon } from "@/components/icons";

// Map nav-item children to icons for richer dropdown cards
const childIconMap: Record<string, LucideIcon> = {
  "Diesel Generators": Cog,
  "Gas Generators": Zap,
  "Power Transformers": Power,
  "Panel Boards": PanelsTopLeft,
  "Substation Equipment": Building2,
  "Power Plants": Factory,
  "Synchronizing Panels": Settings2,
  "Electrical Equipment": Plug,
  "Air Conditioner": Wind,
  "Interior Design": Sofa,
};

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* =========================
          Desktop Navigation
      ========================== */}
      <nav
        className={cn(
          "relative hidden overflow-visible bg-gradient-to-r from-primary via-primary to-secondary transition-shadow duration-300 md:block",
          scrolled && "shadow-[0_8px_30px_rgba(1,30,128,0.35)]",
        )}
      >
        {/* Top hairline accent */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Subtle shimmer overlay */}
        {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.08),transparent_60%)]" /> */}

        {/* Decorative right wedge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[32%] bg-secondary"
          style={{
            clipPath: "polygon(0 100%, 8% 0, 100% 0, 100% 100%)",
          }}
        />
        {/* Glow strip on the wedge edge */}
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[32%] z-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent"
        /> */}

        {/* =========================
            Navigation Content
        ========================== */}
        <div className="container relative z-20 flex md:h-[48px] lg:h-[56px] xl:h-[68px] w-full items-center">
          <NavigationMenu className="mx-0 justify-start">
            <NavigationMenuList className="space-x-0 xl:space-x-1">
              {navItems.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger
                      className={navigationMenuTriggerStyle({
                        className:
                          "group/nav relative h-12 bg-transparent px-4 text-xs xl:tex-sm font-bold uppercase tracking-wider text-white shadow-none transition-all duration-300 hover:bg-white/10 focus:bg-white/10 data-[active]:bg-white/15 data-[state=open]:bg-white/15",
                      })}
                    >
                      <span className="relative">{item.label}</span>
                      {/* underline indicator */}
                      <span className="pointer-events-none absolute bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-white transition-all duration-300 group-data-[state=open]/nav:w-3/4 group-hover/nav:w-3/4" />
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="z-[100]">
                      <DropdownPanel item={item} />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={navigationMenuTriggerStyle({
                          className:
                            "group/nav relative h-12 bg-transparent px-4 text-sm font-bold uppercase tracking-wider text-white shadow-none transition-all duration-300 hover:bg-white/10 focus:bg-white/10",
                        })}
                      >
                        <span className="relative">{item.label}</span>
                        {/* underline indicator */}
                        <span className="pointer-events-none absolute bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-white transition-all duration-300 group-hover/nav:w-3/4" />
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right-side CTA inside the secondary wedge */}
          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              Need help?
            </span>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-white text-secondary shadow-md hover:bg-white/90 hover:text-secondary"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* =========================
          Mobile Navigation
      ========================== */}
      <div className="flex h-12 items-center justify-between border-b bg-gradient-to-r from-primary to-secondary px-4 text-primary-foreground md:hidden">
        <span className="text-sm font-semibold uppercase tracking-wider">
          Menu
        </span>

        <MobileNav
          trigger={
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-white/10 hover:text-white"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default Navbar;

/* -------------------------------------------------------------------------- */
/*  Mega dropdown panel                                                       */
/* -------------------------------------------------------------------------- */

function DropdownPanel({ item }: { item: NavItem }) {
  return (
    <div className="w-[520px] overflow-hidden rounded-xl border border-primary/20 bg-white shadow-[0_25px_60px_-15px_rgba(2,143,217,0.45),0_10px_25px_-10px_rgba(1,30,128,0.45)]">
      {/* gradient header strip */}
      <div className="bg-gradient-to-br from-primary to-secondary px-5 py-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
          Browse
        </p>
        <h3 className="mt-0.5 text-base font-extrabold text-white">
          {item.label}
        </h3>
      </div>

      {/* Cards grid */}
      <ul className="grid grid-cols-2 gap-1 p-3">
        {item.children?.map((child) => {
          const Icon = childIconMap[child.label] ?? Zap;
          return (
            <li key={child.label}>
              <NavigationMenuLink asChild>
                <Link
                  href={child.href}
                  className="group/card flex items-start gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 hover:shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-primary/15 to-secondary/15 text-primary transition-all duration-300 group-hover/card:scale-110 group-hover/card:from-primary group-hover/card:to-secondary group-hover/card:text-white group-hover/card:shadow-md">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="flex flex-1 flex-col leading-tight">
                    <span className="text-sm font-bold text-secondary transition-colors duration-200 group-hover/card:text-primary">
                      {child.label}
                    </span>
                    <span className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                      Explore {child.label.toLowerCase()}
                    </span>
                  </span>
                  <ChevronRight className="mt-2 h-3.5 w-3.5 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-200 group-hover/card:translate-x-0 group-hover/card:opacity-100 group-hover/card:text-primary" />
                </Link>
              </NavigationMenuLink>
            </li>
          );
        })}
      </ul>

      {/* Footer link */}
      <div className="border-t bg-slate-50 px-5 py-3">
        <Link
          href={item.href}
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:text-secondary"
        >
          View all {item.label}
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
