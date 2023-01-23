import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateWithoutMassagerInput } from "../inputs/AppointmentUpdateWithoutMassagerInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpdateWithWhereUniqueWithoutMassagerInput", {
  isAbstract: true
})
export class AppointmentUpdateWithWhereUniqueWithoutMassagerInput {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentUpdateWithoutMassagerInput, {
    nullable: false
  })
  data!: AppointmentUpdateWithoutMassagerInput;
}
