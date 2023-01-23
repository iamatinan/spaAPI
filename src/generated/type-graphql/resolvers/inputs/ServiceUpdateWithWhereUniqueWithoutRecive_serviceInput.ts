import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceUpdateWithoutRecive_serviceInput } from "../inputs/ServiceUpdateWithoutRecive_serviceInput";
import { ServiceWhereUniqueInput } from "../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.InputType("ServiceUpdateWithWhereUniqueWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ServiceUpdateWithWhereUniqueWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => ServiceWhereUniqueInput, {
    nullable: false
  })
  where!: ServiceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ServiceUpdateWithoutRecive_serviceInput, {
    nullable: false
  })
  data!: ServiceUpdateWithoutRecive_serviceInput;
}
