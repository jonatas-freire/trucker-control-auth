import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTokenKindFieldUpdateOperationsInput } from "../inputs/EnumTokenKindFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserAuthUpdateOneWithoutTokensInput } from "../inputs/UserAuthUpdateOneWithoutTokensInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  token?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumTokenKindFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumTokenKindFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserAuthUpdateOneWithoutTokensInput, {
    nullable: true
  })
  UserAuth?: UserAuthUpdateOneWithoutTokensInput | undefined;
}
