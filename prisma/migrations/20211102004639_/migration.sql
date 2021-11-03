-- CreateEnum
CREATE TYPE "TokenKind" AS ENUM ('REFRESH', 'AUTHENTICATE', 'RESET');

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "type" "TokenKind" NOT NULL DEFAULT E'AUTHENTICATE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);
