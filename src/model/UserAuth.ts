import { Token } from 'graphql';
import 'reflect-metadata'
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class UserAuth {

  @Field((type) => ID)
  id: string

  @Field((type) => String)
  cpf: string

  @Field((type) => String)
  emailToRecover: string
  
  @Field((type) => String)
  password: string

  @Field((type) => Boolean)
  systemAccess: boolean
  // @Field((type) => [Token])
  // tokens?: Token[]

}