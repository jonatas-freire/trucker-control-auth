import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAuthWhereUniqueInput } from "../../../inputs/UserAuthWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserAuthArgs {
  @TypeGraphQL.Field(_type => UserAuthWhereUniqueInput, {
    nullable: false
  })
  where!: UserAuthWhereUniqueInput;
}
