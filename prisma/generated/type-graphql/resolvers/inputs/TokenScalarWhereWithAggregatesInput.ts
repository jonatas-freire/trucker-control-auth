import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumTokenKindWithAggregatesFilter } from "../inputs/EnumTokenKindWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  token?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTokenKindWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumTokenKindWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
