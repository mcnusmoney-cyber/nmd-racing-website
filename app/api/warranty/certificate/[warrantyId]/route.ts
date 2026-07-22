import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ warrantyId: string }> }
) {
  const { warrantyId } = await params;

  const warranty = await prisma.warranty.findUnique({
    where: {
      warrantyId,
    },
    include: {
      customer: true,
      claims: true,
    },
  });

  if (!warranty) {
    return NextResponse.json(
      {
        success: false,
        message: "Warranty not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({
    success: true,
    warranty,
    verifyUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/verify/${warranty.warrantyId}`,
  });
}