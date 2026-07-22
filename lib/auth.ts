import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function authenticate(
  email: string,
  password: string
) {
  const user = await prisma.user.findUnique({
    where: {
      email: email.toLowerCase(),
    },
    include: {
      dealer: true,
    },
  });

  if (!user) {
    return null;
  }

  if (!user.active) {
    return null;
  }

  const valid = await bcrypt.compare(
    password,
    user.passwordHash
  );

  if (!valid) {
    return null;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    dealerId: user.dealerId,
  };
}