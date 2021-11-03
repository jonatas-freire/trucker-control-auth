import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserAuthCreateOrConnectWithoutTokensInput } from "../inputs/UserAuthCreateOrConnectWithoutTokensInput";
import { UserAuthCreateWithoutTokensInput } from "../inputs/UserAuthCreateWithoutTokensInput";
import { UserAuthUpdateWithoutTokensInput } from "../inputs/UserAuthUpdateWithoutTokensInput";
import { UserAuthUpsertWithoutTokensInput } from "../inputs/UserAuthUpsertWithoutTokensInput";
import { UserAuthWhereUniqueInput } from "../inputs/UserAuthWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserAuthUpdateOneWithoutTokensInput {
  @TypeGraphQL.Field(_type => UserAuthCreateWithoutTokensInput, {
    nullable: true
  })
  create?: UserAuthCreateWithoutTokensInput | undefined;

  @TypeGraphQL.Field(_type => UserAuthCreateOrConnectWithoutTokensInput, {
    nullable: true
  })
  connectOrCreate?: UserAuthCreateOrConnectWithoutTokensInput | undefined;

  @TypeGraphQL.Field(_type => UserAuthUpsertWithoutTokensInput, {
    nullable: true
  })
  upsert?: UserAuthUpsertWithoutTokensInput | undefined;

  @TypeGraphQL.Field(_type => UserAuthWhereUniqueInput, {
    nullable: true
  })
  connect?: UserAuthWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserAuthUpdateWithoutTokensInput, {
    nullable: true
  })
  update?: UserAuthUpdateWithoutTokensInput | undefined;
}
