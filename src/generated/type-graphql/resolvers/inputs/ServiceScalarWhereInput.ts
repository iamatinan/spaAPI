import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ServiceScalarWhereInput", {
  isAbstract: true
})
export class ServiceScalarWhereInput {
  @TypeGraphQL.Field(_type => [ServiceScalarWhereInput], {
    nullable: true
  })
  AND?: ServiceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceScalarWhereInput], {
    nullable: true
  })
  OR?: ServiceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceScalarWhereInput], {
    nullable: true
  })
  NOT?: ServiceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  service_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  price?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  create_at?: DateTimeFilter | undefined;
}
