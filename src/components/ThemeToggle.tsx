"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Heroicons

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Initialisation correcte dès le montage
  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  // Écouter les changements système si aucun choix manuel n’est stocké
  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          root.classList.add("dark");
          setIsDark(true);
        } else {
          root.classList.remove("dark");
          setIsDark(false);
        }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Appliquer et mémoriser le changement manuel
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
  <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Changer le thème"
      className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--background)] text-[var(--foreground)] border border-[var(--foreground)]/20 hover:bg-[var(--foreground)]/10 transition"
    >
      {isDark ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-[#a87a64]" />}
    </button>
  );
}
