"use client";

import { useEffect, useState } from "react";

interface DealerPerformance {
  name: string;
  province: string;
  sales: number;
  warranties: number;
  claims: number;
  target: number;
}

export default function DealerPerformancePage() {
  const [dealers, setDealers] = useState<DealerPerformance[]>([]);

  useEffect(() => {
    fetch("/api/dealer")
      .then((res) => res.json())
      .then((data) => {
        setDealers(data);
      });
  }, []);

  const totalSales = dealers.reduce(
    (sum, dealer) => sum + dealer.sales,
    0
  );

  const totalWarranty = dealers.reduce(
    (sum, dealer) => sum + dealer.warranties,
    0
  );

  const totalClaims = dealers.reduce(
    (sum, dealer) => sum + dealer.claims,
    0
  );

  return (
    <main className="min-h-screen text-white">
      <div className="mb-10">
        <h1 className="text-5xl font-black">
          Dealer Performance
        </h1>

        <p className="text-zinc-400 mt-3">
          วิเคราะห์ผลการดำเนินงานของตัวแทนจำหน่าย NMD Racing
        </p>
      </div>

      {/* KPI */}
      <div className="grid md:grid-cols-4 gap-5 mb-10">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-500">Total Dealers</p>
          <h2 className="text-4xl font-black mt-2">
            {dealers.length}
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-500">Total Sales</p>
          <h2 className="text-4xl font-black text-fuchsia-400 mt-2">
            {totalSales}
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-500">Warranty Registrations</p>
          <h2 className="text-4xl font-black text-green-400 mt-2">
            {totalWarranty}
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-500">Claims</p>
          <h2 className="text-4xl font-black text-yellow-400 mt-2">
            {totalClaims}
          </h2>
        </div>

      </div>

      {/* Dealer Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

        <div className="grid grid-cols-7 gap-4 p-5 font-bold border-b border-zinc-800 bg-zinc-950">
          <div>Dealer</div>
          <div>Province</div>
          <div>Sales</div>
          <div>Warranty</div>
          <div>Claims</div>
          <div>Target</div>
          <div>Progress</div>
        </div>

        {dealers.map((dealer, index) => {
          const progress = Math.round(
            (dealer.sales / dealer.target) * 100
          );

          return (
            <div
              key={index}
              className="grid grid-cols-7 gap-4 p-5 border-b border-zinc-800"
            >
              <div className="font-bold">
                {dealer.name}
              </div>

              <div>{dealer.province}</div>
              <div>{dealer.sales}</div>
              <div>{dealer.warranties}</div>
              <div>{dealer.claims}</div>
              <div>{dealer.target}</div>

              <div>
                <div className="w-full bg-zinc-800 rounded-full h-3">
                  <div
                    className="bg-fuchsia-500 h-3 rounded-full"
                    style={{
                      width: `${Math.min(progress, 100)}%`,
                    }}
                  />
                </div>

                <p className="text-sm text-zinc-400 mt-1">
                  {progress}%
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </main>
  );
}