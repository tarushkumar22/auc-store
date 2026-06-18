"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, LayoutGrid, Wrench, Crown, Rocket } from "lucide-react";

const items = [
  { id: "top", label: "Home", href: "#", icon: Home },
  { id: "features", label: "Features", href: "#features", icon: LayoutGrid },
  { id: "services", label: "Services", href: "#services", icon: Wrench },
  { id: "memberships", label: "Plans", href: "#memberships", icon: Crown },
  { id: "get-started", label: "Join", href: "#get-started", icon: Rocket },
];

export default function MobileNav() {
  const [active, setActive] = useState("top");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      // hide when scrolling down fast, show when scrolling up or near top
      setVisible(y < lastY || y < 120);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = items.filter((i) => i.id !== "top").map((i) => i.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry) setActive(visibleEntry.target.id);
        else if (window.scrollY < 200) setActive("top");
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string, href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActive(id);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: visible ? 0 : 120, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="md:hidden fixed bottom-4 inset-x-0 z-50 px-4"
      aria-label="Mobile navigation"
    >
      <div className="mx-auto max-w-sm flex items-center justify-between gap-1 rounded-2xl bg-[#0a1428]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40 px-2 py-2">
        {items.map(({ id, label, href, icon: Icon }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={href}
              onClick={handleClick(id, href)}
              className="relative flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-xl"
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.span
                  layoutId="mobileNavActive"
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/30"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <Icon
                className={`relative w-5 h-5 transition-colors ${
                  isActive ? "text-white" : "text-white/55"
                }`}
              />
              <span
                className={`relative text-[10px] font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/55"
                }`}
              >
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
