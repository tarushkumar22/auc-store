import { ImageResponse } from "next/og";

export const alt = "AUC Store - India's Unified Marketplace";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #050b1a 0%, #0a1628 45%, #0d1f3c 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 34,
          }}
        >
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 24,
              background: "linear-gradient(135deg, #ff6b00, #e63950)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 46,
              fontWeight: 800,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 800 }}>
            <span style={{ color: "white" }}>AUC&nbsp;</span>
            <span style={{ color: "#ff8a3c" }}>Store</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            color: "white",
          }}
        >
          One Store ID.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            color: "#ff8a3c",
            marginTop: 4,
          }}
        >
          Infinite Possibilities.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "rgba(255,255,255,0.6)",
            marginTop: 30,
          }}
        >
          India&apos;s Unified Marketplace - Buy, Sell, Services &amp; Auctions
        </div>
      </div>
    ),
    { ...size }
  );
}
