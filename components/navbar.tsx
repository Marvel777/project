"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

export function Navbar() {


  // Toggle menu

  return (
    <header
      className="fixed  bottom-28 left-full pr-20    md:bottom-3 md:left-1/2   transform -translate-x-1/2 z-50 px-0 transition-all duration-300"

    >

      <div >
        <FloatingDock
          mobileClassName="translate-y-20"
          items={ links }
        />
      </div>
      {/* Mobile Navigation Toggle */ }


      {/* Mobile Menu */ }
      {/* { isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md">
          <ul className="flex flex-col p-4">
            { links.map((item) => (
              <li key={ item.title } className="py-2">
                <Link
                  href={ item.href }
                  className={ `block text-sm font-medium transition-colors hover:text-primary ${pathname === item.href ? "text-primary" : "text-muted-foreground"
                    }` }
                >
                  { item.icon } { item.title }
                </Link>
              </li>
            )) }
            <li className="pt-4">
              <Button size="sm" className="w-full" asChild>
                <Link href="/contact">Hire Me</Link>
              </Button>
            </li>
          </ul>
        </div>
      ) } */}
    </header>
  );
}