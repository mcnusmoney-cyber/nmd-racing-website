"use client";

export default function VideoShowcase() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      >
        <source
          src="/videos/nmd-showcase.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="
        absolute
        inset-0
        bg-black/70
      " />

      {/* Purple Glow */}
      <div className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[700px]
        h-[700px]
        bg-purple-600/20
        rounded-full
        blur-[180px]
      " />

      {/* Content */}
      <div className="
        relative
        z-10
        h-full
        flex
        items-center
        justify-center
        text-center
        px-6
      ">

        <div>

          <div className="
            text-purple-400
            tracking-[0.4em]
            mb-8
          ">
            NMD RACING
          </div>

          <h2 className="
            text-6xl
            lg:text-8xl
            font-black
            leading-[0.95]
            mb-8
          ">
            CRAFTED
            <br />

            WITH
            <span className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-purple-400
              to-fuchsia-500
            ">
              {" "}
              PRECISION
            </span>

            <br />

            BUILT FOR
            <br />

            RIDERS
          </h2>

          <p className="
            text-zinc-300
            text-xl
            max-w-3xl
            mx-auto
          ">
            Precision CNC machining,
            premium finishing and
            engineering inspired by riders.
          </p>

        </div>

      </div>

    </section>
  );
}