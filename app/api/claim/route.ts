import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const claimId = `CLM-${Date.now().toString().slice(-6)}`;

    const claim = await prisma.claim.create({
      data: {
        claimId,
        issue: body.issue,
        image: body.image || null,
        warrantyId: body.warrantyId,
      },
    });

    return NextResponse.json({
      success: true,
      claim,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to create claim",
      },
      {
        status: 500,
      }
    );
  }
}