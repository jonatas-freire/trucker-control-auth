import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAuthUpdateInput } from "../../../inputs/UserAuthUpdateInput";
import { UserAuthWhereUniqueInput } from "../../../inputs/UserAuthWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUserAuthArgs {
  @TypeGraphQL.Field(_type => UserAuthUpdateInput, {
    nullable: false
  })
  data!: UserAuthUpdateInput;

  @TypeGraphQL.Field(_type => UserAuthWhereUniqueInput, {
    nullable: false
  })
  where!: UserAuthWhereUniqueInput;
}
