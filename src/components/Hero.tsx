"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Wrench, Briefcase, Megaphone, Store, Gavel, FileText, Package } from "lucide-react";

const badges = [
  { icon: ShoppingCart, label: "Buy Products" },
  { icon: Store, label: "Sell Products" },
  { icon: Wrench, label: "Book Services" },
  { icon: Briefcase, label: "Hire Professionals" },
  { icon: FileText, label: "Request Quotes" },
  { icon: Gavel, label: "Join Auctions" },
  { icon: Package, label: "Track Orders" },
  { icon: Megaphone, label: "Earn Commissions" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-bg noise-overlay hero-beams">
      <div className="aurora" />
      <div className="animated-grid" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-orange-600/15 blur-[120px] pointer-events-none animate-float scroll-parallax" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full bg-blue-700/12 blur-[140px] pointer-events-none scroll-parallax" />
      <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-red-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-24 right-16 w-32 h-32 rounded-full border border-orange-500/20 animate-spin-slow hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-20 h-20 rounded-full border border-white/10 animate-spin-slow hidden lg:block" style={{ animationDirection: "reverse" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <motion.div className="text-center" variants={container} initial="hidden" animate="visible">

          <motion.div variants={item} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border-orange-500/20 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            <span className="text-white/80 text-sm font-medium">{"India's First Unified Commerce Ecosystem"}</span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6">
            One Store ID.
            <br />
            <span className="gradient-text">Infinite Possibilities.</span>
          </motion.h1>

          <motion.p variants={item} className="max-w-2xl mx-auto text-lg sm:text-xl text-white/55 leading-relaxed mb-10">
            <strong className="text-white/75 font-semibold">AUC Store</strong> lets you buy, sell, auction,
            book services, hire engineers, and post requirements - all through a
            single verified <span className="text-orange-400 font-semibold">Store ID</span> that
            powers your business, portfolio, and leads.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a href="#store-id" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-lg animate-pulse-glow">
              Create Your Store ID
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#features" className="btn-ghost w-full sm:w-auto px-8 py-4 text-lg">
              Explore Platform
            </a>
          </motion.div>

          <motion.div variants={item} className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl glass mb-12">
            <span className="text-white/40 text-sm">Combines</span>
            <span className="text-white font-bold text-sm">9 types of platforms</span>
            <span className="text-white/40 text-sm">into one ecosystem</span>
          </motion.div>

          <motion.div variants={container} className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {badges.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={item}
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.12)" }}
                className="flex items-center gap-2.5 px-4 py-3.5 rounded-2xl glass text-white/80 text-sm font-medium cursor-default"
              >
                <Icon className="w-5 h-5 text-orange-400 shrink-0" />
                {label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100L48 91.7C96 83.3 192 66.7 288 58.3C384 50 480 50 576 54.2C672 58.3 768 66.7 864 70.8C960 75 1056 75 1152 70.8C1248 66.7 1344 58.3 1392 54.2L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}