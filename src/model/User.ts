import 'reflect-metadata'
import { Field, ID, ObjectType, registerEnumType } from 'type-graphql'


@ObjectType()
export class User {

  @Field((type) => ID)
  id: string
  
  @Field((type) => String)
  email: string

  @Field((type) => String)
  cpf: string
    
  @Field((type) => String)
  name: string

  @Field((type) => Date)
  birthday: Date

  @Field((type) => String)
  systemAccess: string
}