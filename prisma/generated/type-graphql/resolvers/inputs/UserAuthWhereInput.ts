import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { TokenListRelationFilter } from "../inputs/TokenListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserAuthWhereInput {
  @TypeGraphQL.Field(_type => [UserAuthWhereInput], {
    nullable: true
  })
  AND?: UserAuthWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAuthWhereInput], {
    nullable: true
  })
  OR?: UserAuthWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAuthWhereInput], {
    nullable: true
  })
  NOT?: UserAuthWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  cpf?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  emailToRecover?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TokenListRelationFilter, {
    nullable: true
  })
  tokens?: TokenListRelationFilter | undefined;
}
