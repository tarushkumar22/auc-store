"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Memberships", href: "#memberships" },
  { label: "Why AUC", href: "#why-auc" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-md">
              <Image src="/auc.png" alt="AUC Store logo" width={32} height={32} className="object-contain w-full h-full" />
            </div>
            <span
              className={`text-lg font-bold transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              AUC <span className="text-orange-500">Store</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#store-id"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all"
            >
              Create Store ID
            </a>
          </div>

          {/* Mobile CTA (navigation handled by floating bottom bar) */}
          <a
            href="#get-started"
            className={`md:hidden px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              scrolled
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                : "glass text-white border border-white/20"
            }`}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
