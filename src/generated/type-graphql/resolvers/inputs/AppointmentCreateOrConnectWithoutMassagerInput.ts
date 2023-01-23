import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateWithoutMassagerInput } from "../inputs/AppointmentCreateWithoutMassagerInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentCreateOrConnectWithoutMassagerInput", {
  isAbstract: true
})
export class AppointmentCreateOrConnectWithoutMassagerInput {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentCreateWithoutMassagerInput, {
    nullable: false
  })
  create!: AppointmentCreateWithoutMassagerInput;
}
