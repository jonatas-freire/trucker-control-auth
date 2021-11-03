import * as TypeGraphQL from "type-graphql";
import { Token } from "../../../models/Token";
import { UserAuth } from "../../../models/UserAuth";
import { UserAuthTokensArgs } from "./args/UserAuthTokensArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserAuth)
export class UserAuthRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Token], {
    nullable: false
  })
  async tokens(@TypeGraphQL.Root() userAuth: UserAuth, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserAuthTokensArgs): Promise<Token[]> {
    return getPrismaFromContext(ctx).userAuth.findUnique({
      where: {
        id: userAuth.id,
      },
    }).tokens(args);
  }
}
