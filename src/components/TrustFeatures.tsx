"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Star, BarChart2, MessageSquare, CreditCard, Lock } from "lucide-react";
import Animate, { AnimateStagger, AnimateItem } from "./Animate";

const items = [
  { icon: ShieldCheck, title: "Verified Professionals", desc: "Aadhaar, PAN, police verification and AUC certification for all engineers and sellers." },
  { icon: Star, title: "AUC Score", desc: "Trust score built from reviews, ratings, response time, and job completion rate." },
  { icon: BarChart2, title: "Analytics Dashboard", desc: "Track revenue, leads, sales, orders, and customer locations in real-time." },
  { icon: MessageSquare, title: "In-App Communication", desc: "Text, images, voice notes, calls, and video calls - all inside the platform." },
  { icon: CreditCard, title: "All Payment Methods", desc: "UPI, Credit/Debit Card, Net Banking, Wallet - seamless Indian payment flow." },
  { icon: Lock, title: "Escrow Protection", desc: "Payment held securely by AUC and released only after job completion for high-value deals." },
];

export default function TrustFeatures() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animate className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
            Trust &amp; Safety
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            Built for Trust at Every Step
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            AUC Store embeds verification, payment protection, and transparency throughout the
            entire customer and seller journey.
          </p>
        </Animate>

        <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <AnimateItem key={title}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-4 bg-gray-50 rounded-3xl p-6 border border-gray-100 h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            </AnimateItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}