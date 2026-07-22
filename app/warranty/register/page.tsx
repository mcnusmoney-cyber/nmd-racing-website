"use client";

import { useState } from "react";

export default function WarrantyRegisterPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    plateNumber: "",
    vehicle: "",
    wheel: "",
    serialNumber: "",
    dealer: "",
    installDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/warranty/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert(
  `ลงทะเบียนสำเร็จ

Warranty ID: ${result.data.warrantyId}`
);

        window.location.href =
          `/verify?keyword=${result.data.warrantyId}`;
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("เกิดข้อผิดพลาด");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <div className="text-purple-400 tracking-[0.3em] mb-3">
            WARRANTY REGISTRATION
          </div>

          <h1 className="text-5xl font-black mb-4">
            Register Your Warranty
          </h1>

          <p className="text-zinc-400">
            ลงทะเบียนรับประกันสินค้า NMD Racing ภายใน 7 วันหลังการติดตั้ง
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            name="customerName"
            placeholder="ชื่อ - นามสกุล"
            value={formData.customerName}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
            required
          />

          <input
            name="phone"
            placeholder="เบอร์โทรศัพท์"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
            required
          />

          <input
            name="plateNumber"
            placeholder="ทะเบียนรถ"
            value={formData.plateNumber}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
            required
          />

          <input
            name="vehicle"
            placeholder="รุ่นรถ"
            value={formData.vehicle}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
            required
          />

          <input
            name="wheel"
            placeholder="ล้อ"
            value={formData.wheel}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
            required
          />

          <input
            name="serialNumber"
            placeholder="Serial Number"
            value={formData.serialNumber}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
          />

          <input
            name="dealer"
            placeholder="ตัวแทนจำหน่าย"
            value={formData.dealer}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
          />

          <input
            name="installDate"
            type="date"
            value={formData.installDate}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-5
              rounded-full
              bg-gradient-to-r
              from-purple-700
              to-fuchsia-500
              font-bold
              text-lg
            "
          >
            {loading
              ? "กำลังลงทะเบียน..."
              : "ลงทะเบียนรับประกัน"}
          </button>
        </form>
      </div>
    </main>
  );
}