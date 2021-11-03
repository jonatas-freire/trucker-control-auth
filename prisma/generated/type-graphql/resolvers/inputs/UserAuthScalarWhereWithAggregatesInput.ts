import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserAuthScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserAuthScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserAuthScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAuthScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserAuthScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAuthScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserAuthScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  cpf?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  emailToRecover?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  password?: StringWithAggregatesFilter | undefined;
}
