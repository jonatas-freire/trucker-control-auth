import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAuthWhereInput } from "../../../inputs/UserAuthWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserAuthArgs {
  @TypeGraphQL.Field(_type => UserAuthWhereInput, {
    nullable: true
  })
  where?: UserAuthWhereInput | undefined;
}
