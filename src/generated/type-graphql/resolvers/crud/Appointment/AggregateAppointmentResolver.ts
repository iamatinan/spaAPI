import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAppointmentArgs } from "./args/AggregateAppointmentArgs";
import { Appointment } from "../../../models/Appointment";
import { AggregateAppointment } from "../../outputs/AggregateAppointment";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Appointment)
export class AggregateAppointmentResolver {
  @TypeGraphQL.Query(_returns => AggregateAppointment, {
    nullable: false
  })
  async aggregateAppointment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAppointmentArgs): Promise<AggregateAppointment> {
    return getPrismaFromContext(ctx).appointment.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
