import 'reflect-metadata'
import { Field, ID, ObjectType } from 'type-graphql'

export enum TokenKind {
  REFRESH,
  AUTHENTICATE,
  RESET
}

@ObjectType()
export class Token {

  @Field((type) => ID)
  id: number
  
  @Field((type) => String)
  token: string

  @Field(() => TokenKind)
  type: TokenKind
    
  @Field((type) => Date)
  createdAt: Date

  @Field((type) => Date)
  updatedAt: Date


}