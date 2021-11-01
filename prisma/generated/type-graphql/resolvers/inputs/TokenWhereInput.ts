import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTokenKindFilter } from "../inputs/EnumTokenKindFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenWhereInput {
  @TypeGraphQL.Field(_type => [TokenWhereInput], {
    nullable: true
  })
  AND?: TokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereInput], {
    nullable: true
  })
  OR?: TokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereInput], {
    nullable: true
  })
  NOT?: TokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  token?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTokenKindFilter, {
    nullable: true
  })
  type?: EnumTokenKindFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
