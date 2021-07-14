import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import * as React from "react";
import * as ApolloReactComponents from "@apollo/client/react/components";
import * as ApolloReactHoc from "@apollo/client/react/hoc";
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars["String"]>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: "accounts";
  access_token?: Maybe<Scalars["String"]>;
  access_token_expires?: Maybe<Scalars["timestamptz"]>;
  compound_id: Scalars["String"];
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  provider_account_id: Scalars["String"];
  provider_id: Scalars["String"];
  provider_type: Scalars["String"];
  refresh_token?: Maybe<Scalars["String"]>;
  updated_at: Scalars["timestamptz"];
  user_id: Scalars["uuid"];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: "accounts_aggregate";
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: "accounts_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Accounts_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: Maybe<Array<Accounts_Bool_Exp>>;
  _not?: Maybe<Accounts_Bool_Exp>;
  _or?: Maybe<Array<Accounts_Bool_Exp>>;
  access_token?: Maybe<String_Comparison_Exp>;
  access_token_expires?: Maybe<Timestamptz_Comparison_Exp>;
  compound_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  provider_account_id?: Maybe<String_Comparison_Exp>;
  provider_id?: Maybe<String_Comparison_Exp>;
  provider_type?: Maybe<String_Comparison_Exp>;
  refresh_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsPkey = "accounts_pkey",
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: Maybe<Scalars["String"]>;
  access_token_expires?: Maybe<Scalars["timestamptz"]>;
  compound_id?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  provider_account_id?: Maybe<Scalars["String"]>;
  provider_id?: Maybe<Scalars["String"]>;
  provider_type?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: "accounts_max_fields";
  access_token?: Maybe<Scalars["String"]>;
  access_token_expires?: Maybe<Scalars["timestamptz"]>;
  compound_id?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  provider_account_id?: Maybe<Scalars["String"]>;
  provider_id?: Maybe<Scalars["String"]>;
  provider_type?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: "accounts_min_fields";
  access_token?: Maybe<Scalars["String"]>;
  access_token_expires?: Maybe<Scalars["timestamptz"]>;
  compound_id?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  provider_account_id?: Maybe<Scalars["String"]>;
  provider_id?: Maybe<Scalars["String"]>;
  provider_type?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: "accounts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  AccessTokenExpires = "access_token_expires",
  /** column name */
  CompoundId = "compound_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  ProviderAccountId = "provider_account_id",
  /** column name */
  ProviderId = "provider_id",
  /** column name */
  ProviderType = "provider_type",
  /** column name */
  RefreshToken = "refresh_token",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: Maybe<Scalars["String"]>;
  access_token_expires?: Maybe<Scalars["timestamptz"]>;
  compound_id?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  provider_account_id?: Maybe<Scalars["String"]>;
  provider_id?: Maybe<Scalars["String"]>;
  provider_type?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  AccessTokenExpires = "access_token_expires",
  /** column name */
  CompoundId = "compound_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  ProviderAccountId = "provider_account_id",
  /** column name */
  ProviderId = "provider_id",
  /** column name */
  ProviderType = "provider_type",
  /** column name */
  RefreshToken = "refresh_token",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** columns and relationships of "feeds" */
export type Feeds = {
  __typename?: "feeds";
  /** An object relationship */
  author?: Maybe<Users>;
  author_id: Scalars["uuid"];
  body: Scalars["String"];
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "feeds" */
export type Feeds_Aggregate = {
  __typename?: "feeds_aggregate";
  aggregate?: Maybe<Feeds_Aggregate_Fields>;
  nodes: Array<Feeds>;
};

/** aggregate fields of "feeds" */
export type Feeds_Aggregate_Fields = {
  __typename?: "feeds_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Feeds_Max_Fields>;
  min?: Maybe<Feeds_Min_Fields>;
};

/** aggregate fields of "feeds" */
export type Feeds_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Feeds_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "feeds" */
export type Feeds_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Feeds_Max_Order_By>;
  min?: Maybe<Feeds_Min_Order_By>;
};

/** input type for inserting array relation for remote table "feeds" */
export type Feeds_Arr_Rel_Insert_Input = {
  data: Array<Feeds_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Feeds_On_Conflict>;
};

