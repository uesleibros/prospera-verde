import { ImageResponse } from "next/og";

export const dynamic = "force-static";
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
          justifyContent: "center",
          background: "#071d41",
          padding: "88px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 999,
              background: "#168821",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 32 32">
              <path
                d="M9 22C9 13 15 8 24 8c0 9-5 15-14 15-1.5 0-2.7-.3-3.6-.8"
                fill="#ffffff"
              />
              <path
                d="M9.5 22.5 21 11"
                stroke="#168821"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#ffcd07", letterSpacing: 2 }}>
            PRÓSPERA VERDE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: 980,
          }}
        >
          Reciclar bem começa por entender bem.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 880,
          }}
        >
          Cooperativa de reciclagem em Itaberaba, Bahia, com simulações interativas para aprender a separar o lixo corretamente.
        </div>
      </div>
    ),
    { ...size }
  );
}
