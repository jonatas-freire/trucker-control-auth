import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateManyUserAuthInputEnvelope } from "../inputs/TokenCreateManyUserAuthInputEnvelope";
import { TokenCreateOrConnectWithoutUserAuthInput } from "../inputs/TokenCreateOrConnectWithoutUserAuthInput";
import { TokenCreateWithoutUserAuthInput } from "../inputs/TokenCreateWithoutUserAuthInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenCreateNestedManyWithoutUserAuthInput {
  @TypeGraphQL.Field(_type => [TokenCreateWithoutUserAuthInput], {
    nullable: true
  })
  create?: TokenCreateWithoutUserAuthInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenCreateOrConnectWithoutUserAuthInput], {
    nullable: true
  })
  connectOrCreate?: TokenCreateOrConnectWithoutUserAuthInput[] | undefined;

  @TypeGraphQL.Field(_type => TokenCreateManyUserAuthInputEnvelope, {
    nullable: true
  })
  createMany?: TokenCreateManyUserAuthInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  connect?: TokenWhereUniqueInput[] | undefined;
}
