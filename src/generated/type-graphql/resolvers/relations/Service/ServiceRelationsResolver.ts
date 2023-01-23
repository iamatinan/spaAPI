import * as TypeGraphQL from "type-graphql";
import { Recive_service } from "../../../models/Recive_service";
import { Service } from "../../../models/Service";
import { ServiceRecive_serviceArgs } from "./args/ServiceRecive_serviceArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Service)
export class ServiceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Recive_service], {
    nullable: false
  })
  async recive_service(@TypeGraphQL.Root() service: Service, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ServiceRecive_serviceArgs): Promise<Recive_service[]> {
    return getPrismaFromContext(ctx).service.findUnique({
      where: {
        id: service.id,
      },
    }).recive_service(args);
  }
}
