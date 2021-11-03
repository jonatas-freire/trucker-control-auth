import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Token } from "../models/Token";
import { UserAuthCount } from "../resolvers/outputs/UserAuthCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UserAuth {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cpf!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  emailToRecover!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  tokens?: Token[];

  @TypeGraphQL.Field(_type => UserAuthCount, {
    nullable: true
  })
  _count?: UserAuthCount | null;
}
