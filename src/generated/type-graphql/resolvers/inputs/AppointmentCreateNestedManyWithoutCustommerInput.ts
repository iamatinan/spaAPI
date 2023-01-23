import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyCustommerInputEnvelope } from "../inputs/AppointmentCreateManyCustommerInputEnvelope";
import { AppointmentCreateOrConnectWithoutCustommerInput } from "../inputs/AppointmentCreateOrConnectWithoutCustommerInput";
import { AppointmentCreateWithoutCustommerInput } from "../inputs/AppointmentCreateWithoutCustommerInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentCreateNestedManyWithoutCustommerInput", {
  isAbstract: true
})
export class AppointmentCreateNestedManyWithoutCustommerInput {
  @TypeGraphQL.Field(_type => [AppointmentCreateWithoutCustommerInput], {
    nullable: true
  })
  create?: AppointmentCreateWithoutCustommerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentCreateOrConnectWithoutCustommerInput], {
    nullable: true
  })
  connectOrCreate?: AppointmentCreateOrConnectWithoutCustommerInput[] | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateManyCustommerInputEnvelope, {
    nullable: true
  })
  createMany?: AppointmentCreateManyCustommerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AppointmentWhereUniqueInput[] | undefined;
}
