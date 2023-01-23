import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerCreateWithoutAppointmentInput } from "../inputs/CustommerCreateWithoutAppointmentInput";
import { CustommerUpdateWithoutAppointmentInput } from "../inputs/CustommerUpdateWithoutAppointmentInput";

@TypeGraphQL.InputType("CustommerUpsertWithoutAppointmentInput", {
  isAbstract: true
})
export class CustommerUpsertWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => CustommerUpdateWithoutAppointmentInput, {
    nullable: false
  })
  update!: CustommerUpdateWithoutAppointmentInput;

  @TypeGraphQL.Field(_type => CustommerCreateWithoutAppointmentInput, {
    nullable: false
  })
  create!: CustommerCreateWithoutAppointmentInput;
}
