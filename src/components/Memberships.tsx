"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Store, Wrench, Check } from "lucide-react";
import Animate, { AnimateStagger, AnimateItem } from "./Animate";

const plans = [
  {
    icon: ShoppingCart,
    name: "Customer Plus",
    tagline: "Shop smarter",
    gradient: "from-blue-500 to-indigo-600",
    perks: ["Lower service fees","Faster customer support","Exclusive member offers","Priority booking slots"],
    highlighted: false,
  },
  {
    icon: Store,
    name: "Seller Pro",
    tagline: "Grow faster",
    gradient: "from-orange-500 to-red-500",
    perks: ["Featured Store listing","Better search visibility","Advanced analytics","Priority lead notifications"],
    highlighted: true,
  },
  {
    icon: Wrench,
    name: "Engineer Pro",
    tagline: "Win more jobs",
    gradient: "from-green-500 to-emerald-600",
    perks: ["Unlimited service bids","Priority job ranking","Gold badge on profile","Early access to leads"],
    highlighted: false,
  },
];

export default function Memberships() {
  return (
    <section id="memberships" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animate className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
            Memberships
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            Grow Faster with a Pro Plan
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            Unlock premium features and get ahead of the competition.
          </p>
        </Animate>
        <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map(({ icon: Icon, name, tagline, gradient, perks, highlighted }) => (
            <AnimateItem key={name}>
              <motion.div
                whileHover={{ scale: highlighted ? 1.01 : 1.03, y: -4 }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl p-7 h-full flex flex-col ${
                  highlighted
                    ? "bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-2xl shadow-orange-200 ring-2 ring-orange-400"
                    : "bg-white border border-gray-100 shadow-sm"
                }`}
              >
                {highlighted && (
                  <div className="mb-3">
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-md ${highlighted ? "bg-white/20" : "bg-gradient-to-br " + gradient}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-xs font-semibold mb-1 ${highlighted ? "text-white/70" : "text-orange-500"}`}>{tagline}</div>
                <h3 className={`text-xl font-bold mb-5 ${highlighted ? "text-white" : "text-gray-900"}`}>{name}</h3>
                <ul className="space-y-3 mb-7 flex-1">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5">
                      <Check className={`w-5 h-5 mt-0.5 shrink-0 ${highlighted ? "text-white" : "text-green-500"}`} />
                      <span className={`text-sm ${highlighted ? "text-white/90" : "text-gray-600"}`}>{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#store-id"
                  className={`block w-full text-center py-3 rounded-2xl font-semibold text-sm transition-all ${
                    highlighted
                      ? "bg-white text-orange-500 hover:bg-orange-50"
                      : "bg-gradient-to-r " + gradient + " text-white hover:shadow-lg hover:scale-105"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            </AnimateItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}