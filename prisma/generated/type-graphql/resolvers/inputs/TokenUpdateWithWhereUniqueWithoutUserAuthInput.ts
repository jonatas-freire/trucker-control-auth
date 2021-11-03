import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenUpdateWithoutUserAuthInput } from "../inputs/TokenUpdateWithoutUserAuthInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenUpdateWithWhereUniqueWithoutUserAuthInput {
  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: false
  })
  where!: TokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => TokenUpdateWithoutUserAuthInput, {
    nullable: false
  })
  data!: TokenUpdateWithoutUserAuthInput;
}
