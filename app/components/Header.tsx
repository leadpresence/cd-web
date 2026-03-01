"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Why CareDose", href: "#why-caredose" },
  { label: "Monitoring", href: "#monitoring" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionEls = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sectionEls.length) return;

    const updateActiveFromScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let current = navLinks[0].href;

      for (const section of sectionEls) {
        if (section.offsetTop <= scrollPosition) {
          current = `#${section.id}`;
        }
      }

      setActiveHref(current);
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveFromScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container section-padding flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <Image
            src="/pill-icon.svg"
            alt="CareDose"
            width={36}
            height={36}
            className="transition-transform group-hover:rotate-12"
          />
          <span className="text-xl font-bold text-txt">
            Care<span className="text-primary">Dose</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                activeHref === link.href
                  ? "text-primary"
                  : "text-txt-secondary hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-soft"
          >
            Download Free
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-txt transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-txt transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white/95 backdrop-blur-lg z-40 animate-fade-in">
          <nav className="flex flex-col items-center gap-6 pt-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  activeHref === link.href
                    ? "text-primary"
                    : "text-txt-secondary hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full transition-all"
            >
              Download Free
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
