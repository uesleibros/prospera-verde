import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#168821",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32">
          <path
            d="M9 22C9 13 15 8 24 8c0 9-5 15-14 15-1.5 0-2.7-.3-3.6-.8"
            fill="#ffffff"
          />
          <path
            d="M9.5 22.5 21 11"
            stroke="#168821"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
