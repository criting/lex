"use client";

import { cn } from "@/lib/cn";
import { navigation, site } from "@/content/provider";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navPath, setNavPath] = useState(pathname);
  const reduce = useReducedMotion();

  if (pathname !== navPath) {
    setNavPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, "")) || pathname === href;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-rule bg-stone/90 backdrop-blur-md"
          : "border-transparent bg-stone/35 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1400px] items-center justify-between gap-6 px-5 md:px-8">
        <Link
          href="/"
          className="text-display text-[1.5rem] tracking-[-0.03em] text-ink no-underline"
        >
          {site.wordmark}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm tracking-wide no-underline transition-colors",
                isActive(item.href) ? "text-seal" : "text-ink-soft hover:text-seal",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact/" className="btn btn-seal px-4 py-2 text-sm">
            Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-[var(--radius-control)] border border-rule-strong px-3 py-2 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-mono m-0 normal-case tracking-normal">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="border-t border-rule bg-stone lg:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              aria-label="Mobile"
              className="mx-auto flex max-w-[1400px] flex-col gap-1 px-5 py-6"
            >
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.35 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-3 text-2xl no-underline",
                      isActive(item.href) ? "text-seal" : "text-ink",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact/"
                className="btn btn-seal mt-4 w-full"
                onClick={() => setOpen(false)}
              >
                Consultation
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
