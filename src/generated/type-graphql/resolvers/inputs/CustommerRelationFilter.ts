import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerWhereInput } from "../inputs/CustommerWhereInput";

@TypeGraphQL.InputType("CustommerRelationFilter", {
  isAbstract: true
})
export class CustommerRelationFilter {
  @TypeGraphQL.Field(_type => CustommerWhereInput, {
    nullable: true
  })
  is?: CustommerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustommerWhereInput, {
    nullable: true
  })
  isNot?: CustommerWhereInput | undefined;
}
