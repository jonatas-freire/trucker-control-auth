import 'reflect-metadata'
import { ApolloError } from "apollo-server";
import { Inject, Service } from "typedi";
import { format, toDate } from 'date-fns'

import { User } from "../model/User";
import { UserClient } from '../client/User/UserClient'
import { Prisma, UserAuth } from '@prisma/client';
import { Context } from '../context';


@Service('UserAuthService')
export class UserAuthUtils {
  
  constructor(
    @Inject("Context") private readonly context: Context,
    @Inject("UserClient") private readonly userClient: UserClient,
  ) {}

  async existUser(cpf: string): Promise<User | null> {
    const user = await this.userClient.getByCpf(cpf)
    return user
  }

  async createUserAuth(args: Prisma.UserAuthCreateInput): Promise<UserAuth> {
    console.log({
      args
    })
    return this.context.prisma.userAuth.create({
      data: args
    })
  }

  async existUserAndPermission(cpf: string, accessType: string): Promise<{ user: User | null, permission: boolean }> {
    const user = await this.existUser(cpf)
    if (accessType == 'SYSTEM' && user && user.systemAccess) {
      return { user, permission: true }
    }
    return { user, permission: false }
    
  }

  validateTemporallyPassword(user: User, password: string): boolean {
    return password !== `${toDate(user.birthday)}${format(toDate(user.birthday), 'MMyyyy')}`
  }

  async existAuth(cpf: string): Promise<{ user?: UserAuth | null, created: boolean }> {

    const userAuth = await this.context.prisma.userAuth.findFirst({
      where: {
        cpf
      }
    })
    return { created: userAuth != null, user: userAuth }
  }
}
