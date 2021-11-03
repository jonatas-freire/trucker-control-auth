import * as TypeGraphQL from "type-graphql";

export enum UserAuthScalarFieldEnum {
  id = "id",
  cpf = "cpf",
  emailToRecover = "emailToRecover",
  password = "password"
}
TypeGraphQL.registerEnumType(UserAuthScalarFieldEnum, {
  name: "UserAuthScalarFieldEnum",
  description: undefined,
});
