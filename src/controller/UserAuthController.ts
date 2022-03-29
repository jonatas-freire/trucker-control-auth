import { Arg, Ctx, Field, Mutation, ObjectType, Resolver, UseMiddleware } from "type-graphql";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ApolloError } from "apollo-server";
import { Context } from "../context";
import { UserAuth } from "../model/UserAuth";
import { UserAuthUtils } from '../service/UserAuthService';
import { Inject, Service } from "typedi";
import { TokenService } from "../service/TokenService";
import { TokenKind } from "@prisma/client";
import { EmailUtils } from './../util/EmailUtils';
import { RecoverPasswordTemplate } from "../templates/RecoverPasswordTemplate";
import { Authenticate } from "../middleware/authenticate";

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
    @Inject("UserAuthService") private readonly userAuthUtils: UserAuthUtils,
    @Inject("EmailUtils") private readonly emailUtils: EmailUtils
  ) { }


  @UseMiddleware(Authenticate)
  @Mutation((returns) => UserLogged)
  async resetPassword(
    @Arg("newPassword") newPassword: string,
    @Ctx() context: Context
  ) {
    const token = context.req.headers.authorization.replace("Bearer", "").trim()
    const { userId } = jwt.decode(token) as { userId: string }

    const userTokenRequest = await context.prisma.token.findFirst({
      where: {
        token,
        userAuthId: userId,
        type: TokenKind.RESET
      }
    })

    if (!userTokenRequest) {
      throw new ApolloError("Não foi possivel alterar a senha", "BAD_REQUEST")
    }
    
    const updatedUserAuth = await this.userAuthUtils.updateUserAuth(userTokenRequest.userAuthId || '', {
      password: await bcrypt.hash(newPassword, 10)
    })

    if (!updatedUserAuth) {
      throw new ApolloError("Não foi possivel alterar a senha", "INTERNAL_SERVER_ERROR")
    }
    
    return this.login(context, updatedUserAuth.cpf, newPassword)


  }

  
  @Mutation((returns) => Boolean)
  async forgetPassword(
    @Arg("emailToRecover") emailToRecover: string,
    @Ctx() context: Context
  ) {

    const userAuth = await context.prisma.userAuth.findFirst({
      where: {
        emailToRecover
      }
    })

    if (!userAuth) {
      throw new ApolloError("Usuário não encontrado", "USER_NOT_FOUND")
    }

    const resetToken = await this.tokenService.createToken(userAuth.id, TokenKind.RESET)

    
    await this.emailUtils.sendEmail(
      userAuth.emailToRecover,
      "Recuperação de senha - Associjá",
      RecoverPasswordTemplate(
        resetToken.token, ''
      )
    )
    return true
    

  }
  
  @Mutation((returns) => UserLogged)
  async login(
    @Ctx() context: Context,
    @Arg("cpf") cpf: string,
    @Arg("password") password: string,
  ): Promise<UserLogged> {


    const auth = await this.userAuthUtils.existAuth(cpf)

    console.log({ auth })

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
    console.log("chamou")
    const { user, permission } = await this.userAuthUtils.existUserAndPermission(cpf, 'SYSTEM')
    if (!user) 
      throw new ApolloError('Ops! Usuário não encontrado.', 'USER_NOT_FOUND')
    
    if (!permission) 
      throw new ApolloError('Ops! Você não possui acesso liberado.', 'NO_AUTHORIZED')

    if (!this.userAuthUtils.validateTemporallyPassword(user, password)) 
      throw new ApolloError('Ops! Senha inválida, verifique e tente novamente', 'WRONG_PASSWORD')   
    
    this.userAuthUtils.createUserAuth({
      cpf: user.cpf,
      id: user.id,
      emailToRecover: "",
      password: await bcrypt.hash(password, 10)
    })

    const { accessToken, refreshToken } = await this.tokenService.createLoginTokens(user.id)
    
    return {
      accessToken,
      refreshToken,
      isTemporallyPassword: true,
    }
  }
}