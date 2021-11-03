import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAuthOrderByWithRelationInput } from "../../../inputs/UserAuthOrderByWithRelationInput";
import { UserAuthWhereInput } from "../../../inputs/UserAuthWhereInput";
import { UserAuthWhereUniqueInput } from "../../../inputs/UserAuthWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUserAuthArgs {
  @TypeGraphQL.Field(_type => UserAuthWhereInput, {
    nullable: true
  })
  where?: UserAuthWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserAuthOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserAuthOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserAuthWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserAuthWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
