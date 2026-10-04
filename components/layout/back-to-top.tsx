"use client";

import * as React from "react";

/**
 * Floating "back to top" button styled like a computer mouse with a
 * scroll wheel. The button itself is a vertical capsule (mouse body) with
 * an inline SVG that draws the wheel + an animated "scroll up" indicator.
 *
 * - Hidden until the user has scrolled more than ~400px down.
 * - Smooth-scrolls to the top on click.
 * - Brand-tinted glow; lifts upward on hover for tactile feedback.
 * - Sized appropriately for mobile + desktop.
 */
export function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-5 right-5 z-50 flex h-14 w-9 items-center justify-center rounded-full border-2 border-white/40 bg-gradient-to-b from-primary to-secondary text-primary-foreground shadow-[0_10px_25px_-5px_rgba(2,143,217,0.55),0_4px_10px_-3px_rgba(1,30,128,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-5px_rgba(2,143,217,0.7),0_6px_14px_-3px_rgba(1,30,128,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:bottom-7 sm:right-7 sm:h-16 sm:w-10 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      {/* Soft pulsing ring */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40 opacity-40" />

      {/* Mouse outline + scroll wheel + scroll indicator */}
      <svg
        viewBox="0 0 24 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        {/* Mouse body (vertical capsule) */}
        <rect
          x="2"
          y="1"
          width="20"
          height="38"
          rx="10"
          ry="10"
          className="fill-white/15 stroke-white/80 transition-colors group-hover:stroke-white"
          strokeWidth="1.4"
        />

        {/* Scroll wheel slot */}
        <rect
          x="9"
          y="5"
          width="6"
          height="11"
          rx="3"
          ry="3"
          className="fill-white/90"
        />

        {/* Scroll wheel — small highlight that animates upward */}
        <rect
          x="10.5"
          y="6.5"
          width="3"
          height="3"
          rx="1.5"
          ry="1.5"
          className="fill-primary transition-transform duration-700 ease-in-out group-hover:-translate-y-1"
          style={{ transformOrigin: "center" }}
        >
          <animate
            attributeName="y"
            values="6.5;9;6.5"
            dur="1.4s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Up-arrow indicator above the wheel */}
        <path
          d="M12 20 L8 24 M12 20 L16 24 M12 20 L12 27"
          className="stroke-white/90 transition-all duration-300 group-hover:stroke-white group-hover:-translate-y-0.5"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Subtle base line */}
        <line
          x1="8"
          y1="33"
          x2="16"
          y2="33"
          className="stroke-white/40"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}