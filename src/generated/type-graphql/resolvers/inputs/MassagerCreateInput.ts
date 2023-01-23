import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateNestedManyWithoutMassagerInput } from "../inputs/AppointmentCreateNestedManyWithoutMassagerInput";
import { Recive_serviceCreateNestedOneWithoutMassagerInput } from "../inputs/Recive_serviceCreateNestedOneWithoutMassagerInput";

@TypeGraphQL.InputType("MassagerCreateInput", {
  isAbstract: true
})
export class MassagerCreateInput {
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

  @TypeGraphQL.Field(_type => Recive_serviceCreateNestedOneWithoutMassagerInput, {
    nullable: true
  })
  recive_service?: Recive_serviceCreateNestedOneWithoutMassagerInput | undefined;
}
