import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAuthUpdateManyMutationInput } from "../../../inputs/UserAuthUpdateManyMutationInput";
import { UserAuthWhereInput } from "../../../inputs/UserAuthWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserAuthArgs {
  @TypeGraphQL.Field(_type => UserAuthUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserAuthUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserAuthWhereInput, {
    nullable: true
  })
  where?: UserAuthWhereInput | undefined;
}
