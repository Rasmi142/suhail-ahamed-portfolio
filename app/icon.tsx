import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Green Circle */}
          <div
            style={{
              position: "absolute",
              left: "2px",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#b4e63b",
            }}
          />
          {/* Black/Dark Blue Half-Circle */}
          <div
            style={{
              position: "absolute",
              right: "4px",
              width: "10px",
              height: "20px",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              background: "#111111",
            }}
          />
          {/* Small Blue Dot */}
          <div
            style={{
              position: "absolute",
              right: "0px",
              bottom: "4px",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#70c4ff",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
