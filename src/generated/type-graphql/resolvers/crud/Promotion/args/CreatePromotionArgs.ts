import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PromotionCreateInput } from "../../../inputs/PromotionCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePromotionArgs {
  @TypeGraphQL.Field(_type => PromotionCreateInput, {
    nullable: false
  })
  data!: PromotionCreateInput;
}
