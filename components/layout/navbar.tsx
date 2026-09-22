// "use client";
// import * as React from "react";
// import Link from "next/link";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// import { Menu } from "lucide-react";
// import { navItems } from "@/lib/data";
// import { Button } from "../ui/button";
// import { MobileNav } from "./mobile-nav";

// const Navbar = () => {
//   const [scrolled, setScrolled] = React.useState(false);

//   React.useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <div className="sticky top-0 z-50 ">
//       {/* Primary nav */}
//       <nav
//         className={`relative h-[62px] overflow-hidden  hidden transition-all duration-300 md:block ${
//           scrolled ? "bg-primary/95 shadow-md backdrop-blur" : "bg-[#138dc5]"
//         }`}
//       >
//         <div className="container relative z-20 w-full flex h-full items-center justify-between">
//           <NavigationMenu className="mx-0 justify-start ">
//             <NavigationMenuList className="space-x-0">
//               {navItems.map((item) =>
//                 item.children ? (
//                   <NavigationMenuItem key={item.label}>
//                     <NavigationMenuTrigger
//                       className={navigationMenuTriggerStyle({
//                         className:
//                           "text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent focus:bg-primary-foreground/10 focus:text-accent data-[active]:bg-primary-foreground/10 data-[state=open]:bg-primary-foreground/10 data-[active]:text-accent data-[state=open]:text-accent",
//                       })}
//                     >
//                       <Link href={item.href}>{item.label}</Link>
//                     </NavigationMenuTrigger>

//                     <NavigationMenuContent>
//                       <ul className="grid w-[480px] gap-1 p-3 md:grid-cols-2">
//                         {item.children.map((child) => (
//                           <li key={child.label}>
//                             <NavigationMenuLink asChild>
//                               <Link
//                                 href={child.href}
//                                 className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
//                               >
//                                 <div className="text-sm font-semibold">
//                                   {child.label}
//                                 </div>
//                               </Link>
//                             </NavigationMenuLink>
//                           </li>
//                         ))}
//                       </ul>
//                     </NavigationMenuContent>
//                   </NavigationMenuItem>
//                 ) : (
//                   <NavigationMenuItem key={item.label}>
//                     <NavigationMenuLink asChild>
//                       <Link
//                         href={item.href}
//                         className={navigationMenuTriggerStyle({
//                           className:
//                             "text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent focus:bg-primary-foreground/10 focus:text-accent",
//                         })}
//                       >
//                         {item.label}
//                       </Link>
//                     </NavigationMenuLink>
//                   </NavigationMenuItem>
//                 ),
//               )}
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//         <div
//           className="absolute inset-y-0 right-0 w-[35%] bg-[#003F5C]"
//           //   style={{
//           //     clipPath: "polygon(0 0,100% 100%, 95% 0, 0 100%)",
//           //   }}

//           style={{
//             clipPath: "polygon(0 100%, 5% 0, 100% 0, 100% 100%)",
//           }}
//         ></div>
//       </nav>

//       {/* Mobile menu trigger bar */}
//       <div className="flex h-12 items-center justify-between border-b bg-primary px-4 text-primary-foreground md:hidden">
//         <span className="text-sm font-semibold uppercase tracking-wider">
//           Menu
//         </span>
//         <MobileNav
//           trigger={
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent"
//               aria-label="Open menu"
//             >
//               <Menu className="h-6 w-6" />
//             </Button>
//           }
//         />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { navItems } from "@/lib/data";
import { Button } from "../ui/button";
import { MobileNav } from "./mobile-nav";

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
        className={`relative hidden h-[62px] overflow-visible transition-all duration-300 md:block ${
          scrolled ? "bg-primary/95 shadow-md backdrop-blur" : "bg-primary"
        }`}
      >
        {/* =========================
            Decorative Right Shape
        ========================== */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[35%] bg-secondary"
          style={{
            clipPath: "polygon(0 100%, 5% 0, 100% 0, 100% 100%)",
          }}
        />

        {/* =========================
            Navigation Content
        ========================== */}
        <div className="container relative z-20 flex h-full w-full items-center">
          <NavigationMenu className="mx-0 justify-start">
            <NavigationMenuList className="space-x-0">
              {navItems.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger
                      className={navigationMenuTriggerStyle({
                        className:
                          "text-primary-foreground " +
                          "hover:bg-primary-foreground/10 " +
                          "hover:text-white " +
                          "focus:bg-primary-foreground/10 " +
                          "focus:text-white " +
                          "data-[active]:bg-primary-foreground/10 " +
                          "data-[state=open]:bg-primary-foreground/10 " +
                          "data-[active]:text-white " +
                          "data-[state=open]:text-white",
                      })}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="z-[100]">
                      <ul className="grid w-[480px] gap-1 p-3 md:grid-cols-2">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                              >
                                <div className="text-sm font-semibold">
                                  {child.label}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={navigationMenuTriggerStyle({
                          className:
                            "text-primary-foreground " +
                            "hover:bg-primary-foreground/10 " +
                            "hover:text-white " +
                            "focus:bg-primary-foreground/10 " +
                            "focus:text-white",
                        })}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* =========================
          Mobile Navigation
      ========================== */}
      <div className="flex h-12 items-center justify-between border-b bg-primary px-4 text-primary-foreground md:hidden">
        <span className="text-sm font-semibold uppercase tracking-wider">
          Menu
        </span>

        <MobileNav
          trigger={
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-white"
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
