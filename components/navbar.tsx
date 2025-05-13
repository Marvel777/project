"use client";

import { useState, useEffect } from "react";
import { LayoutDashboardIcon, MessageCircleCodeIcon, Moon, Sun, X } from "lucide-react";
import { IconHome, IconTerminal2 } from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";
import { useTheme } from "next-themes";
import { BackgroundGradient } from "./ui/background-gradient";



export function Navbar() {

  useEffect(() => setMounted(true), [])

  if (!mounted) return null // avoid hydration mismatch


  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Projects",
      icon: (
        <LayoutDashboardIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "projects",
    },
    {
      title: "Contact",
      icon: (
        <MessageCircleCodeIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
  ];

  return (

    <header
      className="fixed bottom-28 left-full pr-20 sm:pr-0 md:bottom-3 md:left-1/2 transform -translate-x-1/2 z-50 px-0 transition-all duration-300"
    >
      {/* Desktop version with BackgroundGradient */ }
      <div className="hidden md:block">
        <BackgroundGradient className="rounded-full">
          <FloatingDock mobileClassName="translate-y-20" items={ links } />
        </BackgroundGradient>
      </div>

      {/* Mobile version without BackgroundGradient */ }
      <div className="block md:hidden">
        <FloatingDock mobileClassName="translate-y-20" items={ links } />
      </div>
    </header>


  );
}