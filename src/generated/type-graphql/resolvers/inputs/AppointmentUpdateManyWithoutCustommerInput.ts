import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyCustommerInputEnvelope } from "../inputs/AppointmentCreateManyCustommerInputEnvelope";
import { AppointmentCreateOrConnectWithoutCustommerInput } from "../inputs/AppointmentCreateOrConnectWithoutCustommerInput";
import { AppointmentCreateWithoutCustommerInput } from "../inputs/AppointmentCreateWithoutCustommerInput";
import { AppointmentScalarWhereInput } from "../inputs/AppointmentScalarWhereInput";
import { AppointmentUpdateManyWithWhereWithoutCustommerInput } from "../inputs/AppointmentUpdateManyWithWhereWithoutCustommerInput";
import { AppointmentUpdateWithWhereUniqueWithoutCustommerInput } from "../inputs/AppointmentUpdateWithWhereUniqueWithoutCustommerInput";
import { AppointmentUpsertWithWhereUniqueWithoutCustommerInput } from "../inputs/AppointmentUpsertWithWhereUniqueWithoutCustommerInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpdateManyWithoutCustommerInput", {
  isAbstract: true
})
export class AppointmentUpdateManyWithoutCustommerInput {
  @TypeGraphQL.Field(_type => [AppointmentCreateWithoutCustommerInput], {
    nullable: true
  })
  create?: AppointmentCreateWithoutCustommerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentCreateOrConnectWithoutCustommerInput], {
    nullable: true
  })
  connectOrCreate?: AppointmentCreateOrConnectWithoutCustommerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentUpsertWithWhereUniqueWithoutCustommerInput], {
    nullable: true
  })
  upsert?: AppointmentUpsertWithWhereUniqueWithoutCustommerInput[] | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateManyCustommerInputEnvelope, {
    nullable: true
  })
  createMany?: AppointmentCreateManyCustommerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  set?: AppointmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AppointmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  delete?: AppointmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AppointmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentUpdateWithWhereUniqueWithoutCustommerInput], {
    nullable: true
  })
  update?: AppointmentUpdateWithWhereUniqueWithoutCustommerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentUpdateManyWithWhereWithoutCustommerInput], {
    nullable: true
  })
  updateMany?: AppointmentUpdateManyWithWhereWithoutCustommerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AppointmentScalarWhereInput[] | undefined;
}
