import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTokenKindFilter } from "../inputs/NestedEnumTokenKindFilter";
import { TokenKind } from "../../enums/TokenKind";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumTokenKindFilter {
  @TypeGraphQL.Field(_type => TokenKind, {
    nullable: true
  })
  equals?: "REFRESH" | "AUTHENTICATE" | "RESET" | undefined;

  @TypeGraphQL.Field(_type => [TokenKind], {
    nullable: true
  })
  in?: Array<"REFRESH" | "AUTHENTICATE" | "RESET"> | undefined;

  @TypeGraphQL.Field(_type => [TokenKind], {
    nullable: true
  })
  notIn?: Array<"REFRESH" | "AUTHENTICATE" | "RESET"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTokenKindFilter, {
    nullable: true
  })
  not?: NestedEnumTokenKindFilter | undefined;
}
