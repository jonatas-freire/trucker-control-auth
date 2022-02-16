import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { UserAuth } from "../models/UserAuth";
import { TokenKind } from "../enums/TokenKind";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Token {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => TokenKind, {
    nullable: false
  })
  type!: "REFRESH" | "AUTHENTICATE" | "RESET";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  UserAuth?: UserAuth | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userAuthId?: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  roles!: string[];
}
