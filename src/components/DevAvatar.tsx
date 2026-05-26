export type DevAvatarProps = {
  size?: number;
  className?: string;
  glow?: boolean;
  imageSrc?: string;
  ariaLabel?: string;
};

/** Premium portrait frame for portfolio identity */
export default function DevAvatar({
  size = 280,
  className = "",
  glow = false,
  imageSrc = "/assets/Saksham1.jpeg",
  ariaLabel = "Saksham Bhore",
}: DevAvatarProps) {
  return (
    <div
      className={`relative rounded-[2rem] overflow-hidden ${className}`}
      style={{
        width: size,
        height: size * 1.15,
        boxShadow: glow
          ? "0 0 0 1px rgba(215,226,234,0.12), 0 24px 80px rgba(0,245,255,0.12), 0 16px 48px rgba(0,0,0,0.5)"
          : "0 0 0 1px rgba(215,226,234,0.08), 0 20px 60px rgba(0,0,0,0.45)",
      }}
      role="img"
      aria-label={ariaLabel}
    >
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 55%, rgba(12,12,12,0.85) 100%)",
        }}
      />
      <img
        src={imageSrc}
        alt={ariaLabel}
        className="w-full h-full object-cover object-top"
        loading="eager"
      />
      <div
        className="absolute inset-0 z-[5] pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(0,245,255,0.25) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
