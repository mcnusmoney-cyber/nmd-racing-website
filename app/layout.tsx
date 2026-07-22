import type { Metadata } from "next";
import "./globals.css";

import FloatingLine from "@/components/FloatingLine";
import FloatingMenu from "@/components/layout/FloatingMenu";
export const metadata: Metadata = {
  metadataBase: new URL("https://nmd-racing.vercel.app"),

  title: {
    default: "NMD Racing | Premium CNC Motorcycle Wheels",
    template: "%s | NMD Racing",
  },

  description:
    "Premium CNC motorcycle wheels for FORZA and XMAX. Authentic 10-Spoke Y Design with diamond cut two tone finish.",

  keywords: [
    "NMD Racing",
    "FORZA Wheel",
    "XMAX Wheel",
    "CNC Wheel",
    "Motorcycle Wheel",
    "RONIN VI",
    "10-Spoke Y Design",
  ],

  openGraph: {
    title: "NMD Racing",
    description:
      "Premium CNC Motorcycle Wheels",
    url: "https://nmd-racing.vercel.app",
    siteName: "NMD Racing",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NMD Racing",
    description:
      "Premium CNC Motorcycle Wheels",
    images: ["/og-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
        <FloatingLine />
        <FloatingMenu />
      </body>
    </html>
  );
}