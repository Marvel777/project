"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/themes";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Toggle between themes (light/dark)
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full " onClick={ toggleTheme }>
          {/* Sun Icon - Show only in light mode */ }
          { resolvedTheme === "light" && (
            <motion.div
              className="h-[1.55rem] w-[1.55rem] "
              initial={ { rotate: 0, scale: 1 } }
              animate={ {
                rotate: [0, 180, 180], // Sun rotates from 0 to 90 and back to 0
                scale: [1, 1, 1], // Slight scale-up effect for the sun when toggling
              } }
              transition={ {
                duration: 0.5,
                ease: "easeInOut",
                repeat: Infinity, // This makes the animation repeat indefinitely
                repeatDelay: 3.5,
              } }
            >
              <Sun className="h-full w-full" />
            </motion.div>
          ) }

          {/* Moon Icon - Show only in dark mode */ }
          { resolvedTheme === "dark" && (
            <motion.div
              className=" h-[1.55rem] w-[1.55rem] "
              initial={ { rotate: 90, scale: 0 } }
              animate={ {
                rotate: [0, 360], // Moon rotates from 90 to 0
                scale: [0, 1.5, 1], // Moon scales from 0 to 1
              } }
              transition={ {
                duration: 0.5,
                ease: "easeInOut",

              } }
            >
              <Moon className="h-full w-full" />
            </motion.div>
          ) }

          {/* Screen Reader Only Text */ }
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={ () => setTheme("light") }>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={ () => setTheme("dark") }>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={ () => setTheme("system") }>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}