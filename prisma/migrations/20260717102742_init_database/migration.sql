-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT,
    "motorcycle" TEXT,
    "plate" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warranty" (
    "id" TEXT NOT NULL,
    "warrantyId" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "vehicle" TEXT NOT NULL,
    "wheel" TEXT NOT NULL,
    "serialNumber" TEXT,
    "dealer" TEXT NOT NULL,
    "installDate" TIMESTAMP(3) NOT NULL,
    "expiryDate" TIMESTAMP(3),
    "slipImage" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "customerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Warranty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Claim" (
    "id" TEXT NOT NULL,
    "claimId" TEXT NOT NULL,
    "issue" TEXT NOT NULL,
    "image" TEXT,
    "status" TEXT NOT NULL DEFAULT 'RECEIVED',
    "warrantyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Claim_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dealer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "phone" TEXT,
    "facebook" TEXT,
    "sales" INTEGER NOT NULL DEFAULT 0,
    "warranties" INTEGER NOT NULL DEFAULT 0,
    "claims" INTEGER NOT NULL DEFAULT 0,
    "target" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dealer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Garage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "vehicle" TEXT NOT NULL,
    "wheelModel" TEXT NOT NULL,
    "wheelColor" TEXT NOT NULL,
    "installDate" TIMESTAMP(3) NOT NULL,
    "warrantyEnd" TIMESTAMP(3) NOT NULL,
    "dealer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Garage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Warranty_warrantyId_key" ON "Warranty"("warrantyId");

-- CreateIndex
CREATE UNIQUE INDEX "Warranty_serialNumber_key" ON "Warranty"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Claim_claimId_key" ON "Claim"("claimId");

-- AddForeignKey
ALTER TABLE "Warranty" ADD CONSTRAINT "Warranty_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Claim" ADD CONSTRAINT "Claim_warrantyId_fkey" FOREIGN KEY ("warrantyId") REFERENCES "Warranty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
