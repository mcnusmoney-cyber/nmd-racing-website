"use client";

import QRCode from "react-qr-code";

interface Props {
  warrantyId: string;
}

export default function WarrantyQRCode({
  warrantyId,
}: Props) {
  return (
    <div className="
      bg-white
      p-4
      rounded-2xl
      inline-block
    ">
      <QRCode
        value={`https://nmdracing.com/warranty/${warrantyId}`}
        size={180}
      />
    </div>
  );
}