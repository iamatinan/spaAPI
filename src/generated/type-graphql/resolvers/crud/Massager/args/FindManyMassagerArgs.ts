import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MassagerOrderByWithRelationInput } from "../../../inputs/MassagerOrderByWithRelationInput";
import { MassagerWhereInput } from "../../../inputs/MassagerWhereInput";
import { MassagerWhereUniqueInput } from "../../../inputs/MassagerWhereUniqueInput";
import { MassagerScalarFieldEnum } from "../../../../enums/MassagerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMassagerArgs {
  @TypeGraphQL.Field(_type => MassagerWhereInput, {
    nullable: true
  })
  where?: MassagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MassagerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MassagerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MassagerWhereUniqueInput, {
    nullable: true
  })
  cursor?: MassagerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MassagerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "lname" | "user_id" | "appointment_id"> | undefined;
}
