import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const {
    email,
    password,
  } = await request.json();

  if (
    email ===
      process.env.ADMIN_EMAIL &&
    password ===
      process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json({
      success: true,
      role: "OWNER",
    });
  }

  if (
    email ===
      process.env.STAFF_EMAIL &&
    password ===
      process.env.STAFF_PASSWORD
  ) {
    return NextResponse.json({
      success: true,
      role: "STAFF",
    });
  }

  if (
    email ===
      process.env.DEALER_EMAIL &&
    password ===
      process.env.DEALER_PASSWORD
  ) {
    return NextResponse.json({
      success: true,
      role: "DEALER",
    });
  }

  return NextResponse.json({
    success: false,
  });
}