import { Arg, Ctx, Int, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";

import { Token, TokenKind } from "../model/Token";
import { Context } from "../context";

import { Authenticate } from "../middleware/authenticate";
import * as UserClient from '../client/User/UserClient'
@Resolver(Token)
export class TokenController {

  @UseMiddleware(Authenticate)
  @Query((returns) => Token)
  async users(
    @Ctx() ctx: Context
  ) {
    const role = await ctx.prisma.token.findFirst()
    if (role?.type) {
      console.log(role?.type == TokenKind.AUTHENTICATE)
    }

    return role
  }



  
}