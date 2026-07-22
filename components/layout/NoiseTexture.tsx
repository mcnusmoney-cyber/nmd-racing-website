"use client";

export default function NoiseTexture() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        fixed
        inset-0
        -z-40
        opacity-[0.035]
        mix-blend-soft-light
      "
      style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(255,255,255,.22) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(255,255,255,.18) 1px, transparent 1px)
        `,
        backgroundSize: "22px 22px",
      }}
    />
  );
}