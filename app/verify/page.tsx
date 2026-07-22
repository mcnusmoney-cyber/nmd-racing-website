"use client";

import { useState } from "react";

export default function VerifyPage() {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    window.location.href =
      `/api/warranty?keyword=${keyword}`;
  };

  return (
    <main className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-xl">

        <h1 className="text-5xl font-black mb-10 text-center">
          Warranty Verification
        </h1>

        <input
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
          placeholder="Warranty ID / Phone Number"
          className="w-full p-5 rounded-2xl bg-zinc-900 border border-zinc-700 mb-5"
        />

        <button
          onClick={handleSearch}
          className="w-full py-5 rounded-2xl bg-purple-600 font-bold"
        >
          Verify Warranty
        </button>

      </div>
    </main>
  );
}