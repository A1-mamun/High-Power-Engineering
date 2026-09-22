"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { navItems, company } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav({
  trigger,
}: {
  trigger?: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  const defaultTrigger = (
    <Button
      variant="ghost"
      size="icon"
      className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground md:hidden"
      aria-label="Open menu"
    >
      <Menu className="h-6 w-6" />
    </Button>
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger ?? defaultTrigger}</SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[340px]">
        <SheetHeader>
          <SheetTitle className="text-left text-primary">
            {company.name}
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="flex flex-col">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4 mt-1 flex flex-col border-l pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3 border-t pt-6">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="text-sm font-semibold text-primary"
          >
            {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="text-sm text-muted-foreground"
          >
            {company.email}
          </a>
          <Button variant="default" asChild>
            <Link href="/contact" onClick={() => setOpen(false)}>
              GET A QUOTE
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}