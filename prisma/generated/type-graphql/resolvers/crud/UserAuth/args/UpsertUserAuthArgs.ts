import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAuthCreateInput } from "../../../inputs/UserAuthCreateInput";
import { UserAuthUpdateInput } from "../../../inputs/UserAuthUpdateInput";
import { UserAuthWhereUniqueInput } from "../../../inputs/UserAuthWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUserAuthArgs {
  @TypeGraphQL.Field(_type => UserAuthWhereUniqueInput, {
    nullable: false
  })
  where!: UserAuthWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserAuthCreateInput, {
    nullable: false
  })
  create!: UserAuthCreateInput;

  @TypeGraphQL.Field(_type => UserAuthUpdateInput, {
    nullable: false
  })
  update!: UserAuthUpdateInput;
}
