import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CustommerWhereInput", {
  isAbstract: true
})
export class CustommerWhereInput {
  @TypeGraphQL.Field(_type => [CustommerWhereInput], {
    nullable: true
  })
  AND?: CustommerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustommerWhereInput], {
    nullable: true
  })
  OR?: CustommerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustommerWhereInput], {
    nullable: true
  })
  NOT?: CustommerWhereInput[] | undefined;

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
  Lname?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  phone?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  create_at?: DateTimeFilter | undefined;
}
