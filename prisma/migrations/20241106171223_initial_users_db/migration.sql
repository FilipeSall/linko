-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('adm', 'standard');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "nicheId" INTEGER NOT NULL,
    "role" "Roles" NOT NULL DEFAULT 'standard',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Niches" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "icon" VARCHAR(255),

    CONSTRAINT "Niches_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_nicheId_fkey" FOREIGN KEY ("nicheId") REFERENCES "Niches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
