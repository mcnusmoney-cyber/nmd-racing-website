"use client";

import { useState } from "react";

export default function WarrantyPage() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function searchWarranty() {
    setLoading(true);

    const res = await fetch(
      `/api/warranty?keyword=${encodeURIComponent(keyword)}`
    );

    const data = await res.json();

    setResult(data);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-10">
      <h1 className="text-5xl font-bold mb-4">
        NMD Warranty Check
      </h1>

      <p className="text-zinc-400 mb-8">
        ตรวจสอบสถานะการรับประกันสินค้า NMD Racing
      </p>

      <div className="w-full max-w-xl">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="กรอกเบอร์โทรหรือหมายเลขรับประกัน"
          className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
        />

        <button
          onClick={searchWarranty}
          className="w-full mt-4 p-4 rounded-xl bg-purple-600 hover:bg-purple-700"
        >
          {loading ? "กำลังค้นหา..." : "ค้นหาประกัน"}
        </button>
      </div>

      {result?.success && (
        <div className="mt-10 bg-zinc-900 p-6 rounded-xl w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-4">
            {result.data.customer.name}
          </h2>

          <p>Warranty ID: {result.data.warrantyId}</p>
          <p>สินค้า: {result.data.product}</p>
          <p>สี: {result.data.color}</p>
          <p>สถานะ: {result.data.status}</p>

          <p className="mt-3">
            รถ: {result.data.customer.motorcycle}
          </p>

          <p>เบอร์โทร: {result.data.customer.phone}</p>
        </div>
      )}

      {result && !result.success && (
        <div className="mt-10 text-red-500">
          ไม่พบข้อมูลการรับประกัน
        </div>
      )}
    </main>
  );
}