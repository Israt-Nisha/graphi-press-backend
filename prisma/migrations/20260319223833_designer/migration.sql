-- CreateTable
CREATE TABLE "designers" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "displayName" TEXT,
    "bio" TEXT,
    "expertise" VARCHAR(255),
    "portfolioUrl" VARCHAR(512),
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalReviews" INTEGER NOT NULL DEFAULT 0,
    "totalAssignedItems" INTEGER NOT NULL DEFAULT 0,
    "totalCompletedItems" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "designers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "designers_userId_key" ON "designers"("userId");

-- CreateIndex
CREATE INDEX "idx_designer_userId" ON "designers"("userId");

-- CreateIndex
CREATE INDEX "idx_designer_isActive" ON "designers"("isActive");

-- CreateIndex
CREATE INDEX "idx_designer_isDeleted" ON "designers"("isDeleted");

-- AddForeignKey
ALTER TABLE "designers" ADD CONSTRAINT "designers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
