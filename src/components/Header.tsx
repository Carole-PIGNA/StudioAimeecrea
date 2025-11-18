"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
      }`}
    >
      {/* Fond transparent + léger blur */}
      <div className="backdrop-blur-sm bg-[var(--background)]/70 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
          
          
          <Link href="/" className="flex items-center">
            <div
                className="w-[180px] h-[100px] bg-no-repeat bg-contain"
                style={{ backgroundImage: "var(--logo)" }}
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[var(--foreground)] transition-colors duration-300">
            <Link href="/" className="hover:text-[#f5ca92] transition">Accueil</Link>
            <Link href="/#gallery" className="hover:text-[#f5ca92] transition">Designs</Link>
            <Link href="/blog" className="hover:text-[#f5ca92] transition">Blog</Link>
            <Link href="/contact" className="hover:text-[#f5ca92] transition">Contact</Link>
            <Link href="/contact">
              <button className="ml-2 bg-[#d4af37] text-black px-5 py-2 rounded-full hover:bg-[#b9972f] transition text-sm font-semibold">
                Démarrer un projet
              </button>
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-3">
            <Link href="/contact">
              <button className="bg-[#d4af37] text-black px-4 py-2 rounded-full hover:bg-[#b9972f] transition text-sm font-semibold">
                Projet
              </button>
            </Link>
            <button
              aria-label="Ouvrir le menu"
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md bg-[var(--background)]/20 text-[var(--foreground)] hover:bg-[var(--background)]/30 transition"
            >
              <span className="sr-only">Menu</span>
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-[var(--foreground)] transition ${open ? "translate-y-2 rotate-45" : ""}`}></span>
                <span className={`block h-0.5 w-5 bg-[var(--foreground)] transition ${open ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`block h-0.5 w-5 bg-[var(--foreground)] transition ${open ? "-translate-y-2 -rotate-45" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full transform transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        />
        <div className="relative bg-[var(--background)]/90 text-[var(--foreground)] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            <Link href="/" onClick={() => setOpen(false)} className="block py-2 hover:opacity-80 transition">Accueil</Link>
            <Link href="/#gallery" onClick={() => setOpen(false)} className="block py-2 hover:opacity-80 transition">Designs</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="block py-2 hover:opacity-80 transition">Blog</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block py-2 hover:opacity-80 transition">Contact</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              <button className="mt-2 bg-[#d4af37] text-black px-5 py-2 rounded-full hover:bg-[#b9972f] transition text-sm font-semibold w-full">
                Démarrer un projet
              </button>
            </Link>
            <h1 className="text-xl font-serif text-[#a87a64] dark:text-[#d4af37]">Studio AiméeCréa</h1>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
