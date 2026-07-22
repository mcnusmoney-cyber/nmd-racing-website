"use client";

export default function FloatingLine() {
  return (
    <a
      href="https://line.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-8
        right-8
        z-[999]
        group
      "
    >
      <div
        className="
          flex
          items-center
          gap-4
          rounded-full
          bg-[#06C755]
          px-6
          py-4
          shadow-[0_0_40px_rgba(6,199,85,.45)]
          transition-all
          duration-300
          hover:scale-110
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7 text-white"
        >
          <path d="M19.365 9.219c0-3.963-3.975-7.187-8.864-7.187S1.637 5.256 1.637 9.219c0 3.554 3.152 6.529 7.409 7.091.289.062.683.189.782.434.089.223.058.572.028.798l-.124.746c-.038.223-.173.872.764.475.937-.397 5.058-2.98 6.902-5.1 1.273-1.396 1.967-2.813 1.967-4.444z"/>
        </svg>

        <div className="hidden md:block">
          <div className="text-xs uppercase tracking-[4px] text-white/80">
            Chat With Us
          </div>

          <div className="font-bold text-white">
            LINE Official
          </div>
        </div>
      </div>
    </a>
  );
}