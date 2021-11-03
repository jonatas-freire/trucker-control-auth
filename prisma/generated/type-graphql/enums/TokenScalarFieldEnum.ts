import * as TypeGraphQL from "type-graphql";

export enum TokenScalarFieldEnum {
  id = "id",
  token = "token",
  type = "type",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userAuthId = "userAuthId"
}
TypeGraphQL.registerEnumType(TokenScalarFieldEnum, {
  name: "TokenScalarFieldEnum",
  description: undefined,
});
