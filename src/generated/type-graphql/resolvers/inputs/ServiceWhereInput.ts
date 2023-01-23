import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Recive_serviceListRelationFilter } from "../inputs/Recive_serviceListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ServiceWhereInput", {
  isAbstract: true
})
export class ServiceWhereInput {
  @TypeGraphQL.Field(_type => [ServiceWhereInput], {
    nullable: true
  })
  AND?: ServiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceWhereInput], {
    nullable: true
  })
  OR?: ServiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceWhereInput], {
    nullable: true
  })
  NOT?: ServiceWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => Recive_serviceListRelationFilter, {
    nullable: true
  })
  recive_service?: Recive_serviceListRelationFilter | undefined;
}
