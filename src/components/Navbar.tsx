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
          "mx-auto flex max-w-6xl items-center justify-between transition-all duration-300 rounded-sm px-5 py-3 border-2 border-transparent",
          scrolled
            ? "bg-brand-paper/90 backdrop-blur-xl border-foreground/10 shadow-sm"
            : "bg-transparent"
        )}
      >
        <Link
          href="/"
          className="font-heading text-xl font-bold text-foreground tracking-tight"
        >
          {SITE.name}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.zomato}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-foreground hover:brightness-95 shadow-glow-sm transition-all border-2 border-primary"
          >
            Reserve a Table
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-sm text-foreground hover:bg-muted border border-transparent hover:border-border"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-foreground/20"
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[280px] bg-background border-l-2 border-border shadow-xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col gap-6 p-6 pt-14">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-sm hover:bg-muted"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE.zomato}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-full items-center justify-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-foreground hover:brightness-95 transition-all border-2 border-primary"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
