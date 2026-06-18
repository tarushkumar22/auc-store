"use client";
import { X, Check } from "lucide-react";
import Animate from "./Animate";

const columns = [
  { name: "Product\nPlatforms",  color: "text-blue-600 bg-blue-50",   highlight: false },
  { name: "Service\nApps",       color: "text-green-600 bg-green-50", highlight: false },
  { name: "B2B\nPortals",        color: "text-purple-600 bg-purple-50", highlight: false },
  { name: "Used Goods\nApps",    color: "text-yellow-700 bg-yellow-50", highlight: false },
  { name: "Freelance\nPlatforms",color: "text-pink-600 bg-pink-50",   highlight: false },
  { name: "AUC Store",           color: "text-white",                 highlight: true },
];

const rows = [
  { feature: "Product Marketplace",       vals: [true, false, false, false, false, true] },
  { feature: "Used Products",             vals: [false, false, false, true,  false, true] },
  { feature: "Quotation / RFQ",           vals: [false, false, true,  false, false, true] },
  { feature: "Home & Appliance Services", vals: [false, true, false, false, false, true] },
  { feature: "Certified Engineers",       vals: [false, true, false, false, false, true] },
  { feature: "Freelancer Hub",            vals: [false, false, false, false, true,  true] },
  { feature: "Business Directory",        vals: [false, false, true,  false, false, true] },
  { feature: "Auction Platform",          vals: [false, false, false, false, false, true] },
  { feature: "Integrated Logistics",      vals: [true,  false, false, false, false, true] },
  { feature: "AMC / Maintenance Plans",   vals: [false, false, false, false, false, true] },
  { feature: "Single Store ID",           vals: [false, false, false, false, false, true] },
];

export default function WhyAUC() {
  return (
    <section id="why-auc" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animate className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
            Why AUC Store
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            One Platform vs. Many
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            Most platforms focus on doing one thing. AUC Store covers everything through a single
            unified Store ID - no juggling multiple apps.
          </p>
        </Animate>

        <Animate>
          <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-4 font-semibold text-gray-600 w-48">Feature</th>
                  {columns.map(({ name, color, highlight }) => (
                    <th
                      key={name}
                      className={`px-3 py-4 font-bold text-center text-xs whitespace-pre-line leading-tight ${highlight ? "bg-gradient-to-b from-orange-500 to-red-500 " + color : color}`}
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(({ feature, vals }, ri) => (
                  <tr key={feature} className={`border-b border-gray-50 ${ri % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                    <td className="px-5 py-3.5 font-medium text-gray-700 text-sm">{feature}</td>
                    {vals.map((has, ci) => (
                      <td key={ci} className={`px-3 py-3.5 text-center ${columns[ci].highlight ? "bg-orange-50/60" : ""}`}>
                        {has ? (
                          <Check className={`w-5 h-5 mx-auto ${columns[ci].highlight ? "text-orange-500" : "text-green-500"}`} />
                        ) : (
                          <X className="w-4 h-4 mx-auto text-gray-200" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Animate>
      </div>
    </section>
  );
}