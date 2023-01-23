import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateWithoutUserInput } from "../inputs/RoleCreateWithoutUserInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType("RoleCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class RoleCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, {
    nullable: false
  })
  where!: RoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoleCreateWithoutUserInput, {
    nullable: false
  })
  create!: RoleCreateWithoutUserInput;
}
