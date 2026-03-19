/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `designers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `designers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `designers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "designers" ADD COLUMN     "address" TEXT,
ADD COLUMN     "contactNumber" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "profilePhoto" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "designers_email_key" ON "designers"("email");

-- CreateIndex
CREATE INDEX "idx_designer_email" ON "designers"("email");
