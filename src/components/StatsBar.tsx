"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "5+", label: "User Types", desc: "Customers, Sellers, Engineers, Freelancers, Influencers" },
  { value: "9", label: "Platforms Combined", desc: "Into one unified ecosystem" },
  { value: "10+", label: "Service Categories", desc: "Home, Technical, Professional & more" },
  { value: "1", label: "Unified Store ID", desc: "Your entire business, one link" },
];

function StatCard({ value, label, desc, index }: { value: string; label: string; desc: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="text-center px-4 py-6"
    >
      <div className="text-4xl sm:text-5xl font-black gradient-text mb-1">{value}</div>
      <div className="text-gray-900 font-bold text-sm mb-1">{label}</div>
      <div className="text-gray-400 text-xs leading-snug max-w-[140px] mx-auto">{desc}</div>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
