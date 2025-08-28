"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useMemo } from "react";

interface ModeToggleSwitchProps {
  className?: string | undefined;
}

export default function ModeToggleSwitch({ className }: ModeToggleSwitchProps) {
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

  const decisionTheme = useMemo(() => {
    if (theme === "system")
      return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    else return theme;
  }, [theme]);

  return (
    <div>
      <div
        className={cn(
          "relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium",
          className,
        )}
      >
        <Switch
          id={"mode-toggle-switch"}
          checked={decisionTheme === "light"}
          onCheckedChange={handleThemeToggle}
          className="peer data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full"
        />
        <span className="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full peer-data-[state=unchecked]:rtl:-translate-x-full">
          <MoonIcon size={16} aria-hidden="true" />
        </span>
        <span className="peer-data-[state=checked]:text-background pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:-translate-x-full peer-data-[state=unchecked]:invisible peer-data-[state=checked]:rtl:translate-x-full">
          <SunIcon size={16} aria-hidden="true" />
        </span>
      </div>
      <Label htmlFor={"mode-toggle-switch"} className="sr-only">
        Labeled switch
      </Label>
    </div>
  );
}
