import { Arg, Ctx, Field, Mutation, ObjectType, Resolver } from "type-graphql";
import bcrypt from 'bcrypt'
import { ApolloError } from "apollo-server";
import { Context } from "../context";
import { UserAuth } from "../model/UserAuth";
import { UserAuthUtils } from '../service/UserAuthService';
import { Inject, Service } from "typedi";
import { TokenService } from "../service/TokenService";
import { TokenKind } from "@prisma/client";

@ObjectType()
class UserLogged {

  @Field((type) => String)
  accessToken: string

  @Field((type) => String)
  refreshToken: string

  @Field((type) => Boolean)
  isTemporallyPassword: boolean

}

@Service()
@Resolver(UserAuth)
export class UserAuthController {

  constructor(
    @Inject("TokenService") private readonly tokenService: TokenService,
    @Inject("UserAuthService") private readonly userAuthUtils: UserAuthUtils) { }

  @Mutation((returns) => UserLogged)
  async login(
    @Arg("cpf") cpf: string,
    @Arg("password") password: string,
  ): Promise<UserLogged> {


    const auth = await this.userAuthUtils.existAuth(cpf)

    if (auth.created && auth.user) {
      const isValidPassword = await bcrypt.compare(password, auth.user.password)
      if (!isValidPassword)
        throw new ApolloError('Ops! Senha inválida, verifique e tente novamente', 'WRONG_PASSWORD') 
      
      const { accessToken, refreshToken } = await this.tokenService.createLoginTokens(auth.user.id)
      return {
        accessToken,
        refreshToken,
        isTemporallyPassword: auth.user.emailToRecover == "",
      }
    }

    const { user, permission } = await this.userAuthUtils.existUserAndPermission(cpf, 'SYSTEM')
    if (!user) {
      throw new ApolloError('Ops! Usuário não encontrado.', 'USER_NOT_FOUND')
    }
    if (!permission) {
      throw new ApolloError('Ops! Você não possui acesso liberado.', 'NO_AUTHORIZED')
    }

    if (!this.userAuthUtils.validateTemporallyPassword(user, password)) {
      throw new ApolloError('Ops! Senha inválida, verifique e tente novamente', 'WRONG_PASSWORD')   
    }
    console.log({
      user
    })
    const response = await this.userAuthUtils.createUserAuth({
      cpf: user.cpf,
      id: user.id,
      emailToRecover: "",
      password: await bcrypt.hash(password, 10)
    })

    console.log({
      response
    })
    
    const { accessToken, refreshToken } = await this.tokenService.createLoginTokens(user.id)
    return {
      accessToken,
      refreshToken,
      isTemporallyPassword: true,
    }
  }
}