"use client";
import { motion } from "framer-motion";
import { ShoppingBag, Gavel, FileText, Package2, Wrench, Users2 } from "lucide-react";
import Animate, { AnimateStagger, AnimateItem } from "./Animate";

const features = [
  {
    icon: ShoppingBag,
    color: "from-blue-500 to-indigo-600",
    title: "Product Marketplace",
    desc: "Buy and sell new and used products across Electronics, Mobiles, Computers, Appliances, Furniture, Fashion and more.",
    tags: ["New Products", "Used Products", "All Categories"],
  },
  {
    icon: Gavel,
    color: "from-orange-500 to-red-500",
    title: "Auction Marketplace",
    desc: "Auction used items, new products, and business inventory. Set 3, 5, 7-day or custom durations. Highest bidder wins.",
    tags: ["3/5/7 Day Auctions", "Custom Duration", "Highest Bid Wins"],
  },
  {
    icon: FileText,
    color: "from-green-500 to-emerald-600",
    title: "Quotation System",
    desc: "Post product or service requirements and receive multiple quotes. AI analyzes market prices and flags suspicious quotes automatically.",
    tags: ["AI Price Analysis", "Multiple Quotes", "Best Value Alert"],
  },
  {
    icon: Package2,
    color: "from-purple-500 to-violet-600",
    title: "Logistics Platform",
    desc: "AUC Logistics, seller-managed, or hybrid delivery. Full order tracking with push notifications, SMS, WhatsApp and email updates.",
    tags: ["AUC Logistics", "Seller Logistics", "Real-time Tracking"],
  },
  {
    icon: Wrench,
    color: "from-teal-500 to-cyan-600",
    title: "Spare Parts Network",
    desc: "Verified spare parts suppliers serve certified engineers directly. Customers receive transparent final repair pricing - no hidden costs.",
    tags: ["Engineer-only Access", "Verified Suppliers", "Transparent Pricing"],
  },
  {
    icon: Users2,
    color: "from-pink-500 to-rose-500",
    title: "Freelancer Marketplace",
    desc: "Post projects and receive bids from web developers, designers, video editors, SEO experts and content writers.",
    tags: ["Web & App Dev", "Design & SEO", "Bid System"],
  },
];

export default function PlatformFeatures() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animate className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
            Platform Features
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            Everything in One Ecosystem
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            AUC Store is a complete commerce operating system - not just a shop.
          </p>
        </Animate>

        <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, color, title, desc, tags }) => (
            <AnimateItem key={title}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(0,0,0,0.09)" }}
                transition={{ duration: 0.3 }}
                className="card bg-white p-6 h-full flex flex-col"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimateItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}