import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserAuthCreateWithoutTokensInput } from "../inputs/UserAuthCreateWithoutTokensInput";
import { UserAuthUpdateWithoutTokensInput } from "../inputs/UserAuthUpdateWithoutTokensInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserAuthUpsertWithoutTokensInput {
  @TypeGraphQL.Field(_type => UserAuthUpdateWithoutTokensInput, {
    nullable: false
  })
  update!: UserAuthUpdateWithoutTokensInput;

  @TypeGraphQL.Field(_type => UserAuthCreateWithoutTokensInput, {
    nullable: false
  })
  create!: UserAuthCreateWithoutTokensInput;
}
