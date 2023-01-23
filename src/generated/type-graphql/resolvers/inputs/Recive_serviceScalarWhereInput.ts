import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Recive_serviceScalarWhereInput", {
  isAbstract: true
})
export class Recive_serviceScalarWhereInput {
  @TypeGraphQL.Field(_type => [Recive_serviceScalarWhereInput], {
    nullable: true
  })
  AND?: Recive_serviceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceScalarWhereInput], {
    nullable: true
  })
  OR?: Recive_serviceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceScalarWhereInput], {
    nullable: true
  })
  NOT?: Recive_serviceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  appointment_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  customer_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  massager_id?: IntFilter | undefined;
}
