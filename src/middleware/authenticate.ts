import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { TContext } from "../context";
import { validateUser } from "../util/token";
import {
  ApolloError,
}  from "apollo-server";
import { Service } from "typedi";
import jwt, { verify } from "jsonwebtoken";
import { TokenKind } from "@prisma/client";
import { Token } from './../model/Token';

@Service()
export class Authenticate implements MiddlewareInterface<TContext> {

  constructor() { }
  
  async use({ context }: ResolverData<TContext>, next: NextFn) {
  
    const authHeader = context.req.headers.authorization

    if (authHeader == '') {
      throw new ApolloError("Usuário não está logado", "USER_UNAUTHENTICATED")
    }
      
    const token = authHeader.replace('Bearer', '').trim()
    const isValidToken = verify(token, process.env.APP_SECRET || '') as {
      userId: string
      type: TokenKind
      exp: number
    }

    if (isValidToken.type == TokenKind.REFRESH) {
      throw new ApolloError("Token inválido", "INVALID_TOKEN")
    }
    
    if (Date.now() >= isValidToken.exp * 1000) {
      throw new ApolloError("Token expirado", "INVALID_TOKEN")
    }
    
    if (!(isValidToken)) {
      throw new ApolloError("Usuário não está logado", "USER_UNAUTHENTICATED")
    }

    return next()
  }

}