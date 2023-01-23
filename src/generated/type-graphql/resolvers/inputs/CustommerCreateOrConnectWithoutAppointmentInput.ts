import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustommerCreateWithoutAppointmentInput } from "../inputs/CustommerCreateWithoutAppointmentInput";
import { CustommerWhereUniqueInput } from "../inputs/CustommerWhereUniqueInput";

@TypeGraphQL.InputType("CustommerCreateOrConnectWithoutAppointmentInput", {
  isAbstract: true
})
export class CustommerCreateOrConnectWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => CustommerWhereUniqueInput, {
    nullable: false
  })
  where!: CustommerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustommerCreateWithoutAppointmentInput, {
    nullable: false
  })
  create!: CustommerCreateWithoutAppointmentInput;
}
