import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserAuthCountAggregate } from "../outputs/UserAuthCountAggregate";
import { UserAuthMaxAggregate } from "../outputs/UserAuthMaxAggregate";
import { UserAuthMinAggregate } from "../outputs/UserAuthMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateUserAuth {
  @TypeGraphQL.Field(_type => UserAuthCountAggregate, {
    nullable: true
  })
  _count!: UserAuthCountAggregate | null;

  @TypeGraphQL.Field(_type => UserAuthMinAggregate, {
    nullable: true
  })
  _min!: UserAuthMinAggregate | null;

  @TypeGraphQL.Field(_type => UserAuthMaxAggregate, {
    nullable: true
  })
  _max!: UserAuthMaxAggregate | null;
}
