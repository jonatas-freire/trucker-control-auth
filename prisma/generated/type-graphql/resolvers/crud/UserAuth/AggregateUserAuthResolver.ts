import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserAuthArgs } from "./args/AggregateUserAuthArgs";
import { UserAuth } from "../../../models/UserAuth";
import { AggregateUserAuth } from "../../outputs/AggregateUserAuth";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserAuth)
export class AggregateUserAuthResolver {
  @TypeGraphQL.Query(_returns => AggregateUserAuth, {
    nullable: false
  })
  async aggregateUserAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserAuthArgs): Promise<AggregateUserAuth> {
    return getPrismaFromContext(ctx).userAuth.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
