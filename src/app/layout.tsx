import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AUC Store – India's Unified Marketplace",
  description:
    "AUC Store is a unified marketplace where customers can buy products, sell products, book services, hire professionals, request quotations, participate in auctions, and connect with verified businesses.",
  keywords: "AUC Store, marketplace, services, products, auction, engineers, freelancers",
  icons: {
    icon: "/auc.png",
    shortcut: "/auc.png",
    apple: "/auc.png",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
