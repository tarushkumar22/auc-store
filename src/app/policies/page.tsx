import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingBag, Shield, FileText, RefreshCw, UserX, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Policies",
  description: "All legal policies for the AUC Store platform.",
};

const policies = [
  {
    icon: Shield,
    gradient: "from-blue-500 to-indigo-600",
    title: "Privacy Policy",
    desc: "How we collect, use, and protect your personal information.",
    href: "/privacy",
    compliance: "GDPR & IT Act 2000 Compliant",
  },
  {
    icon: FileText,
    gradient: "from-orange-500 to-red-500",
    title: "Terms & Conditions",
    desc: "The rules and guidelines governing your use of AUC Store.",
    href: "/terms",
    compliance: "App Store & Play Store Ready",
  },
  {
    icon: RefreshCw,
    gradient: "from-green-500 to-emerald-600",
    title: "Refund Policy",
    desc: "Conditions for returns, refunds, and cancellations.",
    href: "/refund",
    compliance: "Consumer Protection Act",
  },
  {
    icon: UserX,
    gradient: "from-red-500 to-rose-600",
    title: "Account Deletion",
    desc: "How to permanently delete your account and data.",
    href: "/account-deletion",
    compliance: "Right to Erasure Compliant",
  },
];

const compliance = [
  "Privacy Policy", "Terms & Conditions", "Refund Policy",
  "Account Deletion Option", "Seller Verification", "Report System",
  "Content Moderation", "Customer Support",
];

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#050b1a] to-[#0d1f3c] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">
              AUC <span className="text-orange-400">Store</span>
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-3">Legal & Policies</h1>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            AUC Store is built for transparency and trust. All our policies are designed to
            protect customers, sellers, and partners.
          </p>
        </div>
      </header>

      {/* Policies grid */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {policies.map(({ icon: Icon, gradient, title, desc, href, compliance: comp }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-4 p-6 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 shadow-md`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="font-bold text-gray-900">{title}</h2>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
                </div>
                <p className="text-gray-500 text-sm mb-2">{desc}</p>
                <span className="inline-block px-2.5 py-1 rounded-lg bg-green-50 text-green-700 text-xs font-medium">
                  ✓ {comp}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* App Store Compliance section */}
        <div className="bg-gradient-to-br from-[#050b1a] to-[#0d1f3c] rounded-3xl p-8 text-white">
          <h2 className="text-xl font-bold mb-2">App Store & Play Store Compliance</h2>
          <p className="text-white/55 text-sm mb-6">
            AUC Store meets all mandatory requirements for Google Play Store and Apple App Store
            listings.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {compliance.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                  <span className="text-green-400 text-xs">✓</span>
                </span>
                <span className="text-white/75 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            For legal enquiries or policy clarifications, email{" "}
            <a href="mailto:legal@aucstore.in" className="text-orange-500 font-semibold hover:underline">
              legal@aucstore.in
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-orange-500 hover:text-orange-600 text-sm font-semibold transition-colors">
            ← Back to AUC Store
          </Link>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AUC Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
