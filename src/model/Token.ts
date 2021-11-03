import 'reflect-metadata'
import { Field, ID, ObjectType, registerEnumType } from 'type-graphql'


@ObjectType()
export class Token {

  @Field((type) => ID)
  id: number
  
  @Field((type) => String)
  token: string

  @Field((type) => TokenKind)
  type: TokenKind
    
  @Field((type) => Date)
  createdAt: Date

  @Field((type) => Date)
  updatedAt: Date


}

export enum TokenKind {
  REFRESH = 'REFRESH',
  AUTHENTICATE  = 'AUTHENTICATE',
  RESET  = 'RESET'
}

registerEnumType(
  TokenKind, {
    name: 'TokenKind',
    description: 'A type of token can be',
  }
)