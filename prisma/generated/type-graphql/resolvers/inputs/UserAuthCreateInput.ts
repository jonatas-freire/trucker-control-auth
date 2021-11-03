import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateNestedManyWithoutUserAuthInput } from "../inputs/TokenCreateNestedManyWithoutUserAuthInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserAuthCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cpf!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  emailToRecover!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => TokenCreateNestedManyWithoutUserAuthInput, {
    nullable: true
  })
  tokens?: TokenCreateNestedManyWithoutUserAuthInput | undefined;
}
