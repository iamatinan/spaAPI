import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateWithoutServiceInput } from "../inputs/Recive_serviceCreateWithoutServiceInput";
import { Recive_serviceUpdateWithoutServiceInput } from "../inputs/Recive_serviceUpdateWithoutServiceInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceUpsertWithWhereUniqueWithoutServiceInput", {
  isAbstract: true
})
export class Recive_serviceUpsertWithWhereUniqueWithoutServiceInput {
  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: Recive_serviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Recive_serviceUpdateWithoutServiceInput, {
    nullable: false
  })
  update!: Recive_serviceUpdateWithoutServiceInput;

  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutServiceInput, {
    nullable: false
  })
  create!: Recive_serviceCreateWithoutServiceInput;
}
