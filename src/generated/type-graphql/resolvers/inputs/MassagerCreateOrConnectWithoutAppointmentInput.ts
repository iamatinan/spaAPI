import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MassagerCreateWithoutAppointmentInput } from "../inputs/MassagerCreateWithoutAppointmentInput";
import { MassagerWhereUniqueInput } from "../inputs/MassagerWhereUniqueInput";

@TypeGraphQL.InputType("MassagerCreateOrConnectWithoutAppointmentInput", {
  isAbstract: true
})
export class MassagerCreateOrConnectWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => MassagerWhereUniqueInput, {
    nullable: false
  })
  where!: MassagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MassagerCreateWithoutAppointmentInput, {
    nullable: false
  })
  create!: MassagerCreateWithoutAppointmentInput;
}
