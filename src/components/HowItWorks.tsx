"use client";
import { motion } from "framer-motion";
import { ClipboardList, UserCheck, Search, FileText, CheckCircle, Wrench, ShieldCheck } from "lucide-react";
import Animate, { AnimateStagger, AnimateItem } from "./Animate";

const steps = [
  { icon: ClipboardList, step: "01", title: "Customer Books Service", desc: "Customer selects a service and books with a certified engineer nearby." },
  { icon: UserCheck, step: "02", title: "Engineer Visits", desc: "Engineer arrives. Customer pays the visit charge + diagnosis fee." },
  { icon: Search, step: "03", title: "Inspection Performed", desc: "Engineer thoroughly inspects the device or equipment." },
  { icon: FileText, step: "04", title: "Estimate Generated", desc: "Transparent estimate shared: Diagnosis Rs.199 - Labor Rs.500 - Parts Rs.2,000 - Total Rs.2,699" },
  { icon: CheckCircle, step: "05", title: "Customer Approves", desc: "Customer reviews and approves the estimate before any work begins." },
  { icon: Wrench, step: "06", title: "Repair Completed", desc: "Engineer completes the repair to full satisfaction." },
  { icon: ShieldCheck, step: "07", title: "Warranty Activated", desc: "Digital warranty card issued and tracked on AUC platform." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animate className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
            Diagnosis &amp; Repair
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            How Service Booking Works
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            A transparent, step-by-step process from booking to warranty activation.
          </p>
        </Animate>

        <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <AnimateItem key={step}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.3 }}
                className="relative card bg-white p-6 h-full"
              >
                <div className="absolute top-4 right-4 text-5xl font-black text-gray-100 select-none leading-none">{step}</div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 pr-8">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            </AnimateItem>
          ))}
        </AnimateStagger>

        <Animate>
          <div className="section-bg-dark rounded-3xl p-8 md:p-10 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 0)",backgroundSize:"32px 32px"}} />
            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Engineer Bidding System</h3>
              <p className="text-white/55 max-w-2xl mx-auto text-base mb-6">
                Post your requirement and nearby certified engineers submit bids.
                Compare by price, rating, experience, and distance, then choose the best fit.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Price", "AUC Rating", "Experience", "Distance", "AUC Score"].map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.06, backgroundColor: "rgba(255,107,0,0.2)" }}
                    className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-white/75 text-sm font-medium cursor-default"
                  >
                    Compare by {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
}