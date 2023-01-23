import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateWithoutCustommerInput } from "../inputs/AppointmentCreateWithoutCustommerInput";
import { AppointmentUpdateWithoutCustommerInput } from "../inputs/AppointmentUpdateWithoutCustommerInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpsertWithWhereUniqueWithoutCustommerInput", {
  isAbstract: true
})
export class AppointmentUpsertWithWhereUniqueWithoutCustommerInput {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentUpdateWithoutCustommerInput, {
    nullable: false
  })
  update!: AppointmentUpdateWithoutCustommerInput;

  @TypeGraphQL.Field(_type => AppointmentCreateWithoutCustommerInput, {
    nullable: false
  })
  create!: AppointmentCreateWithoutCustommerInput;
}
