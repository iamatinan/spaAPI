import * as TypeGraphQL from "type-graphql";
import { Product } from "../../../models/Product";
import { Recive_service } from "../../../models/Recive_service";
import { ProductRecive_serviceArgs } from "./args/ProductRecive_serviceArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class ProductRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Recive_service], {
    nullable: false
  })
  async recive_service(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductRecive_serviceArgs): Promise<Recive_service[]> {
    return getPrismaFromContext(ctx).product.findUnique({
      where: {
        id: product.id,
      },
    }).recive_service(args);
  }
}
