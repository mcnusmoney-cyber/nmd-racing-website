import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const ownerEmail = "admin@nmdracing.com";

  const exists = await prisma.user.findUnique({
    where: {
      email: ownerEmail,
    },
  });

  if (exists) {
    console.log("Owner already exists");
    return;
  }

  const passwordHash = await bcrypt.hash("NMD@2026", 12);

  await prisma.user.create({
    data: {
      name: "NMD Owner",
      email: ownerEmail,
      passwordHash,
      role: UserRole.OWNER,
      active: true,
    },
  });

  console.log("Owner created");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });