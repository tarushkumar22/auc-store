"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Store, Wrench, Code2, Megaphone } from "lucide-react";
import Animate, { AnimateStagger, AnimateItem } from "./Animate";

const users = [
  {
    icon: ShoppingCart,
    title: "Customers",
    gradient: "from-blue-500 to-indigo-600",
    light: "bg-blue-50 border-blue-100",
    actions: ["Buy products & services","Request quotations","Join auctions","Hire professionals","Track orders & services","Purchase AMC plans"],
  },
  {
    icon: Store,
    title: "Sellers",
    gradient: "from-orange-500 to-red-500",
    light: "bg-orange-50 border-orange-100",
    actions: ["Create Store ID","Sell products & services","Receive leads","Manage logistics","Receive quotations","Run auctions"],
  },
  {
    icon: Wrench,
    title: "Engineers",
    gradient: "from-green-500 to-emerald-600",
    light: "bg-green-50 border-green-100",
    actions: ["Create Engineer Store ID","Bid on service jobs","Provide repair services","Generate estimates","Order spare parts","Build verified profile"],
  },
  {
    icon: Code2,
    title: "Freelancers",
    gradient: "from-purple-500 to-violet-600",
    light: "bg-purple-50 border-purple-100",
    actions: ["Create Professional Store ID","Offer digital services","Receive projects","Bid on requirements","Build portfolio","Get paid securely"],
  },
  {
    icon: Megaphone,
    title: "Influencers",
    gradient: "from-pink-500 to-rose-500",
    light: "bg-pink-50 border-pink-100",
    actions: ["Create Influencer Store ID","Promote products & services","Earn commissions","Recommend businesses","Track affiliate income","Build follower audience"],
  },
];

export default function UserTypes() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animate className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
            {"Who It's For"}
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            One Platform, Five User Types
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            {"Whether you're a buyer, seller, engineer, freelancer, or influencer - AUC Store has a dedicated ecosystem built just for you."}
          </p>
        </Animate>

        <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {users.map(({ icon: Icon, title, gradient, light, actions }) => (
            <AnimateItem key={title}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.10)" }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl border ${light} p-6 h-full`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">{title}</h3>
                <ul className="space-y-2">
                  {actions.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimateItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}