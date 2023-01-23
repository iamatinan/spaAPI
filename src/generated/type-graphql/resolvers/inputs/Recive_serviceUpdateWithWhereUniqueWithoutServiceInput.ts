import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceUpdateWithoutServiceInput } from "../inputs/Recive_serviceUpdateWithoutServiceInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceUpdateWithWhereUniqueWithoutServiceInput", {
  isAbstract: true
})
export class Recive_serviceUpdateWithWhereUniqueWithoutServiceInput {
  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: Recive_serviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Recive_serviceUpdateWithoutServiceInput, {
    nullable: false
  })
  data!: Recive_serviceUpdateWithoutServiceInput;
}
