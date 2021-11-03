import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAuthOrderByWithAggregationInput } from "../../../inputs/UserAuthOrderByWithAggregationInput";
import { UserAuthScalarWhereWithAggregatesInput } from "../../../inputs/UserAuthScalarWhereWithAggregatesInput";
import { UserAuthWhereInput } from "../../../inputs/UserAuthWhereInput";
import { UserAuthScalarFieldEnum } from "../../../../enums/UserAuthScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserAuthArgs {
  @TypeGraphQL.Field(_type => UserAuthWhereInput, {
    nullable: true
  })
  where?: UserAuthWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserAuthOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserAuthOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAuthScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "cpf" | "emailToRecover" | "password">;

  @TypeGraphQL.Field(_type => UserAuthScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserAuthScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
