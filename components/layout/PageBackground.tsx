"use client";

export default function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">

      <div className="absolute left-1/2 top-[-220px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-purple-700/10 blur-[220px]" />

      <div className="absolute -left-60 bottom-0 h-[700px] w-[700px] rounded-full bg-fuchsia-700/10 blur-[180px]" />

      <div className="absolute -right-60 top-1/3 h-[650px] w-[650px] rounded-full bg-violet-700/10 blur-[180px]" />

      <div
        className="
          absolute inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.25)_75%,rgba(0,0,0,.8)_100%)]" />

    </div>
  );
}