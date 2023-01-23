import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceCreateWithoutRecive_serviceInput } from "../inputs/ServiceCreateWithoutRecive_serviceInput";
import { ServiceUpdateWithoutRecive_serviceInput } from "../inputs/ServiceUpdateWithoutRecive_serviceInput";
import { ServiceWhereUniqueInput } from "../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.InputType("ServiceUpsertWithWhereUniqueWithoutRecive_serviceInput", {
  isAbstract: true
})
export class ServiceUpsertWithWhereUniqueWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => ServiceWhereUniqueInput, {
    nullable: false
  })
  where!: ServiceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ServiceUpdateWithoutRecive_serviceInput, {
    nullable: false
  })
  update!: ServiceUpdateWithoutRecive_serviceInput;

  @TypeGraphQL.Field(_type => ServiceCreateWithoutRecive_serviceInput, {
    nullable: false
  })
  create!: ServiceCreateWithoutRecive_serviceInput;
}
