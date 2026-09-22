"use client";

import { Facebook, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

export function TopBar() {
  return (
    <div className="relative h-[48px] overflow-hidden bg-secondary">
      {/* Left white angled section */}

      <div
        className="absolute inset-y-0 left-0 w-[35%] bg-white"
        style={{
          clipPath: "polygon(0 0, 95% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="h-1 bg-secondary"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full items-center justify-between">
        {/* Welcome text */}
        <div className="ml-[34%]">
          <p className="text-base tracking-tight text-white md:text-lg">
            Welcome to High Power Engineering Limited
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-6 pr-4 text-white">
          <a
            href="#"
            aria-label="Facebook"
            className="transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-80"
          >
            <Facebook className="h-6 w-6 fill-current" />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-80"
          >
            <Twitter className="h-6 w-6 fill-current" />
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-80"
          >
            <Youtube className="h-6 w-6 fill-current" />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-80"
          >
            <Linkedin className="h-6 w-6 fill-current" />
          </a>

          <a
            href="#"
            aria-label="Pinterest"
            className="transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-80"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
