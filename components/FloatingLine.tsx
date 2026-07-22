"use client";

export default function FloatingLine() {
  const lineUrl =
    "https://line.me/R/ti/p/@YOUR_LINE_ID";

  return (
    <a
      href={lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-16
        h-16
        rounded-full
        bg-[#06C755]
        flex
        items-center
        justify-center
        shadow-2xl
        hover:scale-110
        transition
        duration-300
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M19.365 9.969c0-4.418-4.197-8.012-9.365-8.012S.635 5.551.635 9.969c0 3.96 3.331 7.276 7.834 7.905.305.066.72.204.825.468.095.24.062.617.03.859l-.134.81c-.041.24-.186.938.822.511 1.008-.427 5.438-3.201 7.418-5.481h-.001c1.367-1.499 1.936-3.02 1.936-5.072z"/>
      </svg>
    </a>
  );
}