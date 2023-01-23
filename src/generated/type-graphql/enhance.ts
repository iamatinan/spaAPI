import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Custommer: crudResolvers.CustommerCrudResolver,
  Role: crudResolvers.RoleCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Appointment: crudResolvers.AppointmentCrudResolver,
  Massager: crudResolvers.MassagerCrudResolver,
  Recive_service: crudResolvers.Recive_serviceCrudResolver,
  Product: crudResolvers.ProductCrudResolver,
  Promotion: crudResolvers.PromotionCrudResolver,
  Receipt: crudResolvers.ReceiptCrudResolver,
  Service: crudResolvers.ServiceCrudResolver
};
const actionResolversMap = {
  Custommer: {
    custommer: actionResolvers.FindUniqueCustommerResolver,
    findFirstCustommer: actionResolvers.FindFirstCustommerResolver,
    custommers: actionResolvers.FindManyCustommerResolver,
    createCustommer: actionResolvers.CreateCustommerResolver,
    createManyCustommer: actionResolvers.CreateManyCustommerResolver,
    deleteCustommer: actionResolvers.DeleteCustommerResolver,
    updateCustommer: actionResolvers.UpdateCustommerResolver,
    deleteManyCustommer: actionResolvers.DeleteManyCustommerResolver,
    updateManyCustommer: actionResolvers.UpdateManyCustommerResolver,
    upsertCustommer: actionResolvers.UpsertCustommerResolver,
    aggregateCustommer: actionResolvers.AggregateCustommerResolver,
    groupByCustommer: actionResolvers.GroupByCustommerResolver
  },
  Role: {
    role: actionResolvers.FindUniqueRoleResolver,
    findFirstRole: actionResolvers.FindFirstRoleResolver,
    roles: actionResolvers.FindManyRoleResolver,
    createRole: actionResolvers.CreateRoleResolver,
    createManyRole: actionResolvers.CreateManyRoleResolver,
    deleteRole: actionResolvers.DeleteRoleResolver,
    updateRole: actionResolvers.UpdateRoleResolver,
    deleteManyRole: actionResolvers.DeleteManyRoleResolver,
    updateManyRole: actionResolvers.UpdateManyRoleResolver,
    upsertRole: actionResolvers.UpsertRoleResolver,
    aggregateRole: actionResolvers.AggregateRoleResolver,
    groupByRole: actionResolvers.GroupByRoleResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Appointment: {
    appointment: actionResolvers.FindUniqueAppointmentResolver,
    findFirstAppointment: actionResolvers.FindFirstAppointmentResolver,
    appointments: actionResolvers.FindManyAppointmentResolver,
    createAppointment: actionResolvers.CreateAppointmentResolver,
    createManyAppointment: actionResolvers.CreateManyAppointmentResolver,
    deleteAppointment: actionResolvers.DeleteAppointmentResolver,
    updateAppointment: actionResolvers.UpdateAppointmentResolver,
    deleteManyAppointment: actionResolvers.DeleteManyAppointmentResolver,
    updateManyAppointment: actionResolvers.UpdateManyAppointmentResolver,
    upsertAppointment: actionResolvers.UpsertAppointmentResolver,
    aggregateAppointment: actionResolvers.AggregateAppointmentResolver,
    groupByAppointment: actionResolvers.GroupByAppointmentResolver
  },
  Massager: {
    massager: actionResolvers.FindUniqueMassagerResolver,
    findFirstMassager: actionResolvers.FindFirstMassagerResolver,
    massagers: actionResolvers.FindManyMassagerResolver,
    createMassager: actionResolvers.CreateMassagerResolver,
    createManyMassager: actionResolvers.CreateManyMassagerResolver,
    deleteMassager: actionResolvers.DeleteMassagerResolver,
    updateMassager: actionResolvers.UpdateMassagerResolver,
    deleteManyMassager: actionResolvers.DeleteManyMassagerResolver,
    updateManyMassager: actionResolvers.UpdateManyMassagerResolver,
    upsertMassager: actionResolvers.UpsertMassagerResolver,
    aggregateMassager: actionResolvers.AggregateMassagerResolver,
    groupByMassager: actionResolvers.GroupByMassagerResolver
  },
  Recive_service: {
    recive_service: actionResolvers.FindUniqueRecive_serviceResolver,
    findFirstRecive_service: actionResolvers.FindFirstRecive_serviceResolver,
    recive_services: actionResolvers.FindManyRecive_serviceResolver,
    createRecive_service: actionResolvers.CreateRecive_serviceResolver,
    createManyRecive_service: actionResolvers.CreateManyRecive_serviceResolver,
    deleteRecive_service: actionResolvers.DeleteRecive_serviceResolver,
    updateRecive_service: actionResolvers.UpdateRecive_serviceResolver,
    deleteManyRecive_service: actionResolvers.DeleteManyRecive_serviceResolver,
    updateManyRecive_service: actionResolvers.UpdateManyRecive_serviceResolver,
    upsertRecive_service: actionResolvers.UpsertRecive_serviceResolver,
    aggregateRecive_service: actionResolvers.AggregateRecive_serviceResolver,
    groupByRecive_service: actionResolvers.GroupByRecive_serviceResolver
  },
  Product: {
    product: actionResolvers.FindUniqueProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    products: actionResolvers.FindManyProductResolver,
    createProduct: actionResolvers.CreateProductResolver,
    createManyProduct: actionResolvers.CreateManyProductResolver,
    deleteProduct: actionResolvers.DeleteProductResolver,
    updateProduct: actionResolvers.UpdateProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    upsertProduct: actionResolvers.UpsertProductResolver,
    aggregateProduct: actionResolvers.AggregateProductResolver,
    groupByProduct: actionResolvers.GroupByProductResolver
  },
  Promotion: {
    promotion: actionResolvers.FindUniquePromotionResolver,
    findFirstPromotion: actionResolvers.FindFirstPromotionResolver,
    promotions: actionResolvers.FindManyPromotionResolver,
    createPromotion: actionResolvers.CreatePromotionResolver,
    createManyPromotion: actionResolvers.CreateManyPromotionResolver,
    deletePromotion: actionResolvers.DeletePromotionResolver,
    updatePromotion: actionResolvers.UpdatePromotionResolver,
    deleteManyPromotion: actionResolvers.DeleteManyPromotionResolver,
    updateManyPromotion: actionResolvers.UpdateManyPromotionResolver,
    upsertPromotion: actionResolvers.UpsertPromotionResolver,
    aggregatePromotion: actionResolvers.AggregatePromotionResolver,
    groupByPromotion: actionResolvers.GroupByPromotionResolver
  },
  Receipt: {
    receipt: actionResolvers.FindUniqueReceiptResolver,
    findFirstReceipt: actionResolvers.FindFirstReceiptResolver,
    receipts: actionResolvers.FindManyReceiptResolver,
    createReceipt: actionResolvers.CreateReceiptResolver,
    createManyReceipt: actionResolvers.CreateManyReceiptResolver,
    deleteReceipt: actionResolvers.DeleteReceiptResolver,
    updateReceipt: actionResolvers.UpdateReceiptResolver,
    deleteManyReceipt: actionResolvers.DeleteManyReceiptResolver,
    updateManyReceipt: actionResolvers.UpdateManyReceiptResolver,
    upsertReceipt: actionResolvers.UpsertReceiptResolver,
    aggregateReceipt: actionResolvers.AggregateReceiptResolver,
    groupByReceipt: actionResolvers.GroupByReceiptResolver
  },
  Service: {
    service: actionResolvers.FindUniqueServiceResolver,
    findFirstService: actionResolvers.FindFirstServiceResolver,
    services: actionResolvers.FindManyServiceResolver,
    createService: actionResolvers.CreateServiceResolver,
    createManyService: actionResolvers.CreateManyServiceResolver,
    deleteService: actionResolvers.DeleteServiceResolver,
    updateService: actionResolvers.UpdateServiceResolver,
    deleteManyService: actionResolvers.DeleteManyServiceResolver,
    updateManyService: actionResolvers.UpdateManyServiceResolver,
    upsertService: actionResolvers.UpsertServiceResolver,
    aggregateService: actionResolvers.AggregateServiceResolver,
    groupByService: actionResolvers.GroupByServiceResolver
  }
};
const crudResolversInfo = {
  Custommer: ["custommer", "findFirstCustommer", "custommers", "createCustommer", "createManyCustommer", "deleteCustommer", "updateCustommer", "deleteManyCustommer", "updateManyCustommer", "upsertCustommer", "aggregateCustommer", "groupByCustommer"],
  Role: ["role", "findFirstRole", "roles", "createRole", "createManyRole", "deleteRole", "updateRole", "deleteManyRole", "updateManyRole", "upsertRole", "aggregateRole", "groupByRole"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Appointment: ["appointment", "findFirstAppointment", "appointments", "createAppointment", "createManyAppointment", "deleteAppointment", "updateAppointment", "deleteManyAppointment", "updateManyAppointment", "upsertAppointment", "aggregateAppointment", "groupByAppointment"],
  Massager: ["massager", "findFirstMassager", "massagers", "createMassager", "createManyMassager", "deleteMassager", "updateMassager", "deleteManyMassager", "updateManyMassager", "upsertMassager", "aggregateMassager", "groupByMassager"],
  Recive_service: ["recive_service", "findFirstRecive_service", "recive_services", "createRecive_service", "createManyRecive_service", "deleteRecive_service", "updateRecive_service", "deleteManyRecive_service", "updateManyRecive_service", "upsertRecive_service", "aggregateRecive_service", "groupByRecive_service"],
  Product: ["product", "findFirstProduct", "products", "createProduct", "createManyProduct", "deleteProduct", "updateProduct", "deleteManyProduct", "updateManyProduct", "upsertProduct", "aggregateProduct", "groupByProduct"],
  Promotion: ["promotion", "findFirstPromotion", "promotions", "createPromotion", "createManyPromotion", "deletePromotion", "updatePromotion", "deleteManyPromotion", "updateManyPromotion", "upsertPromotion", "aggregatePromotion", "groupByPromotion"],
  Receipt: ["receipt", "findFirstReceipt", "receipts", "createReceipt", "createManyReceipt", "deleteReceipt", "updateReceipt", "deleteManyReceipt", "updateManyReceipt", "upsertReceipt", "aggregateReceipt", "groupByReceipt"],
  Service: ["service", "findFirstService", "services", "createService", "createManyService", "deleteService", "updateService", "deleteManyService", "updateManyService", "upsertService", "aggregateService", "groupByService"]
};
const argsInfo = {
  FindUniqueCustommerArgs: ["where"],
  FindFirstCustommerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCustommerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCustommerArgs: ["data"],
  CreateManyCustommerArgs: ["data", "skipDuplicates"],
  DeleteCustommerArgs: ["where"],
  UpdateCustommerArgs: ["data", "where"],
  DeleteManyCustommerArgs: ["where"],
  UpdateManyCustommerArgs: ["data", "where"],
  UpsertCustommerArgs: ["where", "create", "update"],
  AggregateCustommerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCustommerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueRoleArgs: ["where"],
  FindFirstRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateRoleArgs: ["data"],
  CreateManyRoleArgs: ["data", "skipDuplicates"],
  DeleteRoleArgs: ["where"],
  UpdateRoleArgs: ["data", "where"],
  DeleteManyRoleArgs: ["where"],
  UpdateManyRoleArgs: ["data", "where"],
  UpsertRoleArgs: ["where", "create", "update"],
  AggregateRoleArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByRoleArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueAppointmentArgs: ["where"],
  FindFirstAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAppointmentArgs: ["data"],
  CreateManyAppointmentArgs: ["data", "skipDuplicates"],
  DeleteAppointmentArgs: ["where"],
  UpdateAppointmentArgs: ["data", "where"],
  DeleteManyAppointmentArgs: ["where"],
  UpdateManyAppointmentArgs: ["data", "where"],
  UpsertAppointmentArgs: ["where", "create", "update"],
  AggregateAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAppointmentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueMassagerArgs: ["where"],
  FindFirstMassagerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMassagerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateMassagerArgs: ["data"],
  CreateManyMassagerArgs: ["data", "skipDuplicates"],
  DeleteMassagerArgs: ["where"],
  UpdateMassagerArgs: ["data", "where"],
  DeleteManyMassagerArgs: ["where"],
  UpdateManyMassagerArgs: ["data", "where"],
  UpsertMassagerArgs: ["where", "create", "update"],
  AggregateMassagerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByMassagerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueRecive_serviceArgs: ["where"],
  FindFirstRecive_serviceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRecive_serviceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateRecive_serviceArgs: ["data"],
  CreateManyRecive_serviceArgs: ["data", "skipDuplicates"],
  DeleteRecive_serviceArgs: ["where"],
  UpdateRecive_serviceArgs: ["data", "where"],
  DeleteManyRecive_serviceArgs: ["where"],
  UpdateManyRecive_serviceArgs: ["data", "where"],
  UpsertRecive_serviceArgs: ["where", "create", "update"],
  AggregateRecive_serviceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByRecive_serviceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProductArgs: ["where"],
  FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProductArgs: ["data"],
  CreateManyProductArgs: ["data", "skipDuplicates"],
  DeleteProductArgs: ["where"],
  UpdateProductArgs: ["data", "where"],
  DeleteManyProductArgs: ["where"],
  UpdateManyProductArgs: ["data", "where"],
  UpsertProductArgs: ["where", "create", "update"],
  AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePromotionArgs: ["where"],
  FindFirstPromotionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPromotionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePromotionArgs: ["data"],
  CreateManyPromotionArgs: ["data", "skipDuplicates"],
  DeletePromotionArgs: ["where"],
  UpdatePromotionArgs: ["data", "where"],
  DeleteManyPromotionArgs: ["where"],
  UpdateManyPromotionArgs: ["data", "where"],
  UpsertPromotionArgs: ["where", "create", "update"],
  AggregatePromotionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPromotionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueReceiptArgs: ["where"],
  FindFirstReceiptArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyReceiptArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateReceiptArgs: ["data"],
  CreateManyReceiptArgs: ["data", "skipDuplicates"],
  DeleteReceiptArgs: ["where"],
  UpdateReceiptArgs: ["data", "where"],
  DeleteManyReceiptArgs: ["where"],
  UpdateManyReceiptArgs: ["data", "where"],
  UpsertReceiptArgs: ["where", "create", "update"],
  AggregateReceiptArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByReceiptArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueServiceArgs: ["where"],
  FindFirstServiceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyServiceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateServiceArgs: ["data"],
  CreateManyServiceArgs: ["data", "skipDuplicates"],
  DeleteServiceArgs: ["where"],
  UpdateServiceArgs: ["data", "where"],
  DeleteManyServiceArgs: ["where"],
  UpdateManyServiceArgs: ["data", "where"],
  UpsertServiceArgs: ["where", "create", "update"],
  AggregateServiceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByServiceArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Custommer: relationResolvers.CustommerRelationsResolver,
  Role: relationResolvers.RoleRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Appointment: relationResolvers.AppointmentRelationsResolver,
  Massager: relationResolvers.MassagerRelationsResolver,
  Recive_service: relationResolvers.Recive_serviceRelationsResolver,
  Product: relationResolvers.ProductRelationsResolver,
  Promotion: relationResolvers.PromotionRelationsResolver,
  Receipt: relationResolvers.ReceiptRelationsResolver,
  Service: relationResolvers.ServiceRelationsResolver
};
const relationResolversInfo = {
  Custommer: ["appointment", "recive_service"],
  Role: ["user"],
  User: ["role"],
  Appointment: ["custommer", "massager", "recive_service"],
  Massager: ["appointment", "recive_service"],
  Recive_service: ["appointment", "customer", "massager", "product", "promotion", "service", "receipt"],
  Product: ["recive_service"],
  Promotion: ["recive_service"],
  Receipt: ["recive_service"],
  Service: ["recive_service"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Custommer: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  Role: ["id", "role_name"],
  User: ["id", "name", "lname", "email", "phone", "address"],
  Appointment: ["id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "customer_id", "massager_id"],
  Massager: ["id", "name", "lname", "user_id"],
  Recive_service: ["id", "appointment_id", "customer_id", "massager_id"],
  Product: ["id", "name", "product", "product_price", "create_at"],
  Promotion: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  Receipt: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id"],
  Service: ["id", "service_name", "price", "create_at"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateCustommer: ["_count", "_avg", "_sum", "_min", "_max"],
  CustommerGroupBy: ["id", "name", "Lname", "email", "phone", "address", "create_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRole: ["_count", "_avg", "_sum", "_min", "_max"],
  RoleGroupBy: ["id", "role_name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "name", "lname", "email", "phone", "address", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAppointment: ["_count", "_avg", "_sum", "_min", "_max"],
  AppointmentGroupBy: ["id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "customer_id", "massager_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMassager: ["_count", "_avg", "_sum", "_min", "_max"],
  MassagerGroupBy: ["id", "name", "lname", "user_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRecive_service: ["_count", "_avg", "_sum", "_min", "_max"],
  Recive_serviceGroupBy: ["id", "appointment_id", "customer_id", "massager_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
  ProductGroupBy: ["id", "name", "product", "product_price", "create_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePromotion: ["_count", "_avg", "_sum", "_min", "_max"],
  PromotionGroupBy: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateReceipt: ["_count", "_avg", "_sum", "_min", "_max"],
  ReceiptGroupBy: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateService: ["_count", "_avg", "_sum", "_min", "_max"],
  ServiceGroupBy: ["id", "service_name", "price", "create_at", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  CustommerCount: ["appointment"],
  CustommerCountAggregate: ["id", "name", "Lname", "email", "phone", "address", "create_at", "_all"],
  CustommerAvgAggregate: ["id"],
  CustommerSumAggregate: ["id"],
  CustommerMinAggregate: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  CustommerMaxAggregate: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  RoleCount: ["user"],
  RoleCountAggregate: ["id", "role_name", "_all"],
  RoleAvgAggregate: ["id"],
  RoleSumAggregate: ["id"],
  RoleMinAggregate: ["id", "role_name"],
  RoleMaxAggregate: ["id", "role_name"],
  UserCount: ["role"],
  UserCountAggregate: ["id", "name", "lname", "email", "phone", "address", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "name", "lname", "email", "phone", "address"],
  UserMaxAggregate: ["id", "name", "lname", "email", "phone", "address"],
  AppointmentCountAggregate: ["id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "customer_id", "massager_id", "_all"],
  AppointmentAvgAggregate: ["id", "customer_id", "massager_id"],
  AppointmentSumAggregate: ["id", "customer_id", "massager_id"],
  AppointmentMinAggregate: ["id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "customer_id", "massager_id"],
  AppointmentMaxAggregate: ["id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "customer_id", "massager_id"],
  MassagerCount: ["appointment"],
  MassagerCountAggregate: ["id", "name", "lname", "user_id", "_all"],
  MassagerAvgAggregate: ["id"],
  MassagerSumAggregate: ["id"],
  MassagerMinAggregate: ["id", "name", "lname", "user_id"],
  MassagerMaxAggregate: ["id", "name", "lname", "user_id"],
  Recive_serviceCount: ["product", "promotion", "service"],
  Recive_serviceCountAggregate: ["id", "appointment_id", "customer_id", "massager_id", "_all"],
  Recive_serviceAvgAggregate: ["id", "appointment_id", "customer_id", "massager_id"],
  Recive_serviceSumAggregate: ["id", "appointment_id", "customer_id", "massager_id"],
  Recive_serviceMinAggregate: ["id", "appointment_id", "customer_id", "massager_id"],
  Recive_serviceMaxAggregate: ["id", "appointment_id", "customer_id", "massager_id"],
  ProductCount: ["recive_service"],
  ProductCountAggregate: ["id", "name", "product", "product_price", "create_at", "_all"],
  ProductAvgAggregate: ["id", "product_price"],
  ProductSumAggregate: ["id", "product_price"],
  ProductMinAggregate: ["id", "name", "product", "product_price", "create_at"],
  ProductMaxAggregate: ["id", "name", "product", "product_price", "create_at"],
  PromotionCount: ["recive_service"],
  PromotionCountAggregate: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at", "_all"],
  PromotionAvgAggregate: ["id", "discount_price"],
  PromotionSumAggregate: ["id", "discount_price"],
  PromotionMinAggregate: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionMaxAggregate: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  ReceiptCountAggregate: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id", "_all"],
  ReceiptAvgAggregate: ["id", "customer_id", "create_by", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id"],
  ReceiptSumAggregate: ["id", "customer_id", "create_by", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id"],
  ReceiptMinAggregate: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id"],
  ReceiptMaxAggregate: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id"],
  ServiceCount: ["recive_service"],
  ServiceCountAggregate: ["id", "service_name", "price", "create_at", "_all"],
  ServiceAvgAggregate: ["id", "price"],
  ServiceSumAggregate: ["id", "price"],
  ServiceMinAggregate: ["id", "service_name", "price", "create_at"],
  ServiceMaxAggregate: ["id", "service_name", "price", "create_at"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  CustommerWhereInput: ["AND", "OR", "NOT", "id", "name", "Lname", "email", "phone", "address", "create_at", "appointment", "recive_service"],
  CustommerOrderByWithRelationInput: ["id", "name", "Lname", "email", "phone", "address", "create_at", "appointment", "recive_service"],
  CustommerWhereUniqueInput: ["id"],
  CustommerOrderByWithAggregationInput: ["id", "name", "Lname", "email", "phone", "address", "create_at", "_count", "_avg", "_max", "_min", "_sum"],
  CustommerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "Lname", "email", "phone", "address", "create_at"],
  RoleWhereInput: ["AND", "OR", "NOT", "id", "role_name", "user"],
  RoleOrderByWithRelationInput: ["id", "role_name", "user"],
  RoleWhereUniqueInput: ["id"],
  RoleOrderByWithAggregationInput: ["id", "role_name", "_count", "_avg", "_max", "_min", "_sum"],
  RoleScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "role_name"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "lname", "email", "phone", "address", "role"],
  UserOrderByWithRelationInput: ["id", "name", "lname", "email", "phone", "address", "role"],
  UserWhereUniqueInput: ["id"],
  UserOrderByWithAggregationInput: ["id", "name", "lname", "email", "phone", "address", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "lname", "email", "phone", "address"],
  AppointmentWhereInput: ["AND", "OR", "NOT", "id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "custommer", "customer_id", "massager", "massager_id", "recive_service"],
  AppointmentOrderByWithRelationInput: ["id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "custommer", "customer_id", "massager", "massager_id", "recive_service"],
  AppointmentWhereUniqueInput: ["id"],
  AppointmentOrderByWithAggregationInput: ["id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "customer_id", "massager_id", "_count", "_avg", "_max", "_min", "_sum"],
  AppointmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "customer_id", "massager_id"],
  MassagerWhereInput: ["AND", "OR", "NOT", "id", "name", "lname", "user_id", "appointment", "recive_service"],
  MassagerOrderByWithRelationInput: ["id", "name", "lname", "user_id", "appointment", "recive_service"],
  MassagerWhereUniqueInput: ["id"],
  MassagerOrderByWithAggregationInput: ["id", "name", "lname", "user_id", "_count", "_avg", "_max", "_min", "_sum"],
  MassagerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "lname", "user_id"],
  Recive_serviceWhereInput: ["AND", "OR", "NOT", "id", "appointment", "appointment_id", "customer", "customer_id", "massager", "massager_id", "product", "promotion", "service", "receipt"],
  Recive_serviceOrderByWithRelationInput: ["id", "appointment", "appointment_id", "customer", "customer_id", "massager", "massager_id", "product", "promotion", "service", "receipt"],
  Recive_serviceWhereUniqueInput: ["id", "appointment_id", "customer_id", "massager_id"],
  Recive_serviceOrderByWithAggregationInput: ["id", "appointment_id", "customer_id", "massager_id", "_count", "_avg", "_max", "_min", "_sum"],
  Recive_serviceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "appointment_id", "customer_id", "massager_id"],
  ProductWhereInput: ["AND", "OR", "NOT", "id", "name", "product", "product_price", "create_at", "recive_service"],
  ProductOrderByWithRelationInput: ["id", "name", "product", "product_price", "create_at", "recive_service"],
  ProductWhereUniqueInput: ["id"],
  ProductOrderByWithAggregationInput: ["id", "name", "product", "product_price", "create_at", "_count", "_avg", "_max", "_min", "_sum"],
  ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "product", "product_price", "create_at"],
  PromotionWhereInput: ["AND", "OR", "NOT", "id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at", "recive_service"],
  PromotionOrderByWithRelationInput: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at", "recive_service"],
  PromotionWhereUniqueInput: ["id"],
  PromotionOrderByWithAggregationInput: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at", "_count", "_avg", "_max", "_min", "_sum"],
  PromotionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  ReceiptWhereInput: ["AND", "OR", "NOT", "id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service", "recive_service_id"],
  ReceiptOrderByWithRelationInput: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service", "recive_service_id"],
  ReceiptWhereUniqueInput: ["id", "recive_service_id"],
  ReceiptOrderByWithAggregationInput: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id", "_count", "_avg", "_max", "_min", "_sum"],
  ReceiptScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id"],
  ServiceWhereInput: ["AND", "OR", "NOT", "id", "service_name", "price", "create_at", "recive_service"],
  ServiceOrderByWithRelationInput: ["id", "service_name", "price", "create_at", "recive_service"],
  ServiceWhereUniqueInput: ["id"],
  ServiceOrderByWithAggregationInput: ["id", "service_name", "price", "create_at", "_count", "_avg", "_max", "_min", "_sum"],
  ServiceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "service_name", "price", "create_at"],
  CustommerCreateInput: ["name", "Lname", "email", "phone", "address", "create_at", "appointment", "recive_service"],
  CustommerUpdateInput: ["name", "Lname", "email", "phone", "address", "create_at", "appointment", "recive_service"],
  CustommerCreateManyInput: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  CustommerUpdateManyMutationInput: ["name", "Lname", "email", "phone", "address", "create_at"],
  RoleCreateInput: ["role_name", "user"],
  RoleUpdateInput: ["role_name", "user"],
  RoleCreateManyInput: ["id", "role_name"],
  RoleUpdateManyMutationInput: ["role_name"],
  UserCreateInput: ["name", "lname", "email", "phone", "address", "role"],
  UserUpdateInput: ["name", "lname", "email", "phone", "address", "role"],
  UserCreateManyInput: ["id", "name", "lname", "email", "phone", "address"],
  UserUpdateManyMutationInput: ["name", "lname", "email", "phone", "address"],
  AppointmentCreateInput: ["date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "custommer", "massager", "recive_service"],
  AppointmentUpdateInput: ["date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "custommer", "massager", "recive_service"],
  AppointmentCreateManyInput: ["id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "customer_id", "massager_id"],
  AppointmentUpdateManyMutationInput: ["date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish"],
  MassagerCreateInput: ["name", "lname", "user_id", "appointment", "recive_service"],
  MassagerUpdateInput: ["name", "lname", "user_id", "appointment", "recive_service"],
  MassagerCreateManyInput: ["id", "name", "lname", "user_id"],
  MassagerUpdateManyMutationInput: ["name", "lname", "user_id"],
  Recive_serviceCreateInput: ["appointment", "customer", "massager", "product", "promotion", "service", "receipt"],
  Recive_serviceUpdateInput: ["appointment", "customer", "massager", "product", "promotion", "service", "receipt"],
  Recive_serviceCreateManyInput: ["id", "appointment_id", "customer_id", "massager_id"],
  Recive_serviceUpdateManyMutationInput: [],
  ProductCreateInput: ["name", "product", "product_price", "create_at", "recive_service"],
  ProductUpdateInput: ["name", "product", "product_price", "create_at", "recive_service"],
  ProductCreateManyInput: ["id", "name", "product", "product_price", "create_at"],
  ProductUpdateManyMutationInput: ["name", "product", "product_price", "create_at"],
  PromotionCreateInput: ["promption_name", "discount_price", "promotion_start", "promotion_end", "create_at", "recive_service"],
  PromotionUpdateInput: ["promption_name", "discount_price", "promotion_start", "promotion_end", "create_at", "recive_service"],
  PromotionCreateManyInput: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionUpdateManyMutationInput: ["promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  ReceiptCreateInput: ["customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service"],
  ReceiptUpdateInput: ["customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service"],
  ReceiptCreateManyInput: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id"],
  ReceiptUpdateManyMutationInput: ["customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ServiceCreateInput: ["service_name", "price", "create_at", "recive_service"],
  ServiceUpdateInput: ["service_name", "price", "create_at", "recive_service"],
  ServiceCreateManyInput: ["id", "service_name", "price", "create_at"],
  ServiceUpdateManyMutationInput: ["service_name", "price", "create_at"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  AppointmentListRelationFilter: ["every", "some", "none"],
  Recive_serviceRelationFilter: ["is", "isNot"],
  AppointmentOrderByRelationAggregateInput: ["_count"],
  CustommerCountOrderByAggregateInput: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  CustommerAvgOrderByAggregateInput: ["id"],
  CustommerMaxOrderByAggregateInput: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  CustommerMinOrderByAggregateInput: ["id", "name", "Lname", "email", "phone", "address", "create_at"],
  CustommerSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserListRelationFilter: ["every", "some", "none"],
  UserOrderByRelationAggregateInput: ["_count"],
  RoleCountOrderByAggregateInput: ["id", "role_name"],
  RoleAvgOrderByAggregateInput: ["id"],
  RoleMaxOrderByAggregateInput: ["id", "role_name"],
  RoleMinOrderByAggregateInput: ["id", "role_name"],
  RoleSumOrderByAggregateInput: ["id"],
  RoleListRelationFilter: ["every", "some", "none"],
  RoleOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "lname", "email", "phone", "address"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "name", "lname", "email", "phone", "address"],
  UserMinOrderByAggregateInput: ["id", "name", "lname", "email", "phone", "address"],
  UserSumOrderByAggregateInput: ["id"],
  BoolFilter: ["equals", "not"],
  CustommerRelationFilter: ["is", "isNot"],
  MassagerRelationFilter: ["is", "isNot"],
  AppointmentCountOrderByAggregateInput: ["id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "customer_id", "massager_id"],
  AppointmentAvgOrderByAggregateInput: ["id", "customer_id", "massager_id"],
  AppointmentMaxOrderByAggregateInput: ["id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "customer_id", "massager_id"],
  AppointmentMinOrderByAggregateInput: ["id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "customer_id", "massager_id"],
  AppointmentSumOrderByAggregateInput: ["id", "customer_id", "massager_id"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  MassagerCountOrderByAggregateInput: ["id", "name", "lname", "user_id"],
  MassagerAvgOrderByAggregateInput: ["id"],
  MassagerMaxOrderByAggregateInput: ["id", "name", "lname", "user_id"],
  MassagerMinOrderByAggregateInput: ["id", "name", "lname", "user_id"],
  MassagerSumOrderByAggregateInput: ["id"],
  AppointmentRelationFilter: ["is", "isNot"],
  ProductListRelationFilter: ["every", "some", "none"],
  PromotionListRelationFilter: ["every", "some", "none"],
  ServiceListRelationFilter: ["every", "some", "none"],
  ReceiptRelationFilter: ["is", "isNot"],
  ProductOrderByRelationAggregateInput: ["_count"],
  PromotionOrderByRelationAggregateInput: ["_count"],
  ServiceOrderByRelationAggregateInput: ["_count"],
  Recive_serviceCountOrderByAggregateInput: ["id", "appointment_id", "customer_id", "massager_id"],
  Recive_serviceAvgOrderByAggregateInput: ["id", "appointment_id", "customer_id", "massager_id"],
  Recive_serviceMaxOrderByAggregateInput: ["id", "appointment_id", "customer_id", "massager_id"],
  Recive_serviceMinOrderByAggregateInput: ["id", "appointment_id", "customer_id", "massager_id"],
  Recive_serviceSumOrderByAggregateInput: ["id", "appointment_id", "customer_id", "massager_id"],
  Recive_serviceListRelationFilter: ["every", "some", "none"],
  Recive_serviceOrderByRelationAggregateInput: ["_count"],
  ProductCountOrderByAggregateInput: ["id", "name", "product", "product_price", "create_at"],
  ProductAvgOrderByAggregateInput: ["id", "product_price"],
  ProductMaxOrderByAggregateInput: ["id", "name", "product", "product_price", "create_at"],
  ProductMinOrderByAggregateInput: ["id", "name", "product", "product_price", "create_at"],
  ProductSumOrderByAggregateInput: ["id", "product_price"],
  PromotionCountOrderByAggregateInput: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionAvgOrderByAggregateInput: ["id", "discount_price"],
  PromotionMaxOrderByAggregateInput: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionMinOrderByAggregateInput: ["id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionSumOrderByAggregateInput: ["id", "discount_price"],
  ReceiptCountOrderByAggregateInput: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id"],
  ReceiptAvgOrderByAggregateInput: ["id", "customer_id", "create_by", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id"],
  ReceiptMaxOrderByAggregateInput: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id"],
  ReceiptMinOrderByAggregateInput: ["id", "customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id"],
  ReceiptSumOrderByAggregateInput: ["id", "customer_id", "create_by", "service_id", "appoint_id", "promotion_id", "product_id", "recive_service_id"],
  ServiceCountOrderByAggregateInput: ["id", "service_name", "price", "create_at"],
  ServiceAvgOrderByAggregateInput: ["id", "price"],
  ServiceMaxOrderByAggregateInput: ["id", "service_name", "price", "create_at"],
  ServiceMinOrderByAggregateInput: ["id", "service_name", "price", "create_at"],
  ServiceSumOrderByAggregateInput: ["id", "price"],
  AppointmentCreateNestedManyWithoutCustommerInput: ["create", "connectOrCreate", "createMany", "connect"],
  Recive_serviceCreateNestedOneWithoutCustomerInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  AppointmentUpdateManyWithoutCustommerInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  Recive_serviceUpdateOneWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedManyWithoutRoleInput: ["create", "connectOrCreate", "connect"],
  UserUpdateManyWithoutRoleInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RoleCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "connect"],
  RoleUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CustommerCreateNestedOneWithoutAppointmentInput: ["create", "connectOrCreate", "connect"],
  MassagerCreateNestedOneWithoutAppointmentInput: ["create", "connectOrCreate", "connect"],
  Recive_serviceCreateNestedOneWithoutAppointmentInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  CustommerUpdateOneRequiredWithoutAppointmentInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MassagerUpdateOneRequiredWithoutAppointmentInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  Recive_serviceUpdateOneWithoutAppointmentInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  AppointmentCreateNestedManyWithoutMassagerInput: ["create", "connectOrCreate", "createMany", "connect"],
  Recive_serviceCreateNestedOneWithoutMassagerInput: ["create", "connectOrCreate", "connect"],
  AppointmentUpdateManyWithoutMassagerInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  Recive_serviceUpdateOneWithoutMassagerInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  AppointmentCreateNestedOneWithoutRecive_serviceInput: ["create", "connectOrCreate", "connect"],
  CustommerCreateNestedOneWithoutRecive_serviceInput: ["create", "connectOrCreate", "connect"],
  MassagerCreateNestedOneWithoutRecive_serviceInput: ["create", "connectOrCreate", "connect"],
  ProductCreateNestedManyWithoutRecive_serviceInput: ["create", "connectOrCreate", "connect"],
  PromotionCreateNestedManyWithoutRecive_serviceInput: ["create", "connectOrCreate", "connect"],
  ServiceCreateNestedManyWithoutRecive_serviceInput: ["create", "connectOrCreate", "connect"],
  ReceiptCreateNestedOneWithoutRecive_serviceInput: ["create", "connectOrCreate", "connect"],
  AppointmentUpdateOneRequiredWithoutRecive_serviceInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CustommerUpdateOneRequiredWithoutRecive_serviceInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MassagerUpdateOneRequiredWithoutRecive_serviceInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProductUpdateManyWithoutRecive_serviceInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PromotionUpdateManyWithoutRecive_serviceInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ServiceUpdateManyWithoutRecive_serviceInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ReceiptUpdateOneWithoutRecive_serviceInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  Recive_serviceCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "connect"],
  Recive_serviceUpdateManyWithoutProductInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  Recive_serviceCreateNestedManyWithoutPromotionInput: ["create", "connectOrCreate", "connect"],
  Recive_serviceUpdateManyWithoutPromotionInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  Recive_serviceCreateNestedOneWithoutReceiptInput: ["create", "connectOrCreate", "connect"],
  Recive_serviceUpdateOneRequiredWithoutReceiptInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  Recive_serviceCreateNestedManyWithoutServiceInput: ["create", "connectOrCreate", "connect"],
  Recive_serviceUpdateManyWithoutServiceInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  AppointmentCreateWithoutCustommerInput: ["date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "massager", "recive_service"],
  AppointmentCreateOrConnectWithoutCustommerInput: ["where", "create"],
  AppointmentCreateManyCustommerInputEnvelope: ["data", "skipDuplicates"],
  Recive_serviceCreateWithoutCustomerInput: ["appointment", "massager", "product", "promotion", "service", "receipt"],
  Recive_serviceCreateOrConnectWithoutCustomerInput: ["where", "create"],
  AppointmentUpsertWithWhereUniqueWithoutCustommerInput: ["where", "update", "create"],
  AppointmentUpdateWithWhereUniqueWithoutCustommerInput: ["where", "data"],
  AppointmentUpdateManyWithWhereWithoutCustommerInput: ["where", "data"],
  AppointmentScalarWhereInput: ["AND", "OR", "NOT", "id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "customer_id", "massager_id"],
  Recive_serviceUpsertWithoutCustomerInput: ["update", "create"],
  Recive_serviceUpdateWithoutCustomerInput: ["appointment", "massager", "product", "promotion", "service", "receipt"],
  UserCreateWithoutRoleInput: ["name", "lname", "email", "phone", "address"],
  UserCreateOrConnectWithoutRoleInput: ["where", "create"],
  UserUpsertWithWhereUniqueWithoutRoleInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutRoleInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutRoleInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "lname", "email", "phone", "address"],
  RoleCreateWithoutUserInput: ["role_name"],
  RoleCreateOrConnectWithoutUserInput: ["where", "create"],
  RoleUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  RoleUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  RoleUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  RoleScalarWhereInput: ["AND", "OR", "NOT", "id", "role_name"],
  CustommerCreateWithoutAppointmentInput: ["name", "Lname", "email", "phone", "address", "create_at", "recive_service"],
  CustommerCreateOrConnectWithoutAppointmentInput: ["where", "create"],
  MassagerCreateWithoutAppointmentInput: ["name", "lname", "user_id", "recive_service"],
  MassagerCreateOrConnectWithoutAppointmentInput: ["where", "create"],
  Recive_serviceCreateWithoutAppointmentInput: ["customer", "massager", "product", "promotion", "service", "receipt"],
  Recive_serviceCreateOrConnectWithoutAppointmentInput: ["where", "create"],
  CustommerUpsertWithoutAppointmentInput: ["update", "create"],
  CustommerUpdateWithoutAppointmentInput: ["name", "Lname", "email", "phone", "address", "create_at", "recive_service"],
  MassagerUpsertWithoutAppointmentInput: ["update", "create"],
  MassagerUpdateWithoutAppointmentInput: ["name", "lname", "user_id", "recive_service"],
  Recive_serviceUpsertWithoutAppointmentInput: ["update", "create"],
  Recive_serviceUpdateWithoutAppointmentInput: ["customer", "massager", "product", "promotion", "service", "receipt"],
  AppointmentCreateWithoutMassagerInput: ["date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "custommer", "recive_service"],
  AppointmentCreateOrConnectWithoutMassagerInput: ["where", "create"],
  AppointmentCreateManyMassagerInputEnvelope: ["data", "skipDuplicates"],
  Recive_serviceCreateWithoutMassagerInput: ["appointment", "customer", "product", "promotion", "service", "receipt"],
  Recive_serviceCreateOrConnectWithoutMassagerInput: ["where", "create"],
  AppointmentUpsertWithWhereUniqueWithoutMassagerInput: ["where", "update", "create"],
  AppointmentUpdateWithWhereUniqueWithoutMassagerInput: ["where", "data"],
  AppointmentUpdateManyWithWhereWithoutMassagerInput: ["where", "data"],
  Recive_serviceUpsertWithoutMassagerInput: ["update", "create"],
  Recive_serviceUpdateWithoutMassagerInput: ["appointment", "customer", "product", "promotion", "service", "receipt"],
  AppointmentCreateWithoutRecive_serviceInput: ["date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "custommer", "massager"],
  AppointmentCreateOrConnectWithoutRecive_serviceInput: ["where", "create"],
  CustommerCreateWithoutRecive_serviceInput: ["name", "Lname", "email", "phone", "address", "create_at", "appointment"],
  CustommerCreateOrConnectWithoutRecive_serviceInput: ["where", "create"],
  MassagerCreateWithoutRecive_serviceInput: ["name", "lname", "user_id", "appointment"],
  MassagerCreateOrConnectWithoutRecive_serviceInput: ["where", "create"],
  ProductCreateWithoutRecive_serviceInput: ["name", "product", "product_price", "create_at"],
  ProductCreateOrConnectWithoutRecive_serviceInput: ["where", "create"],
  PromotionCreateWithoutRecive_serviceInput: ["promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  PromotionCreateOrConnectWithoutRecive_serviceInput: ["where", "create"],
  ServiceCreateWithoutRecive_serviceInput: ["service_name", "price", "create_at"],
  ServiceCreateOrConnectWithoutRecive_serviceInput: ["where", "create"],
  ReceiptCreateWithoutRecive_serviceInput: ["customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  ReceiptCreateOrConnectWithoutRecive_serviceInput: ["where", "create"],
  AppointmentUpsertWithoutRecive_serviceInput: ["update", "create"],
  AppointmentUpdateWithoutRecive_serviceInput: ["date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "custommer", "massager"],
  CustommerUpsertWithoutRecive_serviceInput: ["update", "create"],
  CustommerUpdateWithoutRecive_serviceInput: ["name", "Lname", "email", "phone", "address", "create_at", "appointment"],
  MassagerUpsertWithoutRecive_serviceInput: ["update", "create"],
  MassagerUpdateWithoutRecive_serviceInput: ["name", "lname", "user_id", "appointment"],
  ProductUpsertWithWhereUniqueWithoutRecive_serviceInput: ["where", "update", "create"],
  ProductUpdateWithWhereUniqueWithoutRecive_serviceInput: ["where", "data"],
  ProductUpdateManyWithWhereWithoutRecive_serviceInput: ["where", "data"],
  ProductScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "product", "product_price", "create_at"],
  PromotionUpsertWithWhereUniqueWithoutRecive_serviceInput: ["where", "update", "create"],
  PromotionUpdateWithWhereUniqueWithoutRecive_serviceInput: ["where", "data"],
  PromotionUpdateManyWithWhereWithoutRecive_serviceInput: ["where", "data"],
  PromotionScalarWhereInput: ["AND", "OR", "NOT", "id", "promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  ServiceUpsertWithWhereUniqueWithoutRecive_serviceInput: ["where", "update", "create"],
  ServiceUpdateWithWhereUniqueWithoutRecive_serviceInput: ["where", "data"],
  ServiceUpdateManyWithWhereWithoutRecive_serviceInput: ["where", "data"],
  ServiceScalarWhereInput: ["AND", "OR", "NOT", "id", "service_name", "price", "create_at"],
  ReceiptUpsertWithoutRecive_serviceInput: ["update", "create"],
  ReceiptUpdateWithoutRecive_serviceInput: ["customer_id", "create_by", "create_at", "service_id", "appoint_id", "promotion_id", "product_id"],
  Recive_serviceCreateWithoutProductInput: ["appointment", "customer", "massager", "promotion", "service", "receipt"],
  Recive_serviceCreateOrConnectWithoutProductInput: ["where", "create"],
  Recive_serviceUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
  Recive_serviceUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
  Recive_serviceUpdateManyWithWhereWithoutProductInput: ["where", "data"],
  Recive_serviceScalarWhereInput: ["AND", "OR", "NOT", "id", "appointment_id", "customer_id", "massager_id"],
  Recive_serviceCreateWithoutPromotionInput: ["appointment", "customer", "massager", "product", "service", "receipt"],
  Recive_serviceCreateOrConnectWithoutPromotionInput: ["where", "create"],
  Recive_serviceUpsertWithWhereUniqueWithoutPromotionInput: ["where", "update", "create"],
  Recive_serviceUpdateWithWhereUniqueWithoutPromotionInput: ["where", "data"],
  Recive_serviceUpdateManyWithWhereWithoutPromotionInput: ["where", "data"],
  Recive_serviceCreateWithoutReceiptInput: ["appointment", "customer", "massager", "product", "promotion", "service"],
  Recive_serviceCreateOrConnectWithoutReceiptInput: ["where", "create"],
  Recive_serviceUpsertWithoutReceiptInput: ["update", "create"],
  Recive_serviceUpdateWithoutReceiptInput: ["appointment", "customer", "massager", "product", "promotion", "service"],
  Recive_serviceCreateWithoutServiceInput: ["appointment", "customer", "massager", "product", "promotion", "receipt"],
  Recive_serviceCreateOrConnectWithoutServiceInput: ["where", "create"],
  Recive_serviceUpsertWithWhereUniqueWithoutServiceInput: ["where", "update", "create"],
  Recive_serviceUpdateWithWhereUniqueWithoutServiceInput: ["where", "data"],
  Recive_serviceUpdateManyWithWhereWithoutServiceInput: ["where", "data"],
  AppointmentCreateManyCustommerInput: ["id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "massager_id"],
  AppointmentUpdateWithoutCustommerInput: ["date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "massager", "recive_service"],
  UserUpdateWithoutRoleInput: ["name", "lname", "email", "phone", "address"],
  RoleUpdateWithoutUserInput: ["role_name"],
  AppointmentCreateManyMassagerInput: ["id", "date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "customer_id"],
  AppointmentUpdateWithoutMassagerInput: ["date_appoint", "create_at", "appoint_by", "booking_time_start", "booking_time_end", "finish", "custommer", "recive_service"],
  ProductUpdateWithoutRecive_serviceInput: ["name", "product", "product_price", "create_at"],
  PromotionUpdateWithoutRecive_serviceInput: ["promption_name", "discount_price", "promotion_start", "promotion_end", "create_at"],
  ServiceUpdateWithoutRecive_serviceInput: ["service_name", "price", "create_at"],
  Recive_serviceUpdateWithoutProductInput: ["appointment", "customer", "massager", "promotion", "service", "receipt"],
  Recive_serviceUpdateWithoutPromotionInput: ["appointment", "customer", "massager", "product", "service", "receipt"],
  Recive_serviceUpdateWithoutServiceInput: ["appointment", "customer", "massager", "product", "promotion", "receipt"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

