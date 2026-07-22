import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const keyword = searchParams.get("keyword");

  if (!keyword) {
    return NextResponse.json(
      {
        success: false,
        message: "Keyword is required",
      },
      {
        status: 400,
      }
    );
  }

  const warranty = await prisma.warranty.findFirst({
    where: {
      OR: [
        {
          warrantyId: keyword,
        },
        {
          phone: keyword,
        },
        {
          serialNumber: keyword,
        },
        {
          plateNumber: keyword,
        },
      ],
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
    data: warranty,
  });
}