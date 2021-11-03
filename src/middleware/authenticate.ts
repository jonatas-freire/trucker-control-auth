import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { TContext } from "../context";
import { validateUser } from "../util/token";
import {
  ApolloError,
}  from "apollo-server";

export class Authenticate implements MiddlewareInterface<TContext> {

  constructor() { }
  
  async use({ context }: ResolverData<TContext>, next: NextFn) {
    console.log({
      context: context.req
    })
    if (!validateUser(context)) {
      throw new ApolloError("Usuário não está logado", "USER_UNAUTHENTICATED")
    }

    return next()
  }

}