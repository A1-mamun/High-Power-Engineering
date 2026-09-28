"use client";

import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
} from "@/components/icons";

export function TopBar() {
  return (
    <div className="relative h-[32px] sm:h-[36px] md:h-[40px] lg:h-[48px] overflow-hidden bg-secondary">
      {/* Left white angled section */}

      <div
        className="hidden md:block absolute inset-y-0 left-0 md:w-[20%] lg:w-[35%] bg-white"
        style={{
          clipPath: "polygon(0 0, 95% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="h-1 bg-secondary"></div>
      </div>

      <div
        className="md:hidden absolute inset-y-0 left-0 w-[10%] bg-white"
        style={{
          clipPath: "polygon(0 0, 75% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="h-[2px] bg-secondary"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full items-center justify-between">
        {/* Welcome text */}
        <div className="ml-[10%] md:ml-[20%] lg:ml-[35%]">
          <p className="text-sm tracking-tight text-white md:text-base lg:text-lg">
            Welcome to High Power Engineering Limited
          </p>
        </div>

        {/* Social icons */}
        <div className="hidden sm:block">
          {" "}
          <div className="flex items-center gap-6 pr-4 text-white">
            <a
              href="https://www.facebook.com/share/1Q8RUeaN2g/"
              target="blank_"
              aria-label="Facebook"
              className="transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              <Facebook className="h-5 md:h-6 w-5 md:w-6 fill-current" />
            </a>

            <a
              href="https://youtube.com/@hpe39?si=0W9bukIho146URpF"
              target="blank_"
              aria-label="YouTube"
              className="transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              <Youtube className="h-5 md:h-6 w-5 md:w-6 fill-current" />
            </a>

            <a
              href="#"
              target="blank_"
              aria-label="Twitter"
              className="transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              <Twitter className="h-5 md:h-6 w-5 md:w-6 fill-current" />
            </a>

            <a
              href="#"
              target="blank_"
              aria-label="LinkedIn"
              className="transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              <Linkedin className="h-5 md:h-6 w-5 md:w-6 fill-current" />
            </a>

            <a
              href="#"
              target="blank_"
              aria-label="Pinterest"
              className="transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              <Instagram className="h-5 md:h-6 w-5 md:w-6 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
