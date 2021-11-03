import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Token: crudResolvers.TokenCrudResolver,
  UserAuth: crudResolvers.UserAuthCrudResolver
};
const actionResolversMap = {
  Token: {
    token: actionResolvers.FindUniqueTokenResolver,
    findFirstToken: actionResolvers.FindFirstTokenResolver,
    tokens: actionResolvers.FindManyTokenResolver,
    createToken: actionResolvers.CreateTokenResolver,
    createManyToken: actionResolvers.CreateManyTokenResolver,
    deleteToken: actionResolvers.DeleteTokenResolver,
    updateToken: actionResolvers.UpdateTokenResolver,
    deleteManyToken: actionResolvers.DeleteManyTokenResolver,
    updateManyToken: actionResolvers.UpdateManyTokenResolver,
    upsertToken: actionResolvers.UpsertTokenResolver,
    aggregateToken: actionResolvers.AggregateTokenResolver,
    groupByToken: actionResolvers.GroupByTokenResolver
  },
  UserAuth: {
    userAuth: actionResolvers.FindUniqueUserAuthResolver,
    findFirstUserAuth: actionResolvers.FindFirstUserAuthResolver,
    userAuths: actionResolvers.FindManyUserAuthResolver,
    createUserAuth: actionResolvers.CreateUserAuthResolver,
    createManyUserAuth: actionResolvers.CreateManyUserAuthResolver,
    deleteUserAuth: actionResolvers.DeleteUserAuthResolver,
    updateUserAuth: actionResolvers.UpdateUserAuthResolver,
    deleteManyUserAuth: actionResolvers.DeleteManyUserAuthResolver,
    updateManyUserAuth: actionResolvers.UpdateManyUserAuthResolver,
    upsertUserAuth: actionResolvers.UpsertUserAuthResolver,
    aggregateUserAuth: actionResolvers.AggregateUserAuthResolver,
    groupByUserAuth: actionResolvers.GroupByUserAuthResolver
  }
};
const crudResolversInfo = {
  Token: ["token", "findFirstToken", "tokens", "createToken", "createManyToken", "deleteToken", "updateToken", "deleteManyToken", "updateManyToken", "upsertToken", "aggregateToken", "groupByToken"],
  UserAuth: ["userAuth", "findFirstUserAuth", "userAuths", "createUserAuth", "createManyUserAuth", "deleteUserAuth", "updateUserAuth", "deleteManyUserAuth", "updateManyUserAuth", "upsertUserAuth", "aggregateUserAuth", "groupByUserAuth"]
};
const argsInfo = {
  FindUniqueTokenArgs: ["where"],
  FindFirstTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTokenArgs: ["data"],
  CreateManyTokenArgs: ["data", "skipDuplicates"],
  DeleteTokenArgs: ["where"],
  UpdateTokenArgs: ["data", "where"],
  DeleteManyTokenArgs: ["where"],
  UpdateManyTokenArgs: ["data", "where"],
  UpsertTokenArgs: ["where", "create", "update"],
  AggregateTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserAuthArgs: ["where"],
  FindFirstUserAuthArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserAuthArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserAuthArgs: ["data"],
  CreateManyUserAuthArgs: ["data", "skipDuplicates"],
  DeleteUserAuthArgs: ["where"],
  UpdateUserAuthArgs: ["data", "where"],
  DeleteManyUserAuthArgs: ["where"],
  UpdateManyUserAuthArgs: ["data", "where"],
  UpsertUserAuthArgs: ["where", "create", "update"],
  AggregateUserAuthArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserAuthArgs: ["where", "orderBy", "by", "having", "take", "skip"]
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
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
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
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
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
  Token: relationResolvers.TokenRelationsResolver,
  UserAuth: relationResolvers.UserAuthRelationsResolver
};
const relationResolversInfo = {
  Token: ["UserAuth"],
  UserAuth: ["tokens"]
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
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
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
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

const modelsInfo = {
  Token: ["id", "token", "type", "createdAt", "updatedAt", "userAuthId"],
  UserAuth: ["id", "cpf", "emailToRecover", "password"]
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
  AggregateToken: ["_count", "_avg", "_sum", "_min", "_max"],
  TokenGroupBy: ["id", "token", "type", "createdAt", "updatedAt", "userAuthId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUserAuth: ["_count", "_min", "_max"],
  UserAuthGroupBy: ["id", "cpf", "emailToRecover", "password", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  TokenCountAggregate: ["id", "token", "type", "createdAt", "updatedAt", "userAuthId", "_all"],
  TokenAvgAggregate: ["id"],
  TokenSumAggregate: ["id"],
  TokenMinAggregate: ["id", "token", "type", "createdAt", "updatedAt", "userAuthId"],
  TokenMaxAggregate: ["id", "token", "type", "createdAt", "updatedAt", "userAuthId"],
  UserAuthCount: ["tokens"],
  UserAuthCountAggregate: ["id", "cpf", "emailToRecover", "password", "_all"],
  UserAuthMinAggregate: ["id", "cpf", "emailToRecover", "password"],
  UserAuthMaxAggregate: ["id", "cpf", "emailToRecover", "password"]
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
  TokenWhereInput: ["AND", "OR", "NOT", "id", "token", "type", "createdAt", "updatedAt", "UserAuth", "userAuthId"],
  TokenOrderByWithRelationInput: ["id", "token", "type", "createdAt", "updatedAt", "UserAuth", "userAuthId"],
  TokenWhereUniqueInput: ["id"],
  TokenOrderByWithAggregationInput: ["id", "token", "type", "createdAt", "updatedAt", "userAuthId", "_count", "_avg", "_max", "_min", "_sum"],
  TokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "token", "type", "createdAt", "updatedAt", "userAuthId"],
  UserAuthWhereInput: ["AND", "OR", "NOT", "id", "cpf", "emailToRecover", "password", "tokens"],
  UserAuthOrderByWithRelationInput: ["id", "cpf", "emailToRecover", "password", "tokens"],
  UserAuthWhereUniqueInput: ["id"],
  UserAuthOrderByWithAggregationInput: ["id", "cpf", "emailToRecover", "password", "_count", "_max", "_min"],
  UserAuthScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "cpf", "emailToRecover", "password"],
  TokenCreateInput: ["token", "type", "createdAt", "updatedAt", "UserAuth"],
  TokenUpdateInput: ["token", "type", "createdAt", "updatedAt", "UserAuth"],
  TokenCreateManyInput: ["id", "token", "type", "createdAt", "updatedAt", "userAuthId"],
  TokenUpdateManyMutationInput: ["token", "type", "createdAt", "updatedAt"],
  UserAuthCreateInput: ["id", "cpf", "emailToRecover", "password", "tokens"],
  UserAuthUpdateInput: ["id", "cpf", "emailToRecover", "password", "tokens"],
  UserAuthCreateManyInput: ["id", "cpf", "emailToRecover", "password"],
  UserAuthUpdateManyMutationInput: ["id", "cpf", "emailToRecover", "password"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumTokenKindFilter: ["equals", "in", "notIn", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserAuthRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  TokenCountOrderByAggregateInput: ["id", "token", "type", "createdAt", "updatedAt", "userAuthId"],
  TokenAvgOrderByAggregateInput: ["id"],
  TokenMaxOrderByAggregateInput: ["id", "token", "type", "createdAt", "updatedAt", "userAuthId"],
  TokenMinOrderByAggregateInput: ["id", "token", "type", "createdAt", "updatedAt", "userAuthId"],
  TokenSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumTokenKindWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  TokenListRelationFilter: ["every", "some", "none"],
  TokenOrderByRelationAggregateInput: ["_count"],
  UserAuthCountOrderByAggregateInput: ["id", "cpf", "emailToRecover", "password"],
  UserAuthMaxOrderByAggregateInput: ["id", "cpf", "emailToRecover", "password"],
  UserAuthMinOrderByAggregateInput: ["id", "cpf", "emailToRecover", "password"],
  UserAuthCreateNestedOneWithoutTokensInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumTokenKindFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserAuthUpdateOneWithoutTokensInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  TokenCreateNestedManyWithoutUserAuthInput: ["create", "connectOrCreate", "createMany", "connect"],
  TokenUpdateManyWithoutUserAuthInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumTokenKindFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumTokenKindWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserAuthCreateWithoutTokensInput: ["id", "cpf", "emailToRecover", "password"],
  UserAuthCreateOrConnectWithoutTokensInput: ["where", "create"],
  UserAuthUpsertWithoutTokensInput: ["update", "create"],
  UserAuthUpdateWithoutTokensInput: ["id", "cpf", "emailToRecover", "password"],
  TokenCreateWithoutUserAuthInput: ["token", "type", "createdAt", "updatedAt"],
  TokenCreateOrConnectWithoutUserAuthInput: ["where", "create"],
  TokenCreateManyUserAuthInputEnvelope: ["data", "skipDuplicates"],
  TokenUpsertWithWhereUniqueWithoutUserAuthInput: ["where", "update", "create"],
  TokenUpdateWithWhereUniqueWithoutUserAuthInput: ["where", "data"],
  TokenUpdateManyWithWhereWithoutUserAuthInput: ["where", "data"],
  TokenScalarWhereInput: ["AND", "OR", "NOT", "id", "token", "type", "createdAt", "updatedAt", "userAuthId"],
  TokenCreateManyUserAuthInput: ["id", "token", "type", "createdAt", "updatedAt"],
  TokenUpdateWithoutUserAuthInput: ["token", "type", "createdAt", "updatedAt"]
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

