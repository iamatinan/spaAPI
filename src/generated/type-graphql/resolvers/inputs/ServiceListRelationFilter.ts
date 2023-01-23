import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceWhereInput } from "../inputs/ServiceWhereInput";

@TypeGraphQL.InputType("ServiceListRelationFilter", {
  isAbstract: true
})
export class ServiceListRelationFilter {
  @TypeGraphQL.Field(_type => ServiceWhereInput, {
    nullable: true
  })
  every?: ServiceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ServiceWhereInput, {
    nullable: true
  })
  some?: ServiceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ServiceWhereInput, {
    nullable: true
  })
  none?: ServiceWhereInput | undefined;
}
