"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Toggle menu
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-xl transition-colors hover:text-primary"
        >
          <span className="text-primary">Dev</span>Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button size="sm" asChild>
              <Link href="/contact">Hire Me</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md">
          <ul className="flex flex-col p-4">
            {navItems.map((item) => (
              <li key={item.path} className="py-2">
                <Link
                  href={item.path}
                  className={`block text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Button size="sm" className="w-full" asChild>
                <Link href="/contact">Hire Me</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}