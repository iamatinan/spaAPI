import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceWhereInput } from "../inputs/Recive_serviceWhereInput";

@TypeGraphQL.InputType("Recive_serviceListRelationFilter", {
  isAbstract: true
})
export class Recive_serviceListRelationFilter {
  @TypeGraphQL.Field(_type => Recive_serviceWhereInput, {
    nullable: true
  })
  every?: Recive_serviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceWhereInput, {
    nullable: true
  })
  some?: Recive_serviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceWhereInput, {
    nullable: true
  })
  none?: Recive_serviceWhereInput | undefined;
}
