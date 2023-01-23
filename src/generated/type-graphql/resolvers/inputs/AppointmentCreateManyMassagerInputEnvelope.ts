import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyMassagerInput } from "../inputs/AppointmentCreateManyMassagerInput";

@TypeGraphQL.InputType("AppointmentCreateManyMassagerInputEnvelope", {
  isAbstract: true
})
export class AppointmentCreateManyMassagerInputEnvelope {
  @TypeGraphQL.Field(_type => [AppointmentCreateManyMassagerInput], {
    nullable: false
  })
  data!: AppointmentCreateManyMassagerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
