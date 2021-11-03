import { Prisma, Token, TokenKind } from "@prisma/client";
import { Inject, Service } from "typedi";
import jwt from 'jsonwebtoken'
import { Context } from "../context";


@Service("TokenService")
export class TokenService {


  constructor(
    @Inject("Context") private readonly context: Context 
  ) {}

  async createToken(
    userId: string,
    type: TokenKind
  ): Promise<Token> {
    const expiresIn = 
    type == TokenKind.AUTHENTICATE ?  '4 hrs' :
    type == TokenKind.REFRESH ? '30 days'
          : '15 days'
    console.log({ expiresIn })
    const token = jwt.sign({
      userId,
      type
    }, process.env.APP_SECRET || '', { expiresIn: expiresIn})
    return this.context.prisma.token.create({
      data: {
        userAuthId: userId,
        type,
        token: token
      }
    })
  }

  async createLoginTokens(
    userId: string,
  ): Promise<{
    refreshToken: string,
    accessToken: string,
  }> {
    const authToken = this.createToken(userId, TokenKind.AUTHENTICATE)
    const refreshToken = this.createToken(userId, TokenKind.REFRESH)

    const tokens = await Promise.all([authToken, refreshToken])

    return {
      accessToken: tokens[0].token,
      refreshToken: tokens[1].token
    }

  }

}