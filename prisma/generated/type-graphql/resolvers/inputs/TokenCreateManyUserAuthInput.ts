import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateManyrolesInput } from "../inputs/TokenCreateManyrolesInput";
import { TokenKind } from "../../enums/TokenKind";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenCreateManyUserAuthInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => TokenKind, {
    nullable: false
  })
  type!: "REFRESH" | "AUTHENTICATE" | "RESET";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TokenCreateManyrolesInput, {
    nullable: true
  })
  roles?: TokenCreateManyrolesInput | undefined;
}
