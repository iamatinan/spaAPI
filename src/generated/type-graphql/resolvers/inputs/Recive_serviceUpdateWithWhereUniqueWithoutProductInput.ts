import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceUpdateWithoutProductInput } from "../inputs/Recive_serviceUpdateWithoutProductInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceUpdateWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class Recive_serviceUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: Recive_serviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Recive_serviceUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Recive_serviceUpdateWithoutProductInput;
}
