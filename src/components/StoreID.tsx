"use client";
import { motion } from "framer-motion";
import { AtSign, Share2, QrCode, Star, ShieldCheck } from "lucide-react";
import Animate from "./Animate";

const examples = ["@hpworlddehradun", "@xpertcommunication", "@techtarush", "@coolairsolutions"];

const features = [
  { icon: AtSign, title: "Unique Store ID", desc: "Your branded URL: aucstore.in/store/yourname" },
  { icon: ShieldCheck, title: "Verified Identity", desc: "GST, Aadhaar, PAN verification for trust" },
  { icon: Star, title: "AUC Score", desc: "Trust score built from reviews and completion rate" },
  { icon: Share2, title: "Social Sharing", desc: "Share via WhatsApp, Instagram, Facebook and more" },
  { icon: QrCode, title: "QR Code", desc: "Put your store on business cards and posters" },
];

export default function StoreID() {
  return (
    <section id="store-id" className="section-bg-dark py-20 md:py-28 overflow-hidden relative">
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Animate variant="left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/15 text-orange-400 text-sm font-semibold mb-5">
              Core Foundation
            </span>
            <h2 className="section-heading text-white mb-6">
              Your Business Lives in a{" "}
              <span className="gradient-text">Single Store ID</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Every user on AUC Store gets a unique Store ID that acts as their online store,
              business profile, portfolio, lead collection system, and verified identity all
              in one place.
            </p>
            <div className="space-y-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{title}</div>
                    <div className="text-white/45 text-sm mt-0.5">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Animate>

          <Animate variant="right">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl p-6 sm:p-8 max-w-md mx-auto"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-2xl font-bold text-white shadow-xl">T</div>
                <div>
                  <div className="text-white font-bold text-xl">Tech Tarush</div>
                  <div className="text-orange-400 text-sm font-medium">@techtarush</div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-white/50 text-xs ml-1">4.9 (128)</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Electronics", "Repairs", "IT Support", "Laptops"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white/10 text-white/75 text-xs font-medium border border-white/12">
                    {t}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[{n:"240+",l:"Products"},{n:"18",l:"Services"},{n:"Gold",l:"AUC Score"}].map(({n,l})=>(
                  <div key={l} className="text-center bg-white/8 rounded-2xl py-3">
                    <div className="text-white font-bold">{n}</div>
                    <div className="text-white/45 text-xs">{l}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 bg-white/8 rounded-xl px-4 py-3 border border-white/12">
                <span className="text-white/40 text-xs">aucstore.in/store/</span>
                <span className="text-orange-400 font-semibold text-sm">techtarush</span>
              </div>
            </motion.div>

            <div className="mt-5 grid grid-cols-2 gap-3 max-w-md mx-auto">
              {examples.map((e) => (
                <motion.div
                  key={e}
                  whileHover={{ scale: 1.04 }}
                  className="px-4 py-2.5 rounded-xl glass text-orange-400 text-sm font-medium text-center border border-orange-500/20 cursor-default"
                >
                  {e}
                </motion.div>
              ))}
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}