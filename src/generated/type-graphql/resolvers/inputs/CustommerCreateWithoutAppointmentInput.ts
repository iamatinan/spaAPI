import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceCreateNestedOneWithoutCustomerInput } from "../inputs/Recive_serviceCreateNestedOneWithoutCustomerInput";

@TypeGraphQL.InputType("CustommerCreateWithoutAppointmentInput", {
  isAbstract: true
})
export class CustommerCreateWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Lname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phone!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  create_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceCreateNestedOneWithoutCustomerInput, {
    nullable: true
  })
  recive_service?: Recive_serviceCreateNestedOneWithoutCustomerInput | undefined;
}
