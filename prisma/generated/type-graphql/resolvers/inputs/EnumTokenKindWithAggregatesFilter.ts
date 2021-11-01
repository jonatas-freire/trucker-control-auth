import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTokenKindFilter } from "../inputs/NestedEnumTokenKindFilter";
import { NestedEnumTokenKindWithAggregatesFilter } from "../inputs/NestedEnumTokenKindWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { TokenKind } from "../../enums/TokenKind";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumTokenKindWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTokenKindWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTokenKindWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTokenKindFilter, {
    nullable: true
  })
  _min?: NestedEnumTokenKindFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTokenKindFilter, {
    nullable: true
  })
  _max?: NestedEnumTokenKindFilter | undefined;
}
