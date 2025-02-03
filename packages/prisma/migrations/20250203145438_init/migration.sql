-- CreateTable
CREATE TABLE "User" (
    "pk_User_UserID" SERIAL NOT NULL,
    "User_Email" TEXT NOT NULL,
    "User_Name" TEXT,
    "User_Avatar" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("pk_User_UserID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_User_Email_key" ON "User"("User_Email");
