"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/cafe-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "pt-4 px-4" : "pt-6 px-4"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between transition-all duration-300 rounded-full px-6 py-3",
          scrolled
            ? "bg-brand-black/90 backdrop-blur-xl border border-brand-yellow/10 shadow-glow-sm"
            : "bg-transparent"
        )}
      >
        <Link href="/" className="font-heading text-xl font-bold text-white">
          {SITE.name}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-brand-yellow transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.zomato}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-full bg-brand-yellow px-4 text-sm font-semibold text-brand-black hover:brightness-110 shadow-glow-sm transition-all"
          >
            Reserve a Table
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-white hover:bg-white/10"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[280px] bg-brand-charcoal border-l border-brand-yellow/10 shadow-xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col gap-6 p-6 pt-14">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-white hover:text-brand-yellow transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE.zomato}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-full items-center justify-center rounded-full bg-brand-yellow px-4 text-sm font-semibold text-brand-black hover:brightness-110 transition-all"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
