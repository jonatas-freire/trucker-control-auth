import { Arg, Ctx, Field, Int, Mutation, ObjectType, Query, Resolver, UseMiddleware } from "type-graphql";

import { Token, TokenKind } from "../model/Token";
import { Context } from "../context";

import { Authenticate } from "../middleware/authenticate";
import * as UserClient from '../client/User/UserClient'
import { Service } from "typedi";

@ObjectType()
export class TokenValid {
  @Field((type) => String!)
  accessToken: string

  @Field((type) => Boolean)
  valid: boolean
}

@Service()
@Resolver(Token)
export class TokenController {



  @UseMiddleware(Authenticate)
  @Query((returns) => TokenValid)
  async isValidToken(
    @Ctx() ctx: Context
  ) {
    
    const authHeader = ctx.req.headers.authorization
    const token = authHeader.replace('Bearer', '').trim()
    console.log({ authHeader, token })
    return {
      accessToken: token,
      valid: true
    }
  }



  
}