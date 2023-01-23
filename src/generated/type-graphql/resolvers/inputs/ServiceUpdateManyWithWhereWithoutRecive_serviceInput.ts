import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceScalarWhereInput } from "../inputs/ServiceScalarWhereInput";
import { ServiceUpdateManyMutationInput } from "../inputs/ServiceUpdateManyMutationInput";

@TypeGraphQL.InputType("ServiceUpdateManyWithWhereWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ServiceUpdateManyWithWhereWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => ServiceScalarWhereInput, {
    nullable: false
  })
  where!: ServiceScalarWhereInput;

  @TypeGraphQL.Field(_type => ServiceUpdateManyMutationInput, {
    nullable: false
  })
  data!: ServiceUpdateManyMutationInput;
}
