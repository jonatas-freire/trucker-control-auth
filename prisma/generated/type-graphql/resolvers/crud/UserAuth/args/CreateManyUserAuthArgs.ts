import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAuthCreateManyInput } from "../../../inputs/UserAuthCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserAuthArgs {
  @TypeGraphQL.Field(_type => [UserAuthCreateManyInput], {
    nullable: false
  })
  data!: UserAuthCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
