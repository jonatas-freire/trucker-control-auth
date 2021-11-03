import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAuthCreateInput } from "../../../inputs/UserAuthCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUserAuthArgs {
  @TypeGraphQL.Field(_type => UserAuthCreateInput, {
    nullable: false
  })
  data!: UserAuthCreateInput;
}
