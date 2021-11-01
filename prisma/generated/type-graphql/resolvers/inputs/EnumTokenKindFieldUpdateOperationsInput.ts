import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenKind } from "../../enums/TokenKind";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumTokenKindFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TokenKind, {
    nullable: true
  })
  set?: "REFRESH" | "AUTHENTICATE" | "RESET" | undefined;
}
