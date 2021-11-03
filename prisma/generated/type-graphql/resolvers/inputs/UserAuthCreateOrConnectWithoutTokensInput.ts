import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserAuthCreateWithoutTokensInput } from "../inputs/UserAuthCreateWithoutTokensInput";
import { UserAuthWhereUniqueInput } from "../inputs/UserAuthWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserAuthCreateOrConnectWithoutTokensInput {
  @TypeGraphQL.Field(_type => UserAuthWhereUniqueInput, {
    nullable: false
  })
  where!: UserAuthWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserAuthCreateWithoutTokensInput, {
    nullable: false
  })
  create!: UserAuthCreateWithoutTokensInput;
}
