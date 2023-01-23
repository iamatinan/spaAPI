import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyCustommerInput } from "../inputs/AppointmentCreateManyCustommerInput";

@TypeGraphQL.InputType("AppointmentCreateManyCustommerInputEnvelope", {
  isAbstract: true
})
export class AppointmentCreateManyCustommerInputEnvelope {
  @TypeGraphQL.Field(_type => [AppointmentCreateManyCustommerInput], {
    nullable: false
  })
  data!: AppointmentCreateManyCustommerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
