import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateNestedManyWithoutMassagerInput } from "../inputs/AppointmentCreateNestedManyWithoutMassagerInput";

@TypeGraphQL.InputType("MassagerCreateWithoutRecive_serviceInput", {
  isAbstract: true
})
export class MassagerCreateWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

  @TypeGraphQL.Field(_type => AppointmentCreateNestedManyWithoutMassagerInput, {
    nullable: true
  })
  appointment?: AppointmentCreateNestedManyWithoutMassagerInput | undefined;
}
