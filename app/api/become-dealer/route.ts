import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    dealerId: "DLR-" + Date.now().toString().slice(-6)
  });
}