-- AlterTable
ALTER TABLE "Token" ADD COLUMN     "userAuthId" TEXT,
ALTER COLUMN "type" DROP DEFAULT;

-- CreateTable
CREATE TABLE "UserAuth" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "emailToRecover" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserAuth_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_userAuthId_fkey" FOREIGN KEY ("userAuthId") REFERENCES "UserAuth"("id") ON DELETE SET NULL ON UPDATE CASCADE;
