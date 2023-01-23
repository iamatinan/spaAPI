import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MassagerCreateWithoutRecive_serviceInput } from "../inputs/MassagerCreateWithoutRecive_serviceInput";
import { MassagerWhereUniqueInput } from "../inputs/MassagerWhereUniqueInput";

@TypeGraphQL.InputType("MassagerCreateOrConnectWithoutRecive_serviceInput", {
  isAbstract: true
})
export class MassagerCreateOrConnectWithoutRecive_serviceInput {
  @TypeGraphQL.Field(_type => MassagerWhereUniqueInput, {
    nullable: false
  })
  where!: MassagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MassagerCreateWithoutRecive_serviceInput, {
    nullable: false
  })
  create!: MassagerCreateWithoutRecive_serviceInput;
}
