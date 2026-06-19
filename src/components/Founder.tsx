"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Briefcase, Star } from "lucide-react";
import Animate from "./Animate";

// Auto-calculate age from date of birth: 09 Jan 2004
function getAge(dob: Date): number {
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const m = now.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;
  return age;
}
const AGE = getAge(new Date(2004, 0, 9));

const timeline = [
  {
    role: "Tech Support & System Specialist",
    org: "Xpert Communication",
    color: "bg-blue-500",
    highlights: ["99% repair success rate", "Custom PC building & chip-level repairs", "Multi-brand hardware & software", "Customer service excellence"],
  },
  {
    role: "Backend Executive & IT Support",
    org: "QDIGI Services Ltd (Samsung Service Centre)",
    color: "bg-green-500",
    highlights: ["98% data accuracy maintained", "Samsung GSPN portal management", "Samsung service centre operations", "IT support & troubleshooting"],
  },
  {
    role: "Store Manager",
    org: "HP World, Dehradun",
    color: "bg-purple-500",
    highlights: ["Sales, billing & inventory", "Customer product selection", "Team coordination & targets", "Daily operations & growth"],
  },
  {
    role: "Founder & CEO",
    org: "AUC Smart Services Pvt Ltd",
    color: "bg-orange-500",
    highlights: ["Building AUC Store ecosystem", "Platform vision & architecture", "Privacy-first product design", "Leading a new business"],
  },
];

const stats = [
  { value: "6+", label: "Years in Tech" },
  { value: `${AGE}`, label: "Years Old" },
  { value: "99%", label: "Repair Success" },
  { value: "CEO", label: "AUC Store" },
];

const socials = [
  {
    label: "Portfolio",
    url: "https://tarush.icu",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/tarush-kumar-3a6300110",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/tarushkumar_/",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    url: "https://x.com/tarushkumar_",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Founder() {
  return (
    <section className="section-bg-dark py-20 md:py-28 overflow-hidden relative">
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 0)",backgroundSize:"32px 32px"}} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Animate className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/15 text-orange-400 text-sm font-semibold mb-4">
            Meet the Founder
          </span>
          <h2 className="section-heading text-white mb-4">
            The Story Behind{" "}
            <span className="gradient-text">AUC Store</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-lg">
            Built from real-world experience, not just theory.
          </p>
        </Animate>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">

          {/* Left: Bio */}
          <Animate variant="left">
            <div className="flex items-start gap-5 mb-8">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="relative shrink-0"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden border-2 border-orange-500/40 shadow-2xl shadow-orange-500/20">
                  <Image
                    src="https://tarush.icu/mypic.jpg"
                    alt="Tarush Kumar - Founder of AUC Store"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-[#050b1a]" />
              </motion.div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">Tarush Kumar</h3>
                <p className="text-orange-400 font-semibold text-sm mt-0.5">Founder & CEO, AUC Smart Services Pvt Ltd</p>
                <div className="flex items-center gap-1.5 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-white/40" />
                  <span className="text-white/45 text-sm">Dehradun, Uttarakhand, India</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[`Age ${AGE}`, "Born Jan 9, 2004", "6+ Years in Tech"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full glass text-white/60 text-xs border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-white/65 text-base leading-relaxed">
                Tarush Kumar is a tech entrepreneur from Dehradun with <strong className="text-white/90">6+ years of hands-on experience in tech</strong>. At <strong className="text-white/90">Xpert Communication</strong>, he mastered hardware repair, custom PC building, and customer service. He worked at <strong className="text-white/90">QDIGI Services (a Samsung Service Centre)</strong> managing the Samsung GSPN portal, and as <strong className="text-white/90">Store Manager at HP World</strong> he saw firsthand how local businesses struggled with online visibility despite offering excellent products.
              </p>
              <p className="text-white/55 text-base leading-relaxed">
                That gap became the foundation of AUC Store. Today, as <strong className="text-white/90">Founder & CEO of AUC Smart Services Pvt Ltd</strong>, he is building a platform so every local business, seller, engineer, and freelancer gets a fair digital presence through a single verified Store ID.
              </p>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-orange-500/60 pl-5 mb-8">
              <p className="text-white/80 text-lg font-medium italic leading-relaxed">
                "Innovation begins when problems become opportunities."
              </p>
              <p className="text-orange-400 text-sm font-semibold mt-2">- Tarush Kumar, Founder of AUC Store</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center glass rounded-2xl py-4">
                  <div className="text-xl font-black gradient-text">{value}</div>
                  <div className="text-white/45 text-xs mt-0.5 leading-tight">{label}</div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-2.5">
              {socials.map(({ label, url, svg }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 pl-2.5 pr-3.5 py-2 rounded-2xl glass border border-white/12 text-white/70 hover:text-orange-400 hover:border-orange-500/40 hover:bg-orange-500/10 transition-colors"
                >
                  <span className="w-8 h-8 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-400 shrink-0">
                    {svg}
                  </span>
                  <span className="text-sm font-semibold">{label}</span>
                </motion.a>
              ))}
            </div>
          </Animate>

          {/* Right: Experience Timeline */}
          <Animate variant="right">
            <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-6 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-orange-400" />
              Experience Journey
            </h4>
            <div className="relative">
              <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10" />
              <div className="space-y-5">
                {timeline.map(({ role, org, color, highlights }, i) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4 }}
                    className="relative pl-12"
                  >
                    <div className={`absolute left-1.5 top-1.5 w-5 h-5 rounded-full ${color} border-2 border-[#050b1a] shadow-lg`} />
                    <div className="glass rounded-2xl p-4 border border-white/8 hover:border-orange-500/20 transition-colors">
                      <div className="mb-1">
                        <div className="text-white font-bold text-sm">{role}</div>
                        <div className="text-orange-400 text-xs font-medium">{org}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-1 mt-2">
                        {highlights.map((h) => (
                          <div key={h} className="flex items-center gap-1.5 text-xs text-white/45">
                            <Star className="w-2.5 h-2.5 text-orange-500/60 shrink-0" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Animate>
        </div>

        {/* Bottom skills strip */}
        <Animate>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { skill: "Product Vision", pct: 95 },
              { skill: "Data Accuracy", pct: 95 },
              { skill: "Customer Service", pct: 92 },
              { skill: "Problem Solving", pct: 88 },
            ].map(({ skill, pct }) => (
              <div key={skill} className="glass rounded-2xl p-4 text-center border border-white/8">
                <div className="text-xl font-black gradient-text">{pct}%</div>
                <div className="text-white/45 text-xs mt-1">{skill}</div>
                <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
}