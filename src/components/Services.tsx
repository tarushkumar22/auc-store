"use client";
import { motion } from "framer-motion";
import { Zap, Droplets, Hammer, Paintbrush2, Wind, Monitor, Wifi, Smartphone, Globe, Palette } from "lucide-react";
import Animate, { AnimateStagger, AnimateItem } from "./Animate";

const categories = [
  {
    title: "Home Services",
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50 border-blue-100",
    services: [{ icon: Zap, name: "Electrician" },{ icon: Droplets, name: "Plumber" },{ icon: Hammer, name: "Carpenter" },{ icon: Paintbrush2, name: "Painter" }],
  },
  {
    title: "Appliance Repair",
    gradient: "from-orange-500 to-red-500",
    bg: "bg-orange-50 border-orange-100",
    services: [{ icon: Wind, name: "AC Repair" },{ icon: Monitor, name: "TV Repair" },{ icon: Zap, name: "Refrigerator" },{ icon: Hammer, name: "Washing Machine" }],
  },
  {
    title: "Technical Services",
    gradient: "from-green-500 to-emerald-600",
    bg: "bg-green-50 border-green-100",
    services: [{ icon: Monitor, name: "Laptop Repair" },{ icon: Wifi, name: "CCTV & Network" },{ icon: Smartphone, name: "Desktop Repair" },{ icon: Hammer, name: "Printer Repair" }],
  },
  {
    title: "Professional Services",
    gradient: "from-purple-500 to-violet-600",
    bg: "bg-purple-50 border-purple-100",
    services: [{ icon: Globe, name: "Web Development" },{ icon: Smartphone, name: "App Development" },{ icon: Palette, name: "Graphic Design" },{ icon: Globe, name: "SEO & Marketing" }],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animate className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
            Service Hub
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            Every Service. One Platform.
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            From fixing your AC to building your website, AUC Store connects you with verified
            professionals for every need.
          </p>
        </Animate>

        <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(({ title, gradient, bg, services }) => (
            <AnimateItem key={title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl border ${bg} p-5 h-full`}
              >
                <h3 className="font-bold text-gray-900 text-sm mb-4 flex items-center gap-2">
                  <span className={`w-1.5 h-5 rounded-full bg-gradient-to-b ${gradient}`} />
                  {title}
                </h3>
                <div className="space-y-2.5">
                  {services.map(({ icon: Icon, name }) => (
                    <motion.div
                      key={name}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3 bg-white rounded-xl px-3 py-2.5 shadow-sm border border-white hover:border-orange-200 transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{name}</span>
                    </motion.div>
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