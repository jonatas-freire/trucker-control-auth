import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateWithoutUserAuthInput } from "../inputs/TokenCreateWithoutUserAuthInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenCreateOrConnectWithoutUserAuthInput {
  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: false
  })
  where!: TokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => TokenCreateWithoutUserAuthInput, {
    nullable: false
  })
  create!: TokenCreateWithoutUserAuthInput;
}
