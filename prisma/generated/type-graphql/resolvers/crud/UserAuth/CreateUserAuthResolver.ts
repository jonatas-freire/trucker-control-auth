import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateUserAuthArgs } from "./args/CreateUserAuthArgs";
import { UserAuth } from "../../../models/UserAuth";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserAuth)
export class CreateUserAuthResolver {
  @TypeGraphQL.Mutation(_returns => UserAuth, {
    nullable: false
  })
  async createUserAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateUserAuthArgs): Promise<UserAuth> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userAuth.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
