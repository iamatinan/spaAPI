import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutRoleInput } from "../inputs/UserCreateNestedManyWithoutRoleInput";

@TypeGraphQL.InputType("RoleCreateInput", {
  isAbstract: true
})
export class RoleCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  role_name!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRoleInput, {
    nullable: true
  })
  user?: UserCreateNestedManyWithoutRoleInput | undefined;
}
