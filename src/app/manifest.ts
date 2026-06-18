import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AUC Store - India's Unified Marketplace",
    short_name: "AUC Store",
    description:
      "Buy, sell, auction, book services, and hire professionals through a single verified Store ID. India's first unified commerce ecosystem.",
    start_url: "/",
    display: "standalone",
    background_color: "#050b1a",
    theme_color: "#ff6b00",
    categories: ["shopping", "business", "marketplace"],
    icons: [
      {
        src: "/auc.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/auc.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
