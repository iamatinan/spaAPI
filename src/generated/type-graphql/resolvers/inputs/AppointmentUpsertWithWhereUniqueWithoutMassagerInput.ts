import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateWithoutMassagerInput } from "../inputs/AppointmentCreateWithoutMassagerInput";
import { AppointmentUpdateWithoutMassagerInput } from "../inputs/AppointmentUpdateWithoutMassagerInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpsertWithWhereUniqueWithoutMassagerInput", {
  isAbstract: true
})
export class AppointmentUpsertWithWhereUniqueWithoutMassagerInput {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentUpdateWithoutMassagerInput, {
    nullable: false
  })
  update!: AppointmentUpdateWithoutMassagerInput;

  @TypeGraphQL.Field(_type => AppointmentCreateWithoutMassagerInput, {
    nullable: false
  })
  create!: AppointmentCreateWithoutMassagerInput;
}
