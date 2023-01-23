import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Recive_serviceOrderByWithRelationInput } from "../../../inputs/Recive_serviceOrderByWithRelationInput";
import { Recive_serviceWhereInput } from "../../../inputs/Recive_serviceWhereInput";
import { Recive_serviceWhereUniqueInput } from "../../../inputs/Recive_serviceWhereUniqueInput";
import { Recive_serviceScalarFieldEnum } from "../../../../enums/Recive_serviceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ProductRecive_serviceArgs {
  @TypeGraphQL.Field(_type => Recive_serviceWhereInput, {
    nullable: true
  })
  where?: Recive_serviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Recive_serviceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Recive_serviceWhereUniqueInput, {
    nullable: true
  })
  cursor?: Recive_serviceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Recive_serviceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "appointment_id" | "customer_id" | "massager_id"> | undefined;
}
