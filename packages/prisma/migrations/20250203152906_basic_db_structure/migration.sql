/*
  Warnings:

  - You are about to drop the column `User_Avatar` on the `User` table. All the data in the column will be lost.
  - Made the column `User_Name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "User_Avatar",
ADD COLUMN     "User_CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "User_Name" SET NOT NULL;

-- CreateTable
CREATE TABLE "Group" (
    "pk_Group_GroupID" SERIAL NOT NULL,
    "Group_Name" TEXT NOT NULL,
    "Group_Type" TEXT NOT NULL,
    "Group_CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("pk_Group_GroupID")
);

-- CreateTable
CREATE TABLE "GroupMember" (
    "pk_GroupMember_GroupMemberID" SERIAL NOT NULL,
    "fk_GroupMember_UserID" INTEGER NOT NULL,
    "fk_GroupMember_GroupId" INTEGER NOT NULL,

    CONSTRAINT "GroupMember_pkey" PRIMARY KEY ("pk_GroupMember_GroupMemberID")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "pk_Transaction_TransactionID" SERIAL NOT NULL,
    "Transaction_Description" TEXT NOT NULL,
    "Transaction_Amount" DOUBLE PRECISION NOT NULL,
    "fk_Transaction_PayerId" INTEGER NOT NULL,
    "fk_Transaction_GroupId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("pk_Transaction_TransactionID")
);

-- CreateTable
CREATE TABLE "TransactionSplit" (
    "pk_TransactionSplit_TransactionSplitID" SERIAL NOT NULL,
    "fk_TransactionSplit_TransactionId" INTEGER NOT NULL,
    "fk_TransactionSplit_UserId" INTEGER NOT NULL,
    "TransactionSplit_Amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TransactionSplit_pkey" PRIMARY KEY ("pk_TransactionSplit_TransactionSplitID")
);

-- CreateIndex
CREATE UNIQUE INDEX "GroupMember_fk_GroupMember_UserID_fk_GroupMember_GroupId_key" ON "GroupMember"("fk_GroupMember_UserID", "fk_GroupMember_GroupId");

-- CreateIndex
CREATE UNIQUE INDEX "TransactionSplit_fk_TransactionSplit_TransactionId_fk_Trans_key" ON "TransactionSplit"("fk_TransactionSplit_TransactionId", "fk_TransactionSplit_UserId");

-- AddForeignKey
ALTER TABLE "GroupMember" ADD CONSTRAINT "GroupMember_fk_GroupMember_UserID_fkey" FOREIGN KEY ("fk_GroupMember_UserID") REFERENCES "User"("pk_User_UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMember" ADD CONSTRAINT "GroupMember_fk_GroupMember_GroupId_fkey" FOREIGN KEY ("fk_GroupMember_GroupId") REFERENCES "Group"("pk_Group_GroupID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_fk_Transaction_PayerId_fkey" FOREIGN KEY ("fk_Transaction_PayerId") REFERENCES "User"("pk_User_UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_fk_Transaction_GroupId_fkey" FOREIGN KEY ("fk_Transaction_GroupId") REFERENCES "Group"("pk_Group_GroupID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionSplit" ADD CONSTRAINT "TransactionSplit_fk_TransactionSplit_TransactionId_fkey" FOREIGN KEY ("fk_TransactionSplit_TransactionId") REFERENCES "Transaction"("pk_Transaction_TransactionID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionSplit" ADD CONSTRAINT "TransactionSplit_fk_TransactionSplit_UserId_fkey" FOREIGN KEY ("fk_TransactionSplit_UserId") REFERENCES "User"("pk_User_UserID") ON DELETE RESTRICT ON UPDATE CASCADE;
