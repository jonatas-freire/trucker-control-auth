import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserAuthWhereInput } from "../inputs/UserAuthWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserAuthRelationFilter {
  @TypeGraphQL.Field(_type => UserAuthWhereInput, {
    nullable: true
  })
  is?: UserAuthWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserAuthWhereInput, {
    nullable: true
  })
  isNot?: UserAuthWhereInput | undefined;
}
