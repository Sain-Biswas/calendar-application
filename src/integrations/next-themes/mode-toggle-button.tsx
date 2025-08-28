"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

interface ModeToggleButtonProps {
  className?: string | undefined;
}

export function ModeToggleButton({ className }: ModeToggleButtonProps) {
  const { setTheme, theme } = useTheme();

  function handleThemeToggle() {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else {
      const system = globalThis.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      const decision = system === "dark" ? "light" : "dark";

      setTheme(decision);
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleThemeToggle}
      className={className}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
