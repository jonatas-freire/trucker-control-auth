import * as TypeGraphQL from "type-graphql";

export enum TokenKind {
  REFRESH = "REFRESH",
  AUTHENTICATE = "AUTHENTICATE",
  RESET = "RESET"
}
TypeGraphQL.registerEnumType(TokenKind, {
  name: "TokenKind",
  description: undefined,
});
