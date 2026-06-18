import Link from "next/link";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

interface Section {
  title: string;
  content: string | string[];
}

interface PolicyPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
  children?: ReactNode;
}

export default function PolicyPage({ title, subtitle, lastUpdated, sections, children }: PolicyPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <header className="bg-gradient-to-br from-[#050b1a] to-[#0d1f3c] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-white/55 hover:text-white text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to AUC Store
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">
              AUC <span className="text-orange-400">Store</span>
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">{title}</h1>
          <p className="text-white/55 text-base">{subtitle}</p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/60 text-xs">
            Last updated: {lastUpdated}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-gray max-w-none">
          {sections.map(({ title: sTitle, content }) => (
            <section key={sTitle} className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">
                {sTitle}
              </h2>
              {Array.isArray(content) ? (
                <ul className="space-y-2">
                  {content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{content}</p>
              )}
            </section>
          ))}
          {children}
        </div>

        {/* Contact callout */}
        <div className="mt-12 bg-orange-50 rounded-3xl p-6 border border-orange-100">
          <h3 className="font-bold text-gray-900 mb-2">Have Questions?</h3>
          <p className="text-gray-600 text-sm mb-3">
            If you have any questions about this policy, please contact our support team.
          </p>
          <a
            href="mailto:support@aucstore.in"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold hover:shadow-lg transition-shadow"
          >
            support@aucstore.in
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AUC Store. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms & Conditions" },
              { href: "/refund", label: "Refund Policy" },
              { href: "/account-deletion", label: "Account Deletion" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
