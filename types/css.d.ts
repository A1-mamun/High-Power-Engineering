// Allow any CSS custom property (`--foo`) directly in style objects without
// needing to cast through `React.CSSProperties` or `as unknown as ...`.
import "react";

declare module "react" {
  interface CSSProperties {
    [index: `--${string}`]: string | number | undefined;
  }
}

export {};
