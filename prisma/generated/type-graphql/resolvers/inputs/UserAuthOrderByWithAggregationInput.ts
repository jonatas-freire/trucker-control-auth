import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserAuthCountOrderByAggregateInput } from "../inputs/UserAuthCountOrderByAggregateInput";
import { UserAuthMaxOrderByAggregateInput } from "../inputs/UserAuthMaxOrderByAggregateInput";
import { UserAuthMinOrderByAggregateInput } from "../inputs/UserAuthMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserAuthOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cpf?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  emailToRecover?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserAuthCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserAuthCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserAuthMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserAuthMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserAuthMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserAuthMinOrderByAggregateInput | undefined;
}
