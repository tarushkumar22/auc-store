import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const SITE_URL = "https://aucstore.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AUC Store - India's Unified Marketplace | Buy, Sell, Services & Auctions",
    template: "%s | AUC Store",
  },
  description:
    "AUC Store is India's unified marketplace. Post your requirement and let verified local sellers across your city compete on price, ratings and delivery speed through reverse auctions. Buy and sell products, book services, hire engineers and freelancers, request quotations, and grow your business with one verified Store ID.",
  applicationName: "AUC Store",
  keywords: [
    "AUC Store",
    "AUC",
    "AUC Store India",
    "aucstore",
    "auc store",
    "auc marketplace",
    "AUC Smart Services",
    "unified marketplace India",
    "online marketplace",
    "buy and sell products",
    "book services online",
    "hire engineers",
    "freelancer marketplace",
    "online auctions India",
    "reverse auction marketplace",
    "post requirement get quotes",
    "best price from local sellers",
    "compare seller prices online",
    "local shops online marketplace",
    "quotation system",
    "Store ID",
    "business directory India",
  ],
  authors: [{ name: "Tarush Kumar", url: "https://tarush.icu" }],
  creator: "Tarush Kumar",
  publisher: "AUC Smart Services Pvt Ltd",
  category: "Shopping",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "AUC Store",
    title: "AUC Store - India's Unified Marketplace",
    description:
      "Post your requirement and let local sellers compete on price, ratings and delivery speed. Buy, sell, auction, book services, and hire professionals - all through one verified Store ID. India's first unified commerce ecosystem.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AUC Store - India's Unified Marketplace",
    description:
      "Reverse auctions that get you the best price from local sellers. Buy, sell, auction, book services, and hire professionals - all through one verified Store ID.",
    creator: "@techtarush",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Replace with your real token from Google Search Console
    google: "google-site-verification-token",
  },
  icons: {
    icon: "/auc.png",
    shortcut: "/auc.png",
    apple: "/auc.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050b1a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "AUC Store",
      legalName: "AUC Smart Services Pvt Ltd",
      url: SITE_URL,
      logo: `${SITE_URL}/auc.png`,
      description:
        "AUC Store is India's unified marketplace for products, services, auctions, quotations, engineers, freelancers, and verified businesses.",
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "Tarush Kumar",
        url: "https://tarush.icu",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        addressCountry: "IN",
      },
      sameAs: ["https://tarush.icu"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "AUC Store",
      description: "India's unified marketplace - one Store ID, infinite possibilities.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#reverse-auction`,
      name: "Reverse Auction Marketplace",
      serviceType: "Customer-led reverse auction",
      description:
        "Post your requirement and verified sellers across your city and nearby compete with their best price and fastest delivery time. Customers compare offers by price, ratings and reviews, or delivery speed and choose the winner.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
      audience: { "@type": "Audience", audienceType: "Customers and local sellers" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
