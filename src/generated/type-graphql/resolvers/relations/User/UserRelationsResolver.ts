import * as TypeGraphQL from "type-graphql";
import { Role } from "../../../models/Role";
import { User } from "../../../models/User";
import { UserRoleArgs } from "./args/UserRoleArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Role], {
    nullable: false
  })
  async role(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserRoleArgs): Promise<Role[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).role(args);
  }
}
