import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateManyUserAuthInputEnvelope } from "../inputs/TokenCreateManyUserAuthInputEnvelope";
import { TokenCreateOrConnectWithoutUserAuthInput } from "../inputs/TokenCreateOrConnectWithoutUserAuthInput";
import { TokenCreateWithoutUserAuthInput } from "../inputs/TokenCreateWithoutUserAuthInput";
import { TokenScalarWhereInput } from "../inputs/TokenScalarWhereInput";
import { TokenUpdateManyWithWhereWithoutUserAuthInput } from "../inputs/TokenUpdateManyWithWhereWithoutUserAuthInput";
import { TokenUpdateWithWhereUniqueWithoutUserAuthInput } from "../inputs/TokenUpdateWithWhereUniqueWithoutUserAuthInput";
import { TokenUpsertWithWhereUniqueWithoutUserAuthInput } from "../inputs/TokenUpsertWithWhereUniqueWithoutUserAuthInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenUpdateManyWithoutUserAuthInput {
  @TypeGraphQL.Field(_type => [TokenCreateWithoutUserAuthInput], {
    nullable: true
  })
  create?: TokenCreateWithoutUserAuthInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenCreateOrConnectWithoutUserAuthInput], {
    nullable: true
  })
  connectOrCreate?: TokenCreateOrConnectWithoutUserAuthInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenUpsertWithWhereUniqueWithoutUserAuthInput], {
    nullable: true
  })
  upsert?: TokenUpsertWithWhereUniqueWithoutUserAuthInput[] | undefined;

  @TypeGraphQL.Field(_type => TokenCreateManyUserAuthInputEnvelope, {
    nullable: true
  })
  createMany?: TokenCreateManyUserAuthInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  connect?: TokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  set?: TokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  delete?: TokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenUpdateWithWhereUniqueWithoutUserAuthInput], {
    nullable: true
  })
  update?: TokenUpdateWithWhereUniqueWithoutUserAuthInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenUpdateManyWithWhereWithoutUserAuthInput], {
    nullable: true
  })
  updateMany?: TokenUpdateManyWithWhereWithoutUserAuthInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TokenScalarWhereInput[] | undefined;
}
