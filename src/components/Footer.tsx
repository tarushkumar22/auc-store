import Link from "next/link";
import Image from "next/image";

const columns = {
  Platform: [
    { label: "Product Marketplace", href: "#features" },
    { label: "Auction Marketplace", href: "#features" },
    { label: "Service Hub", href: "#services" },
    { label: "Freelancer Hub", href: "#features" },
    { label: "Business Directory", href: "#store-id" },
  ],
  Users: [
    { label: "Customers", href: "#features" },
    { label: "Sellers", href: "#features" },
    { label: "Engineers", href: "#features" },
    { label: "Freelancers", href: "#features" },
    { label: "Influencers", href: "#features" },
  ],
  Features: [
    { label: "Store ID System", href: "#store-id" },
    { label: "Quotation System", href: "#features" },
    { label: "Order Tracking", href: "#features" },
    { label: "Warranty Management", href: "#features" },
    { label: "AMC Plans", href: "#memberships" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Account Deletion", href: "/account-deletion" },
    { label: "All Policies", href: "/policies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050b1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                <Image src="/auc.png" alt="AUC Store logo" width={36} height={36} className="object-contain w-full h-full" />
              </div>
              <span className="text-xl font-bold">
                AUC <span className="text-orange-500">Store</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              {"India's first unified commerce ecosystem - buying, selling, services, auctions, and professionals under one Store ID."}
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/40 text-xs">aucstore.in</span>
            </div>
          </div>

          {Object.entries(columns).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-white/80 text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-white/40 text-sm hover:text-orange-400 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-8 pb-20 md:pb-0 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            {`\u00A9 ${new Date().getFullYear()} AUC Store. All rights reserved.`}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Refund", href: "/refund" },
              { label: "Account Deletion", href: "/account-deletion" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="text-white/30 text-xs hover:text-orange-400 transition-colors">
                {label}
              </Link>
            ))}
          </div>
          <p className="text-white/20 text-xs">Made in India</p>
        </div>
      </div>
    </footer>
  );
}