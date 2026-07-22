import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const warrantyId =
      `NMD-${Date.now()}`;

    const installDate = new Date(
      body.installDate
    );

    const expiryDate = new Date(
      installDate
    );

    expiryDate.setFullYear(
      expiryDate.getFullYear() + 1
    );

    const warranty =
      await prisma.warranty.create({
        data: {
          warrantyId,

          customerName:
            body.customerName,

          phone: body.phone,

          plateNumber:
            body.plateNumber,

          vehicle:
            body.vehicle,

          wheel:
            body.wheel,

          serialNumber:
            body.serialNumber,

          dealer:
            body.dealer,

          installDate,

          expiryDate,
        },
      });

    return NextResponse.json({
      success: true,
      data: warranty,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "เกิดข้อผิดพลาดในการลงทะเบียน",
      },
      {
        status: 500,
      }
    );
  }
}