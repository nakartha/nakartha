/*
  Warnings:

  - Added the required column `User_Password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "User_Password" TEXT NOT NULL;
