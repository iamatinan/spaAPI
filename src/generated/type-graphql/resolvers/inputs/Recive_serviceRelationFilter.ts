import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceWhereInput } from "../inputs/Recive_serviceWhereInput";

@TypeGraphQL.InputType("Recive_serviceRelationFilter", {
  isAbstract: true
})
export class Recive_serviceRelationFilter {
  @TypeGraphQL.Field(_type => Recive_serviceWhereInput, {
    nullable: true
  })
  is?: Recive_serviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceWhereInput, {
    nullable: true
  })
  isNot?: Recive_serviceWhereInput | undefined;
}
