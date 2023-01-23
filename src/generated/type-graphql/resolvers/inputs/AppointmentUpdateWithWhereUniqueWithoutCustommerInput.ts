import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateWithoutCustommerInput } from "../inputs/AppointmentUpdateWithoutCustommerInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpdateWithWhereUniqueWithoutCustommerInput", {
  isAbstract: true
})
export class AppointmentUpdateWithWhereUniqueWithoutCustommerInput {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentUpdateWithoutCustommerInput, {
    nullable: false
  })
  data!: AppointmentUpdateWithoutCustommerInput;
}
