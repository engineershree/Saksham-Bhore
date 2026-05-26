import React from "react";

export type JackAvatarProps = {
  size?: number;
  className?: string;
  glow?: boolean;
  /**
   * Your real avatar photo (face). The component layers it inside the
   * mascot head area to keep your hair/beard/glasses vibe.
   */
  imageSrc?: string;
  /**
   * Optional accessible label. If omitted, the avatar is treated as decorative.
   */
  ariaLabel?: string;
};

/**
 * Mascot identity component for the portfolio.
 * Replace the SVG styling later with your own 3D/illustration if you have it,
 * but the layout stays stable for the rest of the portfolio.
 */
export default function JackAvatar({
  size = 220,
  className,
  glow = false,
  imageSrc = "/assets/Saksham1.jpeg",
  ariaLabel,
}: JackAvatarProps) {
  const isDecorative = !ariaLabel;

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        position: "relative",
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        background:
          "radial-gradient(120% 120% at 20% 20%, rgba(0,245,255,0.18) 0%, rgba(189,0,255,0.10) 45%, rgba(255,255,255,0.02) 70%)",
        boxShadow: glow
          ? "0 0 0 1px rgba(215,226,234,0.08), 0 20px 60px rgba(0,245,255,0.08), 0 14px 40px rgba(189,0,255,0.08)"
          : "0 0 0 1px rgba(215,226,234,0.06)",
      }}
      role={isDecorative ? "presentation" : "img"}
      aria-label={isDecorative ? undefined : ariaLabel}
    >
      {/* Face image layer (best effort “real avatar” identity). */}
      <img
        src={imageSrc}
        alt={ariaLabel ?? ""}
        aria-hidden={isDecorative ? true : undefined}
        style={{
          position: "absolute",
          width: "62%",
          height: "62%",
          top: "18%",
          left: "19%",
          borderRadius: 999,
          objectFit: "cover",
          filter: "saturate(1.08) contrast(1.06) brightness(1.02)",
          opacity: 0.98,
          transform: "translateZ(0) scale(1.04)",
          boxShadow: "0 0 0 1px rgba(215,226,234,0.08) inset",
        }}
      />

      <svg
        viewBox="0 0 200 200"
        width="72%"
        height="72%"
        style={{ transform: "translateZ(0)" }}
      >
        <defs>
          <linearGradient id="jack-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#646973" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#bbccd7" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="jack-hood" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#bd00ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.65" />
          </linearGradient>
          <filter id="jack-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 .45 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer aura ring */}
        <circle
          cx="100"
          cy="100"
          r="82"
          fill="none"
          stroke="url(#jack-grad)"
          strokeOpacity="0.35"
          strokeWidth="2"
          filter={glow ? "url(#jack-glow)" : undefined}
        />

        {/* Head aura */}
        <circle cx="100" cy="86" r="46" fill="rgba(215,226,234,0.06)" />
        <circle cx="100" cy="86" r="43" fill="url(#jack-grad)" opacity="0.26" />

        {/* Hoodie */}
        <path
          d="M45 168c9-42 42-54 55-54s46 12 55 54c-20 20-40 23-55 23s-35-3-55-23Z"
          fill="url(#jack-hood)"
          opacity="0.92"
        />
        <path
          d="M65 160c7-22 20-32 35-32s28 10 35 32c-12 10-23 13-35 13s-23-3-35-13Z"
          fill="rgba(12,12,12,0.35)"
          opacity="0.9"
        />

        {/* Subtle facial accents (kept minimal so the photo face stays dominant). */}
        <circle cx="83" cy="84" r="3.2" fill="#0C0C0C" opacity="0.35" />
        <circle cx="117" cy="84" r="3.2" fill="#0C0C0C" opacity="0.35" />
        <path
          d="M92 106c2.8 3.5 12.2 3.5 15 0"
          fill="none"
          stroke="#D7E2EA"
          strokeOpacity="0.42"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Tiny spark */}
        <g opacity="0.9">
          <path
            d="M135 52l3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9Z"
            fill="#00f5ff"
            opacity="0.65"
          />
        </g>
      </svg>
    </div>
  );
}