/** Boolean expression to filter rows from the table "feeds". All fields are combined with a logical 'AND'. */
export type Feeds_Bool_Exp = {
  _and?: Maybe<Array<Feeds_Bool_Exp>>;
  _not?: Maybe<Feeds_Bool_Exp>;
  _or?: Maybe<Array<Feeds_Bool_Exp>>;
  author?: Maybe<Users_Bool_Exp>;
  author_id?: Maybe<Uuid_Comparison_Exp>;
  body?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "feeds" */
export enum Feeds_Constraint {
  /** unique or primary key constraint */
  FeedsPkey = "feeds_pkey",
}

/** input type for inserting data into table "feeds" */
export type Feeds_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>;
  author_id?: Maybe<Scalars["uuid"]>;
  body?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Feeds_Max_Fields = {
  __typename?: "feeds_max_fields";
  author_id?: Maybe<Scalars["uuid"]>;
  body?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "feeds" */
export type Feeds_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Feeds_Min_Fields = {
  __typename?: "feeds_min_fields";
  author_id?: Maybe<Scalars["uuid"]>;
  body?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "feeds" */
export type Feeds_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "feeds" */
export type Feeds_Mutation_Response = {
  __typename?: "feeds_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Feeds>;
};

/** on conflict condition type for table "feeds" */
export type Feeds_On_Conflict = {
  constraint: Feeds_Constraint;
  update_columns?: Array<Feeds_Update_Column>;
  where?: Maybe<Feeds_Bool_Exp>;
};

/** Ordering options when selecting data from "feeds". */
export type Feeds_Order_By = {
  author?: Maybe<Users_Order_By>;
  author_id?: Maybe<Order_By>;
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: feeds */
export type Feeds_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "feeds" */
export enum Feeds_Select_Column {
  /** column name */
  AuthorId = "author_id",
  /** column name */
  Body = "body",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "feeds" */
export type Feeds_Set_Input = {
  author_id?: Maybe<Scalars["uuid"]>;
  body?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** update columns of table "feeds" */
export enum Feeds_Update_Column {
  /** column name */
  AuthorId = "author_id",
  /** column name */
  Body = "body",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "feeds" */
  delete_feeds?: Maybe<Feeds_Mutation_Response>;
  /** delete single row from the table: "feeds" */
  delete_feeds_by_pk?: Maybe<Feeds>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_requests" */
  delete_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** delete single row from the table: "verification_requests" */
  delete_verification_requests_by_pk?: Maybe<Verification_Requests>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "feeds" */
  insert_feeds?: Maybe<Feeds_Mutation_Response>;
  /** insert a single row into the table: "feeds" */
  insert_feeds_one?: Maybe<Feeds>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_requests" */
  insert_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** insert a single row into the table: "verification_requests" */
  insert_verification_requests_one?: Maybe<Verification_Requests>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "feeds" */
  update_feeds?: Maybe<Feeds_Mutation_Response>;
  /** update single row of the table: "feeds" */
  update_feeds_by_pk?: Maybe<Feeds>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "verification_requests" */
  update_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** update single row of the table: "verification_requests" */
  update_verification_requests_by_pk?: Maybe<Verification_Requests>;
};

/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_FeedsArgs = {
  where: Feeds_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Feeds_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Verification_RequestsArgs = {
  where: Verification_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Verification_Requests_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_FeedsArgs = {
  objects: Array<Feeds_Insert_Input>;
  on_conflict?: Maybe<Feeds_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Feeds_OneArgs = {
  object: Feeds_Insert_Input;
  on_conflict?: Maybe<Feeds_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_RequestsArgs = {
  objects: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_Requests_OneArgs = {
  object: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_FeedsArgs = {
  _set?: Maybe<Feeds_Set_Input>;
  where: Feeds_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Feeds_By_PkArgs = {
  _set?: Maybe<Feeds_Set_Input>;
  pk_columns: Feeds_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _inc?: Maybe<Sessions_Inc_Input>;
  _set?: Maybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _inc?: Maybe<Sessions_Inc_Input>;
  _set?: Maybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_RequestsArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  where: Verification_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_Requests_By_PkArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  pk_columns: Verification_Requests_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** An array relationship */
  feeds: Array<Feeds>;
  /** An aggregate relationship */
  feeds_aggregate: Feeds_Aggregate;
  /** fetch data from the table: "feeds" using primary key columns */
  feeds_by_pk?: Maybe<Feeds>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};

export type Query_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootFeedsArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};

export type Query_RootFeeds_AggregateArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};

export type Query_RootFeeds_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

export type Query_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

export type Query_RootVerification_Requests_By_PkArgs = {
  id: Scalars["uuid"];
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: "sessions";
  access_token: Scalars["String"];
  created_at: Scalars["timestamptz"];
  expires: Scalars["timestamptz"];
  id: Scalars["uuid"];
  session_token: Scalars["String"];
  updated_at: Scalars["timestamptz"];
  user_id: Scalars["Int"];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: "sessions_aggregate";
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: "sessions_aggregate_fields";
  avg?: Maybe<Sessions_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
  stddev?: Maybe<Sessions_Stddev_Fields>;
  stddev_pop?: Maybe<Sessions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sessions_Stddev_Samp_Fields>;
  sum?: Maybe<Sessions_Sum_Fields>;
  var_pop?: Maybe<Sessions_Var_Pop_Fields>;
  var_samp?: Maybe<Sessions_Var_Samp_Fields>;
  variance?: Maybe<Sessions_Variance_Fields>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sessions_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Sessions_Avg_Fields = {
  __typename?: "sessions_avg_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: Maybe<Array<Sessions_Bool_Exp>>;
  _not?: Maybe<Sessions_Bool_Exp>;
  _or?: Maybe<Array<Sessions_Bool_Exp>>;
  access_token?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  session_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint */
  SessionsPkey = "sessions_pkey",
}

/** input type for incrementing numeric columns in table "sessions" */
export type Sessions_Inc_Input = {
  user_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  access_token?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  session_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: "sessions_max_fields";
  access_token?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  session_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: "sessions_min_fields";
  access_token?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  session_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: "sessions_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: Maybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  access_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  SessionToken = "session_token",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  access_token?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  session_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Sessions_Stddev_Fields = {
  __typename?: "sessions_stddev_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Sessions_Stddev_Pop_Fields = {
  __typename?: "sessions_stddev_pop_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Sessions_Stddev_Samp_Fields = {
  __typename?: "sessions_stddev_samp_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Sessions_Sum_Fields = {
  __typename?: "sessions_sum_fields";
  user_id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  SessionToken = "session_token",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** aggregate var_pop on columns */
export type Sessions_Var_Pop_Fields = {
  __typename?: "sessions_var_pop_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Sessions_Var_Samp_Fields = {
  __typename?: "sessions_var_samp_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Sessions_Variance_Fields = {
  __typename?: "sessions_variance_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** An array relationship */
  feeds: Array<Feeds>;
  /** An aggregate relationship */
  feeds_aggregate: Feeds_Aggregate;
  /** fetch data from the table: "feeds" using primary key columns */
  feeds_by_pk?: Maybe<Feeds>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};

export type Subscription_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootFeedsArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};

export type Subscription_RootFeeds_AggregateArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};

export type Subscription_RootFeeds_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

export type Subscription_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

export type Subscription_RootVerification_Requests_By_PkArgs = {
  id: Scalars["uuid"];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  created_at: Scalars["timestamptz"];
  email: Scalars["String"];
  email_verified?: Maybe<Scalars["timestamptz"]>;
  /** An array relationship */
  feeds: Array<Feeds>;
  /** An aggregate relationship */
  feeds_aggregate: Feeds_Aggregate;
  id: Scalars["uuid"];
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at: Scalars["timestamptz"];
};

/** columns and relationships of "users" */
export type UsersFeedsArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersFeeds_AggregateArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_verified?: Maybe<Timestamptz_Comparison_Exp>;
  feeds?: Maybe<Feeds_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = "users_pkey",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  email_verified?: Maybe<Scalars["timestamptz"]>;
  feeds?: Maybe<Feeds_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  email_verified?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  email_verified?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  feeds_aggregate?: Maybe<Feeds_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "email_verified",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  email_verified?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "email_verified",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};

/** columns and relationships of "verification_requests" */
export type Verification_Requests = {
  __typename?: "verification_requests";
  created_at: Scalars["timestamptz"];
  expires: Scalars["timestamptz"];
  id: Scalars["uuid"];
  identifier: Scalars["String"];
  token: Scalars["String"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "verification_requests" */
export type Verification_Requests_Aggregate = {
  __typename?: "verification_requests_aggregate";
  aggregate?: Maybe<Verification_Requests_Aggregate_Fields>;
  nodes: Array<Verification_Requests>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_Fields = {
  __typename?: "verification_requests_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Verification_Requests_Max_Fields>;
  min?: Maybe<Verification_Requests_Min_Fields>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Verification_Requests_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "verification_requests". All fields are combined with a logical 'AND'. */
export type Verification_Requests_Bool_Exp = {
  _and?: Maybe<Array<Verification_Requests_Bool_Exp>>;
  _not?: Maybe<Verification_Requests_Bool_Exp>;
  _or?: Maybe<Array<Verification_Requests_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  identifier?: Maybe<String_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_requests" */
export enum Verification_Requests_Constraint {
  /** unique or primary key constraint */
  VerificationRequestsPkey = "verification_requests_pkey",
}

/** input type for inserting data into table "verification_requests" */
export type Verification_Requests_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  identifier?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Verification_Requests_Max_Fields = {
  __typename?: "verification_requests_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  identifier?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate min on columns */
export type Verification_Requests_Min_Fields = {
  __typename?: "verification_requests_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  identifier?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** response of any mutation on the table "verification_requests" */
export type Verification_Requests_Mutation_Response = {
  __typename?: "verification_requests_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Requests>;
};

/** on conflict condition type for table "verification_requests" */
export type Verification_Requests_On_Conflict = {
  constraint: Verification_Requests_Constraint;
  update_columns?: Array<Verification_Requests_Update_Column>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_requests". */
export type Verification_Requests_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: verification_requests */
export type Verification_Requests_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "verification_requests" */
export enum Verification_Requests_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  Identifier = "identifier",
  /** column name */
  Token = "token",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "verification_requests" */
export type Verification_Requests_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  identifier?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** update columns of table "verification_requests" */
export enum Verification_Requests_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  Identifier = "identifier",
  /** column name */
  Token = "token",
  /** column name */
  UpdatedAt = "updated_at",
}

export type InsertFeedMutationVariables = Exact<{
  author_id: Scalars["uuid"];
  body?: Maybe<Scalars["String"]>;
}>;

export type InsertFeedMutation = { __typename?: "mutation_root" } & {
  insert_feeds_one?: Maybe<{ __typename?: "feeds" } & Pick<Feeds, "id">>;
};

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars["uuid"];
  name?: Maybe<Scalars["String"]>;
}>;

export type UpdateUserMutation = { __typename?: "mutation_root" } & {
  update_users?: Maybe<
    { __typename?: "users_mutation_response" } & {
      returning: Array<{ __typename?: "users" } & Pick<Users, "id" | "name">>;
    }
  >;
};

export type FetchUserQueryVariables = Exact<{
  userId: Scalars["uuid"];
}>;

export type FetchUserQuery = { __typename?: "query_root" } & {
  users_by_pk?: Maybe<{ __typename?: "users" } & Pick<Users, "id" | "name">>;
};

export type FetchFeedsSubscriptionVariables = Exact<{ [key: string]: never }>;

export type FetchFeedsSubscription = { __typename?: "subscription_root" } & {
  feeds: Array<
    { __typename?: "feeds" } & Pick<Feeds, "id" | "created_at" | "body"> & {
        author?: Maybe<
          { __typename?: "users" } & Pick<Users, "id" | "name" | "image">
        >;
      }
  >;
};

export const InsertFeedDocument = gql`
  mutation insertFeed($author_id: uuid!, $body: String) {
    insert_feeds_one(object: { author_id: $author_id, body: $body }) {
      id
    }
  }
`;
export type InsertFeedMutationFn = Apollo.MutationFunction<
  InsertFeedMutation,
  InsertFeedMutationVariables
>;
export type InsertFeedComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertFeedMutation,
    InsertFeedMutationVariables
  >,
  "mutation"
>;

export const InsertFeedComponent = (props: InsertFeedComponentProps) => (
  <ApolloReactComponents.Mutation<
    InsertFeedMutation,
    InsertFeedMutationVariables
  >
    mutation={InsertFeedDocument}
    {...props}
  />
);

export type InsertFeedProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertFeedMutation,
    InsertFeedMutationVariables
  >;
} &
  TChildProps;
export function withInsertFeed<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertFeedMutation,
    InsertFeedMutationVariables,
    InsertFeedProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertFeedMutation,
    InsertFeedMutationVariables,
    InsertFeedProps<TChildProps, TDataName>
  >(InsertFeedDocument, {
    alias: "insertFeed",
    ...operationOptions,
  });
}

/**
 * __useInsertFeedMutation__
 *
 * To run a mutation, you first call `useInsertFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertFeedMutation, { data, loading, error }] = useInsertFeedMutation({
 *   variables: {
 *      author_id: // value for 'author_id'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useInsertFeedMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertFeedMutation,
    InsertFeedMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertFeedMutation, InsertFeedMutationVariables>(
    InsertFeedDocument,
    options
  );
}
export type InsertFeedMutationHookResult = ReturnType<
  typeof useInsertFeedMutation
>;
export type InsertFeedMutationResult =
  Apollo.MutationResult<InsertFeedMutation>;
export type InsertFeedMutationOptions = Apollo.BaseMutationOptions<
  InsertFeedMutation,
  InsertFeedMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser($userId: uuid!, $name: String) {
    update_users(where: { id: { _eq: $userId } }, _set: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export type UpdateUserComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
  "mutation"
>;

export const UpdateUserComponent = (props: UpdateUserComponentProps) => (
  <ApolloReactComponents.Mutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
    mutation={UpdateUserDocument}
    {...props}
  />
);

export type UpdateUserProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >;
} &
  TChildProps;
export function withUpdateUser<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateUserMutation,
    UpdateUserMutationVariables,
    UpdateUserProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateUserMutation,
    UpdateUserMutationVariables,
    UpdateUserProps<TChildProps, TDataName>
  >(UpdateUserDocument, {
    alias: "updateUser",
    ...operationOptions,
  });
}

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const FetchUserDocument = gql`
  query fetchUser($userId: uuid!) {
    users_by_pk(id: $userId) {
      id
      name
    }
  }
`;
export type FetchUserComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    FetchUserQuery,
    FetchUserQueryVariables
  >,
  "query"
> &
  ({ variables: FetchUserQueryVariables; skip?: boolean } | { skip: boolean });

export const FetchUserComponent = (props: FetchUserComponentProps) => (
  <ApolloReactComponents.Query<FetchUserQuery, FetchUserQueryVariables>
    query={FetchUserDocument}
    {...props}
  />
);

export type FetchUserProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    FetchUserQuery,
    FetchUserQueryVariables
  >;
} &
  TChildProps;
export function withFetchUser<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FetchUserQuery,
    FetchUserQueryVariables,
    FetchUserProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FetchUserQuery,
    FetchUserQueryVariables,
    FetchUserProps<TChildProps, TDataName>
  >(FetchUserDocument, {
    alias: "fetchUser",
    ...operationOptions,
  });
}

/**
 * __useFetchUserQuery__
 *
 * To run a query within a React component, call `useFetchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFetchUserQuery(
  baseOptions: Apollo.QueryHookOptions<FetchUserQuery, FetchUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchUserQuery, FetchUserQueryVariables>(
    FetchUserDocument,
    options
  );
}
export function useFetchUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchUserQuery,
    FetchUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchUserQuery, FetchUserQueryVariables>(
    FetchUserDocument,
    options
  );
}
export type FetchUserQueryHookResult = ReturnType<typeof useFetchUserQuery>;
export type FetchUserLazyQueryHookResult = ReturnType<
  typeof useFetchUserLazyQuery
>;
export type FetchUserQueryResult = Apollo.QueryResult<
  FetchUserQuery,
  FetchUserQueryVariables
>;
export const FetchFeedsDocument = gql`
  subscription fetchFeeds {
    feeds(order_by: { created_at: desc }) {
      id
      created_at
      body
      author {
        id
        name
        image
      }
    }
  }
`;
export type FetchFeedsComponentProps = Omit<
  ApolloReactComponents.SubscriptionComponentOptions<
    FetchFeedsSubscription,
    FetchFeedsSubscriptionVariables
  >,
  "subscription"
>;

export const FetchFeedsComponent = (props: FetchFeedsComponentProps) => (
  <ApolloReactComponents.Subscription<
    FetchFeedsSubscription,
    FetchFeedsSubscriptionVariables
  >
    subscription={FetchFeedsDocument}
    {...props}
  />
);

export type FetchFeedsProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    FetchFeedsSubscription,
    FetchFeedsSubscriptionVariables
  >;
} &
  TChildProps;
export function withFetchFeeds<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FetchFeedsSubscription,
    FetchFeedsSubscriptionVariables,
    FetchFeedsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withSubscription<
    TProps,
    FetchFeedsSubscription,
    FetchFeedsSubscriptionVariables,
    FetchFeedsProps<TChildProps, TDataName>
  >(FetchFeedsDocument, {
    alias: "fetchFeeds",
    ...operationOptions,
  });
}

/**
 * __useFetchFeedsSubscription__
 *
 * To run a query within a React component, call `useFetchFeedsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useFetchFeedsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchFeedsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useFetchFeedsSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    FetchFeedsSubscription,
    FetchFeedsSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    FetchFeedsSubscription,
    FetchFeedsSubscriptionVariables
  >(FetchFeedsDocument, options);
}
export type FetchFeedsSubscriptionHookResult = ReturnType<
  typeof useFetchFeedsSubscription
>;
export type FetchFeedsSubscriptionResult =
  Apollo.SubscriptionResult<FetchFeedsSubscription>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Int_comparison_exp: Int_Comparison_Exp;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  String_comparison_exp: String_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars["String"]>;
  accounts: ResolverTypeWrapper<Accounts>;
  accounts_aggregate: ResolverTypeWrapper<Accounts_Aggregate>;
  accounts_aggregate_fields: ResolverTypeWrapper<Accounts_Aggregate_Fields>;
  accounts_bool_exp: Accounts_Bool_Exp;
  accounts_constraint: Accounts_Constraint;
  accounts_insert_input: Accounts_Insert_Input;
  accounts_max_fields: ResolverTypeWrapper<Accounts_Max_Fields>;
  accounts_min_fields: ResolverTypeWrapper<Accounts_Min_Fields>;
  accounts_mutation_response: ResolverTypeWrapper<Accounts_Mutation_Response>;
  accounts_on_conflict: Accounts_On_Conflict;
  accounts_order_by: Accounts_Order_By;
  accounts_pk_columns_input: Accounts_Pk_Columns_Input;
  accounts_select_column: Accounts_Select_Column;
  accounts_set_input: Accounts_Set_Input;
  accounts_update_column: Accounts_Update_Column;
  feeds: ResolverTypeWrapper<Feeds>;
  feeds_aggregate: ResolverTypeWrapper<Feeds_Aggregate>;
  feeds_aggregate_fields: ResolverTypeWrapper<Feeds_Aggregate_Fields>;
  feeds_aggregate_order_by: Feeds_Aggregate_Order_By;
  feeds_arr_rel_insert_input: Feeds_Arr_Rel_Insert_Input;
  feeds_bool_exp: Feeds_Bool_Exp;
  feeds_constraint: Feeds_Constraint;
  feeds_insert_input: Feeds_Insert_Input;
  feeds_max_fields: ResolverTypeWrapper<Feeds_Max_Fields>;
  feeds_max_order_by: Feeds_Max_Order_By;
  feeds_min_fields: ResolverTypeWrapper<Feeds_Min_Fields>;
  feeds_min_order_by: Feeds_Min_Order_By;
  feeds_mutation_response: ResolverTypeWrapper<Feeds_Mutation_Response>;
  feeds_on_conflict: Feeds_On_Conflict;
  feeds_order_by: Feeds_Order_By;
  feeds_pk_columns_input: Feeds_Pk_Columns_Input;
  feeds_select_column: Feeds_Select_Column;
  feeds_set_input: Feeds_Set_Input;
  feeds_update_column: Feeds_Update_Column;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  sessions: ResolverTypeWrapper<Sessions>;
  sessions_aggregate: ResolverTypeWrapper<Sessions_Aggregate>;
  sessions_aggregate_fields: ResolverTypeWrapper<Sessions_Aggregate_Fields>;
  sessions_avg_fields: ResolverTypeWrapper<Sessions_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  sessions_bool_exp: Sessions_Bool_Exp;
  sessions_constraint: Sessions_Constraint;
  sessions_inc_input: Sessions_Inc_Input;
  sessions_insert_input: Sessions_Insert_Input;
  sessions_max_fields: ResolverTypeWrapper<Sessions_Max_Fields>;
  sessions_min_fields: ResolverTypeWrapper<Sessions_Min_Fields>;
  sessions_mutation_response: ResolverTypeWrapper<Sessions_Mutation_Response>;
  sessions_on_conflict: Sessions_On_Conflict;
  sessions_order_by: Sessions_Order_By;
  sessions_pk_columns_input: Sessions_Pk_Columns_Input;
  sessions_select_column: Sessions_Select_Column;
  sessions_set_input: Sessions_Set_Input;
  sessions_stddev_fields: ResolverTypeWrapper<Sessions_Stddev_Fields>;
  sessions_stddev_pop_fields: ResolverTypeWrapper<Sessions_Stddev_Pop_Fields>;
  sessions_stddev_samp_fields: ResolverTypeWrapper<Sessions_Stddev_Samp_Fields>;
  sessions_sum_fields: ResolverTypeWrapper<Sessions_Sum_Fields>;
  sessions_update_column: Sessions_Update_Column;
  sessions_var_pop_fields: ResolverTypeWrapper<Sessions_Var_Pop_Fields>;
  sessions_var_samp_fields: ResolverTypeWrapper<Sessions_Var_Samp_Fields>;
  sessions_variance_fields: ResolverTypeWrapper<Sessions_Variance_Fields>;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars["timestamptz"]>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_update_column: Users_Update_Column;
  uuid: ResolverTypeWrapper<Scalars["uuid"]>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
  verification_requests: ResolverTypeWrapper<Verification_Requests>;
  verification_requests_aggregate: ResolverTypeWrapper<Verification_Requests_Aggregate>;
  verification_requests_aggregate_fields: ResolverTypeWrapper<Verification_Requests_Aggregate_Fields>;
  verification_requests_bool_exp: Verification_Requests_Bool_Exp;
  verification_requests_constraint: Verification_Requests_Constraint;
  verification_requests_insert_input: Verification_Requests_Insert_Input;
  verification_requests_max_fields: ResolverTypeWrapper<Verification_Requests_Max_Fields>;
  verification_requests_min_fields: ResolverTypeWrapper<Verification_Requests_Min_Fields>;
  verification_requests_mutation_response: ResolverTypeWrapper<Verification_Requests_Mutation_Response>;
  verification_requests_on_conflict: Verification_Requests_On_Conflict;
  verification_requests_order_by: Verification_Requests_Order_By;
  verification_requests_pk_columns_input: Verification_Requests_Pk_Columns_Input;
  verification_requests_select_column: Verification_Requests_Select_Column;
  verification_requests_set_input: Verification_Requests_Set_Input;
  verification_requests_update_column: Verification_Requests_Update_Column;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Int_comparison_exp: Int_Comparison_Exp;
  Int: Scalars["Int"];
  Boolean: Scalars["Boolean"];
  String_comparison_exp: String_Comparison_Exp;
  String: Scalars["String"];
  accounts: Accounts;
  accounts_aggregate: Accounts_Aggregate;
  accounts_aggregate_fields: Accounts_Aggregate_Fields;
  accounts_bool_exp: Accounts_Bool_Exp;
  accounts_insert_input: Accounts_Insert_Input;
  accounts_max_fields: Accounts_Max_Fields;
  accounts_min_fields: Accounts_Min_Fields;
  accounts_mutation_response: Accounts_Mutation_Response;
  accounts_on_conflict: Accounts_On_Conflict;
  accounts_order_by: Accounts_Order_By;
  accounts_pk_columns_input: Accounts_Pk_Columns_Input;
  accounts_set_input: Accounts_Set_Input;
  feeds: Feeds;
  feeds_aggregate: Feeds_Aggregate;
  feeds_aggregate_fields: Feeds_Aggregate_Fields;
  feeds_aggregate_order_by: Feeds_Aggregate_Order_By;
  feeds_arr_rel_insert_input: Feeds_Arr_Rel_Insert_Input;
  feeds_bool_exp: Feeds_Bool_Exp;
  feeds_insert_input: Feeds_Insert_Input;
  feeds_max_fields: Feeds_Max_Fields;
  feeds_max_order_by: Feeds_Max_Order_By;
  feeds_min_fields: Feeds_Min_Fields;
  feeds_min_order_by: Feeds_Min_Order_By;
  feeds_mutation_response: Feeds_Mutation_Response;
  feeds_on_conflict: Feeds_On_Conflict;
  feeds_order_by: Feeds_Order_By;
  feeds_pk_columns_input: Feeds_Pk_Columns_Input;
  feeds_set_input: Feeds_Set_Input;
  mutation_root: {};
  query_root: {};
  sessions: Sessions;
  sessions_aggregate: Sessions_Aggregate;
  sessions_aggregate_fields: Sessions_Aggregate_Fields;
  sessions_avg_fields: Sessions_Avg_Fields;
  Float: Scalars["Float"];
  sessions_bool_exp: Sessions_Bool_Exp;
  sessions_inc_input: Sessions_Inc_Input;
  sessions_insert_input: Sessions_Insert_Input;
  sessions_max_fields: Sessions_Max_Fields;
  sessions_min_fields: Sessions_Min_Fields;
  sessions_mutation_response: Sessions_Mutation_Response;
  sessions_on_conflict: Sessions_On_Conflict;
  sessions_order_by: Sessions_Order_By;
  sessions_pk_columns_input: Sessions_Pk_Columns_Input;
  sessions_set_input: Sessions_Set_Input;
  sessions_stddev_fields: Sessions_Stddev_Fields;
  sessions_stddev_pop_fields: Sessions_Stddev_Pop_Fields;
  sessions_stddev_samp_fields: Sessions_Stddev_Samp_Fields;
  sessions_sum_fields: Sessions_Sum_Fields;
  sessions_var_pop_fields: Sessions_Var_Pop_Fields;
  sessions_var_samp_fields: Sessions_Var_Samp_Fields;
  sessions_variance_fields: Sessions_Variance_Fields;
  subscription_root: {};
  timestamptz: Scalars["timestamptz"];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_bool_exp: Users_Bool_Exp;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_min_fields: Users_Min_Fields;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_set_input: Users_Set_Input;
  uuid: Scalars["uuid"];
  uuid_comparison_exp: Uuid_Comparison_Exp;
  verification_requests: Verification_Requests;
  verification_requests_aggregate: Verification_Requests_Aggregate;
  verification_requests_aggregate_fields: Verification_Requests_Aggregate_Fields;
  verification_requests_bool_exp: Verification_Requests_Bool_Exp;
  verification_requests_insert_input: Verification_Requests_Insert_Input;
  verification_requests_max_fields: Verification_Requests_Max_Fields;
  verification_requests_min_fields: Verification_Requests_Min_Fields;
  verification_requests_mutation_response: Verification_Requests_Mutation_Response;
  verification_requests_on_conflict: Verification_Requests_On_Conflict;
  verification_requests_order_by: Verification_Requests_Order_By;
  verification_requests_pk_columns_input: Verification_Requests_Pk_Columns_Input;
  verification_requests_set_input: Verification_Requests_Set_Input;
};

export type CachedDirectiveArgs = {
  ttl?: Scalars["Int"];
  refresh?: Scalars["Boolean"];
};

export type CachedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = CachedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts"] = ResolversParentTypes["accounts"]
> = {
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  access_token_expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  compound_id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  provider_account_id?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  provider_id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  provider_type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  refresh_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_aggregate"] = ResolversParentTypes["accounts_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["accounts_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["accounts"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_aggregate_fields"] = ResolversParentTypes["accounts_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<Accounts_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["accounts_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["accounts_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_max_fields"] = ResolversParentTypes["accounts_max_fields"]
> = {
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  access_token_expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  compound_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  provider_account_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  provider_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  provider_type?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refresh_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_min_fields"] = ResolversParentTypes["accounts_min_fields"]
> = {
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  access_token_expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  compound_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  provider_account_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  provider_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  provider_type?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refresh_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_mutation_response"] = ResolversParentTypes["accounts_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["accounts"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeedsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["feeds"] = ResolversParentTypes["feeds"]
> = {
  author?: Resolver<Maybe<ResolversTypes["users"]>, ParentType, ContextType>;
  author_id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  body?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feeds_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["feeds_aggregate"] = ResolversParentTypes["feeds_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["feeds_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["feeds"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feeds_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["feeds_aggregate_fields"] = ResolversParentTypes["feeds_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<Feeds_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["feeds_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["feeds_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feeds_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["feeds_max_fields"] = ResolversParentTypes["feeds_max_fields"]
> = {
  author_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feeds_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["feeds_min_fields"] = ResolversParentTypes["feeds_min_fields"]
> = {
  author_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feeds_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["feeds_mutation_response"] = ResolversParentTypes["feeds_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["feeds"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["mutation_root"] = ResolversParentTypes["mutation_root"]
> = {
  delete_accounts?: Resolver<
    Maybe<ResolversTypes["accounts_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_AccountsArgs, "where">
  >;
  delete_accounts_by_pk?: Resolver<
    Maybe<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Accounts_By_PkArgs, "id">
  >;
  delete_feeds?: Resolver<
    Maybe<ResolversTypes["feeds_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_FeedsArgs, "where">
  >;
  delete_feeds_by_pk?: Resolver<
    Maybe<ResolversTypes["feeds"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Feeds_By_PkArgs, "id">
  >;
  delete_sessions?: Resolver<
    Maybe<ResolversTypes["sessions_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_SessionsArgs, "where">
  >;
  delete_sessions_by_pk?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Sessions_By_PkArgs, "id">
  >;
  delete_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UsersArgs, "where">
  >;
  delete_users_by_pk?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Users_By_PkArgs, "id">
  >;
  delete_verification_requests?: Resolver<
    Maybe<ResolversTypes["verification_requests_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Verification_RequestsArgs, "where">
  >;
  delete_verification_requests_by_pk?: Resolver<
    Maybe<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Verification_Requests_By_PkArgs, "id">
  >;
  insert_accounts?: Resolver<
    Maybe<ResolversTypes["accounts_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_AccountsArgs, "objects">
  >;
  insert_accounts_one?: Resolver<
    Maybe<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Accounts_OneArgs, "object">
  >;
  insert_feeds?: Resolver<
    Maybe<ResolversTypes["feeds_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_FeedsArgs, "objects">
  >;
  insert_feeds_one?: Resolver<
    Maybe<ResolversTypes["feeds"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Feeds_OneArgs, "object">
  >;
  insert_sessions?: Resolver<
    Maybe<ResolversTypes["sessions_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_SessionsArgs, "objects">
  >;
  insert_sessions_one?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Sessions_OneArgs, "object">
  >;
  insert_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UsersArgs, "objects">
  >;
  insert_users_one?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Users_OneArgs, "object">
  >;
  insert_verification_requests?: Resolver<
    Maybe<ResolversTypes["verification_requests_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Verification_RequestsArgs, "objects">
  >;
  insert_verification_requests_one?: Resolver<
    Maybe<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Verification_Requests_OneArgs, "object">
  >;
  update_accounts?: Resolver<
    Maybe<ResolversTypes["accounts_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_AccountsArgs, "where">
  >;
  update_accounts_by_pk?: Resolver<
    Maybe<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Accounts_By_PkArgs, "pk_columns">
  >;
  update_feeds?: Resolver<
    Maybe<ResolversTypes["feeds_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_FeedsArgs, "where">
  >;
  update_feeds_by_pk?: Resolver<
    Maybe<ResolversTypes["feeds"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Feeds_By_PkArgs, "pk_columns">
  >;
  update_sessions?: Resolver<
    Maybe<ResolversTypes["sessions_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_SessionsArgs, "where">
  >;
  update_sessions_by_pk?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Sessions_By_PkArgs, "pk_columns">
  >;
  update_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UsersArgs, "where">
  >;
  update_users_by_pk?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Users_By_PkArgs, "pk_columns">
  >;
  update_verification_requests?: Resolver<
    Maybe<ResolversTypes["verification_requests_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Verification_RequestsArgs, "where">
  >;
  update_verification_requests_by_pk?: Resolver<
    Maybe<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType,
    RequireFields<
      Mutation_RootUpdate_Verification_Requests_By_PkArgs,
      "pk_columns"
    >
  >;
};

export type Query_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["query_root"] = ResolversParentTypes["query_root"]
> = {
  accounts?: Resolver<
    Array<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootAccountsArgs, never>
  >;
  accounts_aggregate?: Resolver<
    ResolversTypes["accounts_aggregate"],
    ParentType,
    ContextType,
    RequireFields<Query_RootAccounts_AggregateArgs, never>
  >;
  accounts_by_pk?: Resolver<
    Maybe<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootAccounts_By_PkArgs, "id">
  >;
  feeds?: Resolver<
    Array<ResolversTypes["feeds"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootFeedsArgs, never>
  >;
  feeds_aggregate?: Resolver<
    ResolversTypes["feeds_aggregate"],
    ParentType,
    ContextType,
    RequireFields<Query_RootFeeds_AggregateArgs, never>
  >;
  feeds_by_pk?: Resolver<
    Maybe<ResolversTypes["feeds"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootFeeds_By_PkArgs, "id">
  >;
  sessions?: Resolver<
    Array<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootSessionsArgs, never>
  >;
  sessions_aggregate?: Resolver<
    ResolversTypes["sessions_aggregate"],
    ParentType,
    ContextType,
    RequireFields<Query_RootSessions_AggregateArgs, never>
  >;
  sessions_by_pk?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootSessions_By_PkArgs, "id">
  >;
  users?: Resolver<
    Array<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUsersArgs, never>
  >;
  users_aggregate?: Resolver<
    ResolversTypes["users_aggregate"],
    ParentType,
    ContextType,
    RequireFields<Query_RootUsers_AggregateArgs, never>
  >;
  users_by_pk?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUsers_By_PkArgs, "id">
  >;
  verification_requests?: Resolver<
    Array<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootVerification_RequestsArgs, never>
  >;
  verification_requests_aggregate?: Resolver<
    ResolversTypes["verification_requests_aggregate"],
    ParentType,
    ContextType,
    RequireFields<Query_RootVerification_Requests_AggregateArgs, never>
  >;
  verification_requests_by_pk?: Resolver<
    Maybe<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootVerification_Requests_By_PkArgs, "id">
  >;
};

export type SessionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions"] = ResolversParentTypes["sessions"]
> = {
  access_token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  session_token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_aggregate"] = ResolversParentTypes["sessions_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["sessions_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["sessions"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_aggregate_fields"] = ResolversParentTypes["sessions_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["sessions_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<Sessions_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["sessions_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["sessions_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["sessions_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["sessions_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["sessions_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["sessions_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["sessions_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["sessions_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["sessions_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_avg_fields"] = ResolversParentTypes["sessions_avg_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_max_fields"] = ResolversParentTypes["sessions_max_fields"]
> = {
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  session_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_min_fields"] = ResolversParentTypes["sessions_min_fields"]
> = {
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  session_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_mutation_response"] = ResolversParentTypes["sessions_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["sessions"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_stddev_fields"] = ResolversParentTypes["sessions_stddev_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_stddev_pop_fields"] = ResolversParentTypes["sessions_stddev_pop_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_stddev_samp_fields"] = ResolversParentTypes["sessions_stddev_samp_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_sum_fields"] = ResolversParentTypes["sessions_sum_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_var_pop_fields"] = ResolversParentTypes["sessions_var_pop_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_var_samp_fields"] = ResolversParentTypes["sessions_var_samp_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_variance_fields"] = ResolversParentTypes["sessions_variance_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["subscription_root"] = ResolversParentTypes["subscription_root"]
> = {
  accounts?: SubscriptionResolver<
    Array<ResolversTypes["accounts"]>,
    "accounts",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAccountsArgs, never>
  >;
  accounts_aggregate?: SubscriptionResolver<
    ResolversTypes["accounts_aggregate"],
    "accounts_aggregate",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAccounts_AggregateArgs, never>
  >;
  accounts_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["accounts"]>,
    "accounts_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAccounts_By_PkArgs, "id">
  >;
  feeds?: SubscriptionResolver<
    Array<ResolversTypes["feeds"]>,
    "feeds",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootFeedsArgs, never>
  >;
  feeds_aggregate?: SubscriptionResolver<
    ResolversTypes["feeds_aggregate"],
    "feeds_aggregate",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootFeeds_AggregateArgs, never>
  >;
  feeds_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["feeds"]>,
    "feeds_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootFeeds_By_PkArgs, "id">
  >;
  sessions?: SubscriptionResolver<
    Array<ResolversTypes["sessions"]>,
    "sessions",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootSessionsArgs, never>
  >;
  sessions_aggregate?: SubscriptionResolver<
    ResolversTypes["sessions_aggregate"],
    "sessions_aggregate",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootSessions_AggregateArgs, never>
  >;
  sessions_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["sessions"]>,
    "sessions_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootSessions_By_PkArgs, "id">
  >;
  users?: SubscriptionResolver<
    Array<ResolversTypes["users"]>,
    "users",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsersArgs, never>
  >;
  users_aggregate?: SubscriptionResolver<
    ResolversTypes["users_aggregate"],
    "users_aggregate",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsers_AggregateArgs, never>
  >;
  users_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["users"]>,
    "users_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsers_By_PkArgs, "id">
  >;
  verification_requests?: SubscriptionResolver<
    Array<ResolversTypes["verification_requests"]>,
    "verification_requests",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootVerification_RequestsArgs, never>
  >;
  verification_requests_aggregate?: SubscriptionResolver<
    ResolversTypes["verification_requests_aggregate"],
    "verification_requests_aggregate",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootVerification_Requests_AggregateArgs, never>
  >;
  verification_requests_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["verification_requests"]>,
    "verification_requests_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootVerification_Requests_By_PkArgs, "id">
  >;
};

export interface TimestamptzScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["timestamptz"], any> {
  name: "timestamptz";
}

export type UsersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users"] = ResolversParentTypes["users"]
> = {
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email_verified?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  feeds?: Resolver<
    Array<ResolversTypes["feeds"]>,
    ParentType,
    ContextType,
    RequireFields<UsersFeedsArgs, never>
  >;
  feeds_aggregate?: Resolver<
    ResolversTypes["feeds_aggregate"],
    ParentType,
    ContextType,
    RequireFields<UsersFeeds_AggregateArgs, never>
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_aggregate"] = ResolversParentTypes["users_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["users_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["users"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_aggregate_fields"] = ResolversParentTypes["users_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<Users_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["users_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["users_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_max_fields"] = ResolversParentTypes["users_max_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  email_verified?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_min_fields"] = ResolversParentTypes["users_min_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  email_verified?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_mutation_response"] = ResolversParentTypes["users_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["users"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["uuid"], any> {
  name: "uuid";
}

export type Verification_RequestsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_requests"] = ResolversParentTypes["verification_requests"]
> = {
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_requests_aggregate"] = ResolversParentTypes["verification_requests_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["verification_requests_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_requests_aggregate_fields"] = ResolversParentTypes["verification_requests_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<Verification_Requests_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["verification_requests_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["verification_requests_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_requests_max_fields"] = ResolversParentTypes["verification_requests_max_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  identifier?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_requests_min_fields"] = ResolversParentTypes["verification_requests_min_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  identifier?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_requests_mutation_response"] = ResolversParentTypes["verification_requests_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  accounts?: AccountsResolvers<ContextType>;
  accounts_aggregate?: Accounts_AggregateResolvers<ContextType>;
  accounts_aggregate_fields?: Accounts_Aggregate_FieldsResolvers<ContextType>;
  accounts_max_fields?: Accounts_Max_FieldsResolvers<ContextType>;
  accounts_min_fields?: Accounts_Min_FieldsResolvers<ContextType>;
  accounts_mutation_response?: Accounts_Mutation_ResponseResolvers<ContextType>;
  feeds?: FeedsResolvers<ContextType>;
  feeds_aggregate?: Feeds_AggregateResolvers<ContextType>;
  feeds_aggregate_fields?: Feeds_Aggregate_FieldsResolvers<ContextType>;
  feeds_max_fields?: Feeds_Max_FieldsResolvers<ContextType>;
  feeds_min_fields?: Feeds_Min_FieldsResolvers<ContextType>;
  feeds_mutation_response?: Feeds_Mutation_ResponseResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  sessions?: SessionsResolvers<ContextType>;
  sessions_aggregate?: Sessions_AggregateResolvers<ContextType>;
  sessions_aggregate_fields?: Sessions_Aggregate_FieldsResolvers<ContextType>;
  sessions_avg_fields?: Sessions_Avg_FieldsResolvers<ContextType>;
  sessions_max_fields?: Sessions_Max_FieldsResolvers<ContextType>;
  sessions_min_fields?: Sessions_Min_FieldsResolvers<ContextType>;
  sessions_mutation_response?: Sessions_Mutation_ResponseResolvers<ContextType>;
  sessions_stddev_fields?: Sessions_Stddev_FieldsResolvers<ContextType>;
  sessions_stddev_pop_fields?: Sessions_Stddev_Pop_FieldsResolvers<ContextType>;
  sessions_stddev_samp_fields?: Sessions_Stddev_Samp_FieldsResolvers<ContextType>;
  sessions_sum_fields?: Sessions_Sum_FieldsResolvers<ContextType>;
  sessions_var_pop_fields?: Sessions_Var_Pop_FieldsResolvers<ContextType>;
  sessions_var_samp_fields?: Sessions_Var_Samp_FieldsResolvers<ContextType>;
  sessions_variance_fields?: Sessions_Variance_FieldsResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  uuid?: GraphQLScalarType;
  verification_requests?: Verification_RequestsResolvers<ContextType>;
  verification_requests_aggregate?: Verification_Requests_AggregateResolvers<ContextType>;
  verification_requests_aggregate_fields?: Verification_Requests_Aggregate_FieldsResolvers<ContextType>;
  verification_requests_max_fields?: Verification_Requests_Max_FieldsResolvers<ContextType>;
  verification_requests_min_fields?: Verification_Requests_Min_FieldsResolvers<ContextType>;
  verification_requests_mutation_response?: Verification_Requests_Mutation_ResponseResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> =
  DirectiveResolvers<ContextType>;
