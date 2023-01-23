import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("RoleWhereInput", {
  isAbstract: true
})
export class RoleWhereInput {
  @TypeGraphQL.Field(_type => [RoleWhereInput], {
    nullable: true
  })
  AND?: RoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereInput], {
    nullable: true
  })
  OR?: RoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereInput], {
    nullable: true
  })
  NOT?: RoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  role_name?: StringFilter | undefined;
}
