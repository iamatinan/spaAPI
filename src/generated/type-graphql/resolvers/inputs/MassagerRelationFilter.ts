import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MassagerWhereInput } from "../inputs/MassagerWhereInput";

@TypeGraphQL.InputType("MassagerRelationFilter", {
  isAbstract: true
})
export class MassagerRelationFilter {
  @TypeGraphQL.Field(_type => MassagerWhereInput, {
    nullable: true
  })
  is?: MassagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => MassagerWhereInput, {
    nullable: true
  })
  isNot?: MassagerWhereInput | undefined;
}
