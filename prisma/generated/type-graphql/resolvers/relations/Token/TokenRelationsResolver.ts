import * as TypeGraphQL from "type-graphql";
import { Token } from "../../../models/Token";
import { UserAuth } from "../../../models/UserAuth";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Token)
export class TokenRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => UserAuth, {
    nullable: true
  })
  async UserAuth(@TypeGraphQL.Root() token: Token, @TypeGraphQL.Ctx() ctx: any): Promise<UserAuth | null> {
    return getPrismaFromContext(ctx).token.findUnique({
      where: {
        id: token.id,
      },
    }).UserAuth({});
  }
}
