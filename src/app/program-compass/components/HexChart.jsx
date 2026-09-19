"use client";

import { DIM_ORDER } from "@/data/programCompassData";
import { hexPoint } from "@/lib/program-compass";

/**
 * RIASEC radar — a hexagon with one axis per dimension, the student's profile
 * drawn as a filled polygon over three reference rings.
 *
 * The data polygon starts at radius 14 rather than 0 so a profile that scores
 * zero on a dimension still reads as a shape rather than collapsing to a line.
 */
const MAX_R = 100;
const RINGS = [0.33, 0.66, 1];

export default function HexChart({ dimScore }) {
  const dataPoints = DIM_ORDER.map((dim, i) =>
    hexPoint(i, 14 + dimScore[dim] * (MAX_R - 14)).join(",")
  ).join(" ");

  return (
    <svg
      viewBox="0 0 260 260"
      width="100%"
      className="h-auto"
      style={{ aspectRatio: "1/1" }}
      role="img"
      aria-label="Your RIASEC profile shown as a six-axis radar chart"
    >
      {RINGS.map((frac) => (
        <polygon
          key={frac}
          points={DIM_ORDER.map((_, i) => hexPoint(i, MAX_R * frac).join(",")).join(" ")}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      ))}

      {DIM_ORDER.map((dim, i) => {
        const [x, y] = hexPoint(i, MAX_R);
        return (
          <line key={dim} x1="130" y1="130" x2={x} y2={y} stroke="#e2e8f0" strokeWidth="1" />
        );
      })}

      <polygon
        points={dataPoints}
        fill="#7C3AED"
        fillOpacity="0.28"
        stroke="#6B21A8"
        strokeWidth="2.5"
      />

      {DIM_ORDER.map((dim, i) => {
        const [x, y] = hexPoint(i, MAX_R + 18);
        return (
          <text
            key={dim}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="var(--font-playfair), Georgia, serif"
            fontWeight="600"
            fontSize="15"
            fill="#475569"
          >
            {dim}
          </text>
        );
      })}
    </svg>
  );
}
