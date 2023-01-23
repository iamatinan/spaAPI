import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Recive_serviceScalarWhereInput } from "../inputs/Recive_serviceScalarWhereInput";
import { Recive_serviceUpdateManyMutationInput } from "../inputs/Recive_serviceUpdateManyMutationInput";

@TypeGraphQL.InputType("Recive_serviceUpdateManyWithWhereWithoutServiceInput", {
  isAbstract: true
})
export class Recive_serviceUpdateManyWithWhereWithoutServiceInput {
  @TypeGraphQL.Field(_type => Recive_serviceScalarWhereInput, {
    nullable: false
  })
  where!: Recive_serviceScalarWhereInput;

  @TypeGraphQL.Field(_type => Recive_serviceUpdateManyMutationInput, {
    nullable: false
  })
  data!: Recive_serviceUpdateManyMutationInput;
}
