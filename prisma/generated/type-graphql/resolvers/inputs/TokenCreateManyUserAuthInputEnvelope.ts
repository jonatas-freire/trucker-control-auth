import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateManyUserAuthInput } from "../inputs/TokenCreateManyUserAuthInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenCreateManyUserAuthInputEnvelope {
  @TypeGraphQL.Field(_type => [TokenCreateManyUserAuthInput], {
    nullable: false
  })
  data!: TokenCreateManyUserAuthInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
