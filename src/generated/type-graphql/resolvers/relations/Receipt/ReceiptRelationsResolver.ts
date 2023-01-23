import * as TypeGraphQL from "type-graphql";
import { Receipt } from "../../../models/Receipt";
import { Recive_service } from "../../../models/Recive_service";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Receipt)
export class ReceiptRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Recive_service, {
    nullable: false
  })
  async recive_service(@TypeGraphQL.Root() receipt: Receipt, @TypeGraphQL.Ctx() ctx: any): Promise<Recive_service> {
    return getPrismaFromContext(ctx).receipt.findUnique({
      where: {
        id: receipt.id,
      },
    }).recive_service({});
  }
}
