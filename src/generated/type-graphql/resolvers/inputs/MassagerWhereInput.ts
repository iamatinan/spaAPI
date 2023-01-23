import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MassagerWhereInput", {
  isAbstract: true
})
export class MassagerWhereInput {
  @TypeGraphQL.Field(_type => [MassagerWhereInput], {
    nullable: true
  })
  AND?: MassagerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MassagerWhereInput], {
    nullable: true
  })
  OR?: MassagerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MassagerWhereInput], {
    nullable: true
  })
  NOT?: MassagerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lname?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  appointment_id?: IntFilter | undefined;
}
