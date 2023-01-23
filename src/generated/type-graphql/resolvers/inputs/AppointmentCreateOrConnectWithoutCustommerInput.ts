import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateWithoutCustommerInput } from "../inputs/AppointmentCreateWithoutCustommerInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentCreateOrConnectWithoutCustommerInput", {
  isAbstract: true
})
export class AppointmentCreateOrConnectWithoutCustommerInput {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentCreateWithoutCustommerInput, {
    nullable: false
  })
  create!: AppointmentCreateWithoutCustommerInput;
}
