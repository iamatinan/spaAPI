import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateWithoutAppointmentInput } from "../inputs/Recive_serviceCreateWithoutAppointmentInput";
import { Recive_serviceWhereUniqueInput } from "../inputs/Recive_serviceWhereUniqueInput";

@TypeGraphQL.InputType("Recive_serviceCreateOrConnectWithoutAppointmentInput", {
  isAbstract: true
})
export class Recive_serviceCreateOrConnectWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: false
  })
  where!: Recive_serviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Recive_serviceCreateWithoutAppointmentInput, {
    nullable: false
  })
  create!: Recive_serviceCreateWithoutAppointmentInput;
}
