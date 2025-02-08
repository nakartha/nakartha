/*
  Warnings:

  - The primary key for the `Group` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Group_CreatedAt` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `Group_Name` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `Group_Type` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `pk_Group_GroupID` on the `Group` table. All the data in the column will be lost.
  - The primary key for the `Transaction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Transaction_Amount` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `Transaction_Description` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `fk_Transaction_GroupId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `fk_Transaction_PayerId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `pk_Transaction_TransactionID` on the `Transaction` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `User_CreatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `User_Email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `User_Name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `User_Password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `pk_User_UserID` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `GroupMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TransactionSplit` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Group` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupId` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TransactionCategory" AS ENUM ('RENT', 'UTILITIES', 'GROCERIES', 'TRANSPORTATION', 'HEALTHCARE', 'INSURANCE', 'EDUCATION', 'FOOD', 'TRAVEL', 'SHOPPING', 'ENTERTAINMENT', 'SUBSCRIPTIONS', 'GYM', 'SPORTS', 'SALARY', 'INVESTMENT', 'LOAN_PAYMENT', 'TAXES', 'SAVINGS', 'DEBT_PAYMENT', 'GIFTS', 'HOUSEHOLD', 'PETS', 'PERSONAL_CARE', 'OTHER');

-- DropForeignKey
ALTER TABLE "GroupMember" DROP CONSTRAINT "GroupMember_fk_GroupMember_GroupId_fkey";

-- DropForeignKey
ALTER TABLE "GroupMember" DROP CONSTRAINT "GroupMember_fk_GroupMember_UserID_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_fk_Transaction_GroupId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_fk_Transaction_PayerId_fkey";

-- DropForeignKey
ALTER TABLE "TransactionSplit" DROP CONSTRAINT "TransactionSplit_fk_TransactionSplit_TransactionId_fkey";

-- DropForeignKey
ALTER TABLE "TransactionSplit" DROP CONSTRAINT "TransactionSplit_fk_TransactionSplit_UserId_fkey";

-- DropIndex
DROP INDEX "User_User_Email_key";

-- AlterTable
ALTER TABLE "Group" DROP CONSTRAINT "Group_pkey",
DROP COLUMN "Group_CreatedAt",
DROP COLUMN "Group_Name",
DROP COLUMN "Group_Type",
DROP COLUMN "pk_Group_GroupID",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "Group_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_pkey",
DROP COLUMN "Transaction_Amount",
DROP COLUMN "Transaction_Description",
DROP COLUMN "fk_Transaction_GroupId",
DROP COLUMN "fk_Transaction_PayerId",
DROP COLUMN "pk_Transaction_TransactionID",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "category" "TransactionCategory" NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "groupId" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "User_CreatedAt",
DROP COLUMN "User_Email",
DROP COLUMN "User_Name",
DROP COLUMN "User_Password",
DROP COLUMN "pk_User_UserID",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "GroupMember";

-- DropTable
DROP TABLE "TransactionSplit";

-- CreateTable
CREATE TABLE "GroupUser" (
    "userId" INTEGER NOT NULL,
    "groupId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GroupUser_pkey" PRIMARY KEY ("userId","groupId")
);

-- CreateTable
CREATE TABLE "TransactionUser" (
    "userId" INTEGER NOT NULL,
    "transactionId" INTEGER NOT NULL,
    "paidAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "owedAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "TransactionUser_pkey" PRIMARY KEY ("userId","transactionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "GroupUser" ADD CONSTRAINT "GroupUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupUser" ADD CONSTRAINT "GroupUser_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionUser" ADD CONSTRAINT "TransactionUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionUser" ADD CONSTRAINT "TransactionUser_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
