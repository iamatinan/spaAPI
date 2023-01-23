import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateWithoutRecive_serviceInput } from "../inputs/AppointmentCreateWithoutRecive_serviceInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentCreateOrConnectWithoutRecive_serviceInput", {
  isAbstract: true
})
export class AppointmentCreateOrConnectWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentCreateWithoutRecive_serviceInput, {
    nullable: false
  })
  create!: AppointmentCreateWithoutRecive_serviceInput;
}
