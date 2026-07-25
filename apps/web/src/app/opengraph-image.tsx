import { ImageResponse } from "next/og";

export const alt = "Agnay Srivastava, co-founder and CEO of Tsenta";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8f2e7",
          color: "#182234",
          padding: "56px 64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <span>Agnay Srivastava</span>
          <span
            style={{
              display: "flex",
              background: "#d7ed65",
              border: "3px solid #182234",
              padding: "10px 16px",
            }}
          >
            YC S26
          </span>
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 980,
            fontSize: 100,
            fontWeight: 800,
            letterSpacing: "-6px",
            lineHeight: 0.92,
          }}
        >
          AI should make one person wildly more capable.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 25,
          }}
        >
          <span
            style={{
              display: "flex",
              width: 28,
              height: 28,
              background: "#f06c48",
              border: "3px solid #182234",
            }}
          />
          <span>Co-founder &amp; CEO of Tsenta</span>
        </div>
      </div>
    ),
    size,
  );
}
