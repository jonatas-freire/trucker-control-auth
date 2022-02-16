import { PrismaClient } from "@prisma/client";
import { ContainerInstance } from "typedi";

const prisma = new PrismaClient()

export interface TContext {
  requestId: string;
  prisma: PrismaClient
  req: any
  response: any
  container: ContainerInstance
}

export type Context = TContext

export function createContext(req: any): TContext {
  return {
    ...req,
    prisma
  }
}