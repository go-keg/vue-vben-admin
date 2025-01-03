/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * Define a Relay Cursor type:
   * https://relay.dev/graphql/connections.htm#sec-Cursor
   */
  Cursor: { input: any; output: any };
  /** The builtin Map type */
  Map: { input: any; output: any };
  /** The builtin Time type */
  Time: { input: any; output: any };
};

export type Account = Node & {
  __typename?: 'Account';
  id: Scalars['ID']['output'];
  nickname: Scalars['String']['output'];
};

/**
 * AccountWhereInput is used for filtering Account objects.
 * Input was generated by ent.
 */
export type AccountWhereInput = {
  and?: InputMaybe<Array<AccountWhereInput>>;
  /** id field predicates */
  id?: InputMaybe<Scalars['ID']['input']>;
  idGT?: InputMaybe<Scalars['ID']['input']>;
  idGTE?: InputMaybe<Scalars['ID']['input']>;
  idIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  idLT?: InputMaybe<Scalars['ID']['input']>;
  idLTE?: InputMaybe<Scalars['ID']['input']>;
  idNEQ?: InputMaybe<Scalars['ID']['input']>;
  idNotIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** nickname field predicates */
  nickname?: InputMaybe<Scalars['String']['input']>;
  nicknameContains?: InputMaybe<Scalars['String']['input']>;
  nicknameContainsFold?: InputMaybe<Scalars['String']['input']>;
  nicknameEqualFold?: InputMaybe<Scalars['String']['input']>;
  nicknameGT?: InputMaybe<Scalars['String']['input']>;
  nicknameGTE?: InputMaybe<Scalars['String']['input']>;
  nicknameHasPrefix?: InputMaybe<Scalars['String']['input']>;
  nicknameHasSuffix?: InputMaybe<Scalars['String']['input']>;
  nicknameIn?: InputMaybe<Array<Scalars['String']['input']>>;
  nicknameLT?: InputMaybe<Scalars['String']['input']>;
  nicknameLTE?: InputMaybe<Scalars['String']['input']>;
  nicknameNEQ?: InputMaybe<Scalars['String']['input']>;
  nicknameNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  not?: InputMaybe<AccountWhereInput>;
  or?: InputMaybe<Array<AccountWhereInput>>;
};

/**
 * CreateOperationLogInput is used for create OperationLog object.
 * Input was generated by ent.
 */
export type CreateOperationLogInput = {
  context: Scalars['Map']['input'];
  /** 操作类型 */
  type: Scalars['String']['input'];
  userID: Scalars['ID']['input'];
};

/**
 * CreatePermissionInput is used for create Permission object.
 * Input was generated by ent.
 */
export type CreatePermissionInput = {
  attrs?: InputMaybe<Scalars['Map']['input']>;
  childIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  desc?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentID?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  type: PermissionType;
};

/**
 * CreateRoleInput is used for create Role object.
 * Input was generated by ent.
 */
export type CreateRoleInput = {
  name: Scalars['String']['input'];
  permissionIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * CreateUserInput is used for create User object.
 * Input was generated by ent.
 */
export type CreateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  nickname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 状态 */
  status: UserStatus;
};

export type LoginReply = {
  __typename?: 'LoginReply';
  /** 过期时间（秒） */
  exp: Scalars['Int']['output'];
  token: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 创建权限 */
  createPermission: Permission;
  /** 创建角色 */
  createRole: Role;
  /** 创建用户 */
  createUser: User;
  /** 删除权限 */
  deletePermission: Scalars['Boolean']['output'];
  /** 删除角色 */
  deleteRole: Scalars['Boolean']['output'];
  /** 忘记密码 */
  forgetPassword: Scalars['Boolean']['output'];
  /** 重置密码 */
  resetPassword: Scalars['Boolean']['output'];
  /** 修改权限 */
  updatePermission: Permission;
  /** 修改个人信息 */
  updateProfile: User;
  /** 修改角色 */
  updateRole: Role;
  /** 修改用户 */
  updateUser: User;
};

export type MutationCreatePermissionArgs = {
  input: CreatePermissionInput;
};

export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeletePermissionArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};

export type MutationForgetPasswordArgs = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationResetPasswordArgs = {
  oldPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationUpdatePermissionArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePermissionInput;
};

export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};

export type MutationUpdateRoleArgs = {
  id: Scalars['ID']['input'];
  input: UpdateRoleInput;
};

export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};

/**
 * An object with an ID.
 * Follows the [Relay Global Object Identification Specification](https://relay.dev/graphql/objectidentification.htm)
 */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
};

export type OperationLog = Node & {
  __typename?: 'OperationLog';
  context: Scalars['Map']['output'];
  createdAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  /** 操作类型 */
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Time']['output']>;
  user: User;
  userID: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type OperationLogConnection = {
  __typename?: 'OperationLogConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OperationLogEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<OperationLog>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type OperationLogEdge = {
  __typename?: 'OperationLogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['Cursor']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<OperationLog>;
};

/** Ordering options for OperationLog connections */
export type OperationLogOrder = {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order OperationLogs. */
  field: OperationLogOrderField;
};

/** Properties by which OperationLog connections can be ordered. */
export enum OperationLogOrderField {
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
}

/**
 * OperationLogWhereInput is used for filtering OperationLog objects.
 * Input was generated by ent.
 */
export type OperationLogWhereInput = {
  and?: InputMaybe<Array<OperationLogWhereInput>>;
  /** created_at field predicates */
  createdAt?: InputMaybe<Scalars['Time']['input']>;
  createdAtGT?: InputMaybe<Scalars['Time']['input']>;
  createdAtGTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  createdAtIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtLT?: InputMaybe<Scalars['Time']['input']>;
  createdAtLTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtNEQ?: InputMaybe<Scalars['Time']['input']>;
  createdAtNotIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  createdAtNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** user edge predicates */
  hasUser?: InputMaybe<Scalars['Boolean']['input']>;
  hasUserWith?: InputMaybe<Array<UserWhereInput>>;
  /** id field predicates */
  id?: InputMaybe<Scalars['ID']['input']>;
  idGT?: InputMaybe<Scalars['ID']['input']>;
  idGTE?: InputMaybe<Scalars['ID']['input']>;
  idIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  idLT?: InputMaybe<Scalars['ID']['input']>;
  idLTE?: InputMaybe<Scalars['ID']['input']>;
  idNEQ?: InputMaybe<Scalars['ID']['input']>;
  idNotIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<OperationLogWhereInput>;
  or?: InputMaybe<Array<OperationLogWhereInput>>;
  /** type field predicates */
  type?: InputMaybe<Scalars['String']['input']>;
  typeContains?: InputMaybe<Scalars['String']['input']>;
  typeContainsFold?: InputMaybe<Scalars['String']['input']>;
  typeEqualFold?: InputMaybe<Scalars['String']['input']>;
  typeGT?: InputMaybe<Scalars['String']['input']>;
  typeGTE?: InputMaybe<Scalars['String']['input']>;
  typeHasPrefix?: InputMaybe<Scalars['String']['input']>;
  typeHasSuffix?: InputMaybe<Scalars['String']['input']>;
  typeIn?: InputMaybe<Array<Scalars['String']['input']>>;
  typeLT?: InputMaybe<Scalars['String']['input']>;
  typeLTE?: InputMaybe<Scalars['String']['input']>;
  typeNEQ?: InputMaybe<Scalars['String']['input']>;
  typeNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** updated_at field predicates */
  updatedAt?: InputMaybe<Scalars['Time']['input']>;
  updatedAtGT?: InputMaybe<Scalars['Time']['input']>;
  updatedAtGTE?: InputMaybe<Scalars['Time']['input']>;
  updatedAtIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  updatedAtIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAtLT?: InputMaybe<Scalars['Time']['input']>;
  updatedAtLTE?: InputMaybe<Scalars['Time']['input']>;
  updatedAtNEQ?: InputMaybe<Scalars['Time']['input']>;
  updatedAtNotIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  updatedAtNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** user_id field predicates */
  userID?: InputMaybe<Scalars['ID']['input']>;
  userIDIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  userIDNEQ?: InputMaybe<Scalars['ID']['input']>;
  userIDNotIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  /** Specifies an ascending order for a given `orderBy` argument. */
  Asc = 'ASC',
  /** Specifies a descending order for a given `orderBy` argument. */
  Desc = 'DESC',
}

/**
 * Information about pagination in a connection.
 * https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo
 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type Permission = Node & {
  __typename?: 'Permission';
  attrs?: Maybe<Scalars['Map']['output']>;
  children?: Maybe<Array<Permission>>;
  childrenCount: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['Time']['output']>;
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<Permission>;
  parentID?: Maybe<Scalars['ID']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  sort: Scalars['Int']['output'];
  type: PermissionType;
  updatedAt?: Maybe<Scalars['Time']['output']>;
};

/** A connection to a list of items. */
export type PermissionConnection = {
  __typename?: 'PermissionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PermissionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Permission>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PermissionEdge = {
  __typename?: 'PermissionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['Cursor']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Permission>;
};

/** Ordering options for Permission connections */
export type PermissionOrder = {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order Permissions. */
  field: PermissionOrderField;
};

/** Properties by which Permission connections can be ordered. */
export enum PermissionOrderField {
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
}

/** PermissionType is enum for the field type */
export enum PermissionType {
  Element = 'element',
  Menu = 'menu',
  Page = 'page',
}

/**
 * PermissionWhereInput is used for filtering Permission objects.
 * Input was generated by ent.
 */
export type PermissionWhereInput = {
  and?: InputMaybe<Array<PermissionWhereInput>>;
  /** created_at field predicates */
  createdAt?: InputMaybe<Scalars['Time']['input']>;
  createdAtGT?: InputMaybe<Scalars['Time']['input']>;
  createdAtGTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  createdAtIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtLT?: InputMaybe<Scalars['Time']['input']>;
  createdAtLTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtNEQ?: InputMaybe<Scalars['Time']['input']>;
  createdAtNotIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  createdAtNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** desc field predicates */
  desc?: InputMaybe<Scalars['String']['input']>;
  descContains?: InputMaybe<Scalars['String']['input']>;
  descContainsFold?: InputMaybe<Scalars['String']['input']>;
  descEqualFold?: InputMaybe<Scalars['String']['input']>;
  descGT?: InputMaybe<Scalars['String']['input']>;
  descGTE?: InputMaybe<Scalars['String']['input']>;
  descHasPrefix?: InputMaybe<Scalars['String']['input']>;
  descHasSuffix?: InputMaybe<Scalars['String']['input']>;
  descIn?: InputMaybe<Array<Scalars['String']['input']>>;
  descIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  descLT?: InputMaybe<Scalars['String']['input']>;
  descLTE?: InputMaybe<Scalars['String']['input']>;
  descNEQ?: InputMaybe<Scalars['String']['input']>;
  descNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  descNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** children edge predicates */
  hasChildren?: InputMaybe<Scalars['Boolean']['input']>;
  hasChildrenWith?: InputMaybe<Array<PermissionWhereInput>>;
  /** parent edge predicates */
  hasParent?: InputMaybe<Scalars['Boolean']['input']>;
  hasParentWith?: InputMaybe<Array<PermissionWhereInput>>;
  /** id field predicates */
  id?: InputMaybe<Scalars['ID']['input']>;
  idGT?: InputMaybe<Scalars['ID']['input']>;
  idGTE?: InputMaybe<Scalars['ID']['input']>;
  idIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  idLT?: InputMaybe<Scalars['ID']['input']>;
  idLTE?: InputMaybe<Scalars['ID']['input']>;
  idNEQ?: InputMaybe<Scalars['ID']['input']>;
  idNotIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** key field predicates */
  key?: InputMaybe<Scalars['String']['input']>;
  keyContains?: InputMaybe<Scalars['String']['input']>;
  keyContainsFold?: InputMaybe<Scalars['String']['input']>;
  keyEqualFold?: InputMaybe<Scalars['String']['input']>;
  keyGT?: InputMaybe<Scalars['String']['input']>;
  keyGTE?: InputMaybe<Scalars['String']['input']>;
  keyHasPrefix?: InputMaybe<Scalars['String']['input']>;
  keyHasSuffix?: InputMaybe<Scalars['String']['input']>;
  keyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  keyIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  keyLT?: InputMaybe<Scalars['String']['input']>;
  keyLTE?: InputMaybe<Scalars['String']['input']>;
  keyNEQ?: InputMaybe<Scalars['String']['input']>;
  keyNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  keyNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** name field predicates */
  name?: InputMaybe<Scalars['String']['input']>;
  nameContains?: InputMaybe<Scalars['String']['input']>;
  nameContainsFold?: InputMaybe<Scalars['String']['input']>;
  nameEqualFold?: InputMaybe<Scalars['String']['input']>;
  nameGT?: InputMaybe<Scalars['String']['input']>;
  nameGTE?: InputMaybe<Scalars['String']['input']>;
  nameHasPrefix?: InputMaybe<Scalars['String']['input']>;
  nameHasSuffix?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<Scalars['String']['input']>>;
  nameLT?: InputMaybe<Scalars['String']['input']>;
  nameLTE?: InputMaybe<Scalars['String']['input']>;
  nameNEQ?: InputMaybe<Scalars['String']['input']>;
  nameNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  not?: InputMaybe<PermissionWhereInput>;
  or?: InputMaybe<Array<PermissionWhereInput>>;
  /** parent_id field predicates */
  parentID?: InputMaybe<Scalars['ID']['input']>;
  parentIDIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  parentIDIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  parentIDNEQ?: InputMaybe<Scalars['ID']['input']>;
  parentIDNotIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  parentIDNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** path field predicates */
  path?: InputMaybe<Scalars['String']['input']>;
  pathContains?: InputMaybe<Scalars['String']['input']>;
  pathContainsFold?: InputMaybe<Scalars['String']['input']>;
  pathEqualFold?: InputMaybe<Scalars['String']['input']>;
  pathGT?: InputMaybe<Scalars['String']['input']>;
  pathGTE?: InputMaybe<Scalars['String']['input']>;
  pathHasPrefix?: InputMaybe<Scalars['String']['input']>;
  pathHasSuffix?: InputMaybe<Scalars['String']['input']>;
  pathIn?: InputMaybe<Array<Scalars['String']['input']>>;
  pathIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  pathLT?: InputMaybe<Scalars['String']['input']>;
  pathLTE?: InputMaybe<Scalars['String']['input']>;
  pathNEQ?: InputMaybe<Scalars['String']['input']>;
  pathNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  pathNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** sort field predicates */
  sort?: InputMaybe<Scalars['Int']['input']>;
  sortGT?: InputMaybe<Scalars['Int']['input']>;
  sortGTE?: InputMaybe<Scalars['Int']['input']>;
  sortIn?: InputMaybe<Array<Scalars['Int']['input']>>;
  sortLT?: InputMaybe<Scalars['Int']['input']>;
  sortLTE?: InputMaybe<Scalars['Int']['input']>;
  sortNEQ?: InputMaybe<Scalars['Int']['input']>;
  sortNotIn?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** type field predicates */
  type?: InputMaybe<PermissionType>;
  typeIn?: InputMaybe<Array<PermissionType>>;
  typeNEQ?: InputMaybe<PermissionType>;
  typeNotIn?: InputMaybe<Array<PermissionType>>;
  /** updated_at field predicates */
  updatedAt?: InputMaybe<Scalars['Time']['input']>;
  updatedAtGT?: InputMaybe<Scalars['Time']['input']>;
  updatedAtGTE?: InputMaybe<Scalars['Time']['input']>;
  updatedAtIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  updatedAtIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAtLT?: InputMaybe<Scalars['Time']['input']>;
  updatedAtLTE?: InputMaybe<Scalars['Time']['input']>;
  updatedAtNEQ?: InputMaybe<Scalars['Time']['input']>;
  updatedAtNotIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  updatedAtNotNil?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** 获取验证码 */
  captcha: CaptchaReply;
  /** 登陆 */
  login: LoginReply;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Lookup nodes by a list of IDs. */
  nodes: Array<Maybe<Node>>;
  /** 操作日志 */
  operationLogs: OperationLogConnection;
  /** 权限 */
  permissions: PermissionConnection;
  /** 个人信息 */
  profile: User;
  /** 刷新token */
  refresh: LoginReply;
  /** 角色 */
  roles: RoleConnection;
  /** 发送验证码 */
  sendVerifyCode: Scalars['Boolean']['output'];
  /** 用户 */
  users: UserConnection;
};

export type QueryLoginArgs = {
  captchaId?: InputMaybe<Scalars['String']['input']>;
  captchaValue?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};

export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type QueryOperationLogsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationLogOrder>;
  where?: InputMaybe<OperationLogWhereInput>;
};

export type QueryPermissionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PermissionOrder>;
  where?: InputMaybe<PermissionWhereInput>;
};

export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleOrder>;
  where?: InputMaybe<RoleWhereInput>;
};

export type QuerySendVerifyCodeArgs = {
  email: Scalars['String']['input'];
  verifyType: VerifyCodeType;
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserOrder>;
  where?: InputMaybe<UserWhereInput>;
};

export type Role = Node & {
  __typename?: 'Role';
  createdAt?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Permission>>;
  sort: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['Time']['output']>;
};

/** A connection to a list of items. */
export type RoleConnection = {
  __typename?: 'RoleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RoleEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Role>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type RoleEdge = {
  __typename?: 'RoleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['Cursor']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Role>;
};

/** Ordering options for Role connections */
export type RoleOrder = {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order Roles. */
  field: RoleOrderField;
};

/** Properties by which Role connections can be ordered. */
export enum RoleOrderField {
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
}

/**
 * RoleWhereInput is used for filtering Role objects.
 * Input was generated by ent.
 */
export type RoleWhereInput = {
  and?: InputMaybe<Array<RoleWhereInput>>;
  /** created_at field predicates */
  createdAt?: InputMaybe<Scalars['Time']['input']>;
  createdAtGT?: InputMaybe<Scalars['Time']['input']>;
  createdAtGTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  createdAtIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtLT?: InputMaybe<Scalars['Time']['input']>;
  createdAtLTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtNEQ?: InputMaybe<Scalars['Time']['input']>;
  createdAtNotIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  createdAtNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** permissions edge predicates */
  hasPermissions?: InputMaybe<Scalars['Boolean']['input']>;
  hasPermissionsWith?: InputMaybe<Array<PermissionWhereInput>>;
  /** id field predicates */
  id?: InputMaybe<Scalars['ID']['input']>;
  idGT?: InputMaybe<Scalars['ID']['input']>;
  idGTE?: InputMaybe<Scalars['ID']['input']>;
  idIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  idLT?: InputMaybe<Scalars['ID']['input']>;
  idLTE?: InputMaybe<Scalars['ID']['input']>;
  idNEQ?: InputMaybe<Scalars['ID']['input']>;
  idNotIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** name field predicates */
  name?: InputMaybe<Scalars['String']['input']>;
  nameContains?: InputMaybe<Scalars['String']['input']>;
  nameContainsFold?: InputMaybe<Scalars['String']['input']>;
  nameEqualFold?: InputMaybe<Scalars['String']['input']>;
  nameGT?: InputMaybe<Scalars['String']['input']>;
  nameGTE?: InputMaybe<Scalars['String']['input']>;
  nameHasPrefix?: InputMaybe<Scalars['String']['input']>;
  nameHasSuffix?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<Scalars['String']['input']>>;
  nameLT?: InputMaybe<Scalars['String']['input']>;
  nameLTE?: InputMaybe<Scalars['String']['input']>;
  nameNEQ?: InputMaybe<Scalars['String']['input']>;
  nameNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  not?: InputMaybe<RoleWhereInput>;
  or?: InputMaybe<Array<RoleWhereInput>>;
  /** sort field predicates */
  sort?: InputMaybe<Scalars['Int']['input']>;
  sortGT?: InputMaybe<Scalars['Int']['input']>;
  sortGTE?: InputMaybe<Scalars['Int']['input']>;
  sortIn?: InputMaybe<Array<Scalars['Int']['input']>>;
  sortLT?: InputMaybe<Scalars['Int']['input']>;
  sortLTE?: InputMaybe<Scalars['Int']['input']>;
  sortNEQ?: InputMaybe<Scalars['Int']['input']>;
  sortNotIn?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** updated_at field predicates */
  updatedAt?: InputMaybe<Scalars['Time']['input']>;
  updatedAtGT?: InputMaybe<Scalars['Time']['input']>;
  updatedAtGTE?: InputMaybe<Scalars['Time']['input']>;
  updatedAtIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  updatedAtIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAtLT?: InputMaybe<Scalars['Time']['input']>;
  updatedAtLTE?: InputMaybe<Scalars['Time']['input']>;
  updatedAtNEQ?: InputMaybe<Scalars['Time']['input']>;
  updatedAtNotIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  updatedAtNotNil?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * UpdateOperationLogInput is used for update OperationLog object.
 * Input was generated by ent.
 */
export type UpdateOperationLogInput = {
  context?: InputMaybe<Scalars['Map']['input']>;
  /** 操作类型 */
  type?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * UpdatePermissionInput is used for update Permission object.
 * Input was generated by ent.
 */
export type UpdatePermissionInput = {
  addChildIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  attrs?: InputMaybe<Scalars['Map']['input']>;
  clearAttrs?: InputMaybe<Scalars['Boolean']['input']>;
  clearChildren?: InputMaybe<Scalars['Boolean']['input']>;
  clearDesc?: InputMaybe<Scalars['Boolean']['input']>;
  clearKey?: InputMaybe<Scalars['Boolean']['input']>;
  clearParent?: InputMaybe<Scalars['Boolean']['input']>;
  clearPath?: InputMaybe<Scalars['Boolean']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentID?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  removeChildIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<PermissionType>;
};

export type UpdateProfileInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
};

/**
 * UpdateRoleInput is used for update Role object.
 * Input was generated by ent.
 */
export type UpdateRoleInput = {
  addPermissionIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  clearPermissions?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  removePermissionIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * UpdateUserInput is used for update User object.
 * Input was generated by ent.
 */
export type UpdateUserInput = {
  addRoleIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  clearAvatar?: InputMaybe<Scalars['Boolean']['input']>;
  clearRoles?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  removeRoleIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 状态 */
  status?: InputMaybe<UserStatus>;
};

export type User = Node & {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Time']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  nickname: Scalars['String']['output'];
  /** 权限 */
  permissions?: Maybe<Array<Permission>>;
  /** 角色数量 */
  roleCount: Scalars['Int']['output'];
  roles?: Maybe<Array<Role>>;
  /** 状态 */
  status: UserStatus;
  updatedAt?: Maybe<Scalars['Time']['output']>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['Cursor']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

/** Ordering options for User connections */
export type UserOrder = {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order Users. */
  field: UserOrderField;
};

/** Properties by which User connections can be ordered. */
export enum UserOrderField {
  Email = 'EMAIL',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
}

/** UserStatus is enum for the field status */
export enum UserStatus {
  /** 冻结 */
  Freeze = 'freeze',
  /** 正常 */
  Normal = 'normal',
}

/**
 * UserWhereInput is used for filtering User objects.
 * Input was generated by ent.
 */
export type UserWhereInput = {
  and?: InputMaybe<Array<UserWhereInput>>;
  /** avatar field predicates */
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatarContains?: InputMaybe<Scalars['String']['input']>;
  avatarContainsFold?: InputMaybe<Scalars['String']['input']>;
  avatarEqualFold?: InputMaybe<Scalars['String']['input']>;
  avatarGT?: InputMaybe<Scalars['String']['input']>;
  avatarGTE?: InputMaybe<Scalars['String']['input']>;
  avatarHasPrefix?: InputMaybe<Scalars['String']['input']>;
  avatarHasSuffix?: InputMaybe<Scalars['String']['input']>;
  avatarIn?: InputMaybe<Array<Scalars['String']['input']>>;
  avatarIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  avatarLT?: InputMaybe<Scalars['String']['input']>;
  avatarLTE?: InputMaybe<Scalars['String']['input']>;
  avatarNEQ?: InputMaybe<Scalars['String']['input']>;
  avatarNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  avatarNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** created_at field predicates */
  createdAt?: InputMaybe<Scalars['Time']['input']>;
  createdAtGT?: InputMaybe<Scalars['Time']['input']>;
  createdAtGTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  createdAtIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtLT?: InputMaybe<Scalars['Time']['input']>;
  createdAtLTE?: InputMaybe<Scalars['Time']['input']>;
  createdAtNEQ?: InputMaybe<Scalars['Time']['input']>;
  createdAtNotIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  createdAtNotNil?: InputMaybe<Scalars['Boolean']['input']>;
  /** email field predicates */
  email?: InputMaybe<Scalars['String']['input']>;
  emailContains?: InputMaybe<Scalars['String']['input']>;
  emailContainsFold?: InputMaybe<Scalars['String']['input']>;
  emailEqualFold?: InputMaybe<Scalars['String']['input']>;
  emailGT?: InputMaybe<Scalars['String']['input']>;
  emailGTE?: InputMaybe<Scalars['String']['input']>;
  emailHasPrefix?: InputMaybe<Scalars['String']['input']>;
  emailHasSuffix?: InputMaybe<Scalars['String']['input']>;
  emailIn?: InputMaybe<Array<Scalars['String']['input']>>;
  emailLT?: InputMaybe<Scalars['String']['input']>;
  emailLTE?: InputMaybe<Scalars['String']['input']>;
  emailNEQ?: InputMaybe<Scalars['String']['input']>;
  emailNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** roles edge predicates */
  hasRoles?: InputMaybe<Scalars['Boolean']['input']>;
  hasRolesWith?: InputMaybe<Array<RoleWhereInput>>;
  /** id field predicates */
  id?: InputMaybe<Scalars['ID']['input']>;
  idGT?: InputMaybe<Scalars['ID']['input']>;
  idGTE?: InputMaybe<Scalars['ID']['input']>;
  idIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  idLT?: InputMaybe<Scalars['ID']['input']>;
  idLTE?: InputMaybe<Scalars['ID']['input']>;
  idNEQ?: InputMaybe<Scalars['ID']['input']>;
  idNotIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** is_admin field predicates */
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isAdminNEQ?: InputMaybe<Scalars['Boolean']['input']>;
  /** nickname field predicates */
  nickname?: InputMaybe<Scalars['String']['input']>;
  nicknameContains?: InputMaybe<Scalars['String']['input']>;
  nicknameContainsFold?: InputMaybe<Scalars['String']['input']>;
  nicknameEqualFold?: InputMaybe<Scalars['String']['input']>;
  nicknameGT?: InputMaybe<Scalars['String']['input']>;
  nicknameGTE?: InputMaybe<Scalars['String']['input']>;
  nicknameHasPrefix?: InputMaybe<Scalars['String']['input']>;
  nicknameHasSuffix?: InputMaybe<Scalars['String']['input']>;
  nicknameIn?: InputMaybe<Array<Scalars['String']['input']>>;
  nicknameLT?: InputMaybe<Scalars['String']['input']>;
  nicknameLTE?: InputMaybe<Scalars['String']['input']>;
  nicknameNEQ?: InputMaybe<Scalars['String']['input']>;
  nicknameNotIn?: InputMaybe<Array<Scalars['String']['input']>>;
  not?: InputMaybe<UserWhereInput>;
  or?: InputMaybe<Array<UserWhereInput>>;
  /** status field predicates */
  status?: InputMaybe<UserStatus>;
  statusIn?: InputMaybe<Array<UserStatus>>;
  statusNEQ?: InputMaybe<UserStatus>;
  statusNotIn?: InputMaybe<Array<UserStatus>>;
  /** updated_at field predicates */
  updatedAt?: InputMaybe<Scalars['Time']['input']>;
  updatedAtGT?: InputMaybe<Scalars['Time']['input']>;
  updatedAtGTE?: InputMaybe<Scalars['Time']['input']>;
  updatedAtIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  updatedAtIsNil?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAtLT?: InputMaybe<Scalars['Time']['input']>;
  updatedAtLTE?: InputMaybe<Scalars['Time']['input']>;
  updatedAtNEQ?: InputMaybe<Scalars['Time']['input']>;
  updatedAtNotIn?: InputMaybe<Array<Scalars['Time']['input']>>;
  updatedAtNotNil?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CaptchaReply = {
  __typename?: 'captchaReply';
  captcha: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export enum VerifyCodeType {
  /** 忘记密码 */
  ForgetPassword = 'ForgetPassword',
  /** 注册验证 */
  Register = 'Register',
}
