import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Use JavaScript Date object for date/time fields. */
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** Floats that will have a value less than 0. */
  NegativeFloat: any;
  /** Integers that will have a value less than 0. */
  NegativeInt: any;
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: any;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: any;
  /** Floats that will have a value of 0 or less. */
  NonPositiveFloat: any;
  /** Integers that will have a value of 0 or less. */
  NonPositiveInt: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: any;
  /** Floats that will have a value greater than 0. */
  PositiveFloat: any;
  /** Integers that will have a value greater than 0. */
  PositiveInt: any;
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  PostalCode: any;
  /** Floats that will have a value of 0 or more. */
  UnsignedFloat: any;
  /** Integers that will have a value of 0 or more. */
  UnsignedInt: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  /** A field whose value is a generic Globally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: any;
  /** A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal. */
  Hexadecimal: any;
  /** A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors. */
  HexColorCode: any;
  /** A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSL: any;
  /** A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSLA: any;
  /** A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4. */
  IPv4: any;
  /** A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6. */
  IPv6: any;
  /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
  ISBN: any;
  /** A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address. */
  MAC: any;
  /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
  Port: any;
  /** A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGB: any;
  /** A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGBA: any;
  /** A currency string, such as $21.25 */
  USCurrency: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number. */
  IBAN: any;
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: any;
};



































export type Query = {
  __typename?: 'Query';
  cats?: Maybe<Array<Maybe<Cat>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
};


export type QueryCatsArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCat?: Maybe<Cat>;
  createCategory?: Maybe<Category>;
};


export type MutationCreateCatArgs = {
  name: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  categoryId: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String'];
};

export type Cat = {
  __typename?: 'Cat';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cats?: Maybe<Array<Maybe<Cat>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  NegativeFloat: ResolverTypeWrapper<Scalars['NegativeFloat']>;
  NegativeInt: ResolverTypeWrapper<Scalars['NegativeInt']>;
  NonNegativeFloat: ResolverTypeWrapper<Scalars['NonNegativeFloat']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']>;
  NonPositiveFloat: ResolverTypeWrapper<Scalars['NonPositiveFloat']>;
  NonPositiveInt: ResolverTypeWrapper<Scalars['NonPositiveInt']>;
  PhoneNumber: ResolverTypeWrapper<Scalars['PhoneNumber']>;
  PositiveFloat: ResolverTypeWrapper<Scalars['PositiveFloat']>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']>;
  PostalCode: ResolverTypeWrapper<Scalars['PostalCode']>;
  UnsignedFloat: ResolverTypeWrapper<Scalars['UnsignedFloat']>;
  UnsignedInt: ResolverTypeWrapper<Scalars['UnsignedInt']>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  GUID: ResolverTypeWrapper<Scalars['GUID']>;
  Hexadecimal: ResolverTypeWrapper<Scalars['Hexadecimal']>;
  HexColorCode: ResolverTypeWrapper<Scalars['HexColorCode']>;
  HSL: ResolverTypeWrapper<Scalars['HSL']>;
  HSLA: ResolverTypeWrapper<Scalars['HSLA']>;
  IPv4: ResolverTypeWrapper<Scalars['IPv4']>;
  IPv6: ResolverTypeWrapper<Scalars['IPv6']>;
  ISBN: ResolverTypeWrapper<Scalars['ISBN']>;
  MAC: ResolverTypeWrapper<Scalars['MAC']>;
  Port: ResolverTypeWrapper<Scalars['Port']>;
  RGB: ResolverTypeWrapper<Scalars['RGB']>;
  RGBA: ResolverTypeWrapper<Scalars['RGBA']>;
  USCurrency: ResolverTypeWrapper<Scalars['USCurrency']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  IBAN: ResolverTypeWrapper<Scalars['IBAN']>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  Cat: ResolverTypeWrapper<Cat>;
  Category: ResolverTypeWrapper<Category>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  DateTime: Scalars['DateTime'];
  EmailAddress: Scalars['EmailAddress'];
  NegativeFloat: Scalars['NegativeFloat'];
  NegativeInt: Scalars['NegativeInt'];
  NonNegativeFloat: Scalars['NonNegativeFloat'];
  NonNegativeInt: Scalars['NonNegativeInt'];
  NonPositiveFloat: Scalars['NonPositiveFloat'];
  NonPositiveInt: Scalars['NonPositiveInt'];
  PhoneNumber: Scalars['PhoneNumber'];
  PositiveFloat: Scalars['PositiveFloat'];
  PositiveInt: Scalars['PositiveInt'];
  PostalCode: Scalars['PostalCode'];
  UnsignedFloat: Scalars['UnsignedFloat'];
  UnsignedInt: Scalars['UnsignedInt'];
  URL: Scalars['URL'];
  BigInt: Scalars['BigInt'];
  Long: Scalars['Long'];
  GUID: Scalars['GUID'];
  Hexadecimal: Scalars['Hexadecimal'];
  HexColorCode: Scalars['HexColorCode'];
  HSL: Scalars['HSL'];
  HSLA: Scalars['HSLA'];
  IPv4: Scalars['IPv4'];
  IPv6: Scalars['IPv6'];
  ISBN: Scalars['ISBN'];
  MAC: Scalars['MAC'];
  Port: Scalars['Port'];
  RGB: Scalars['RGB'];
  RGBA: Scalars['RGBA'];
  USCurrency: Scalars['USCurrency'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  IBAN: Scalars['IBAN'];
  ObjectID: Scalars['ObjectID'];
  Query: {};
  String: Scalars['String'];
  Mutation: {};
  Cat: Cat;
  Category: Category;
  Boolean: Scalars['Boolean'];
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export interface NegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeFloat'], any> {
  name: 'NegativeFloat';
}

export interface NegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeInt'], any> {
  name: 'NegativeInt';
}

export interface NonNegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeFloat'], any> {
  name: 'NonNegativeFloat';
}

export interface NonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt';
}

export interface NonPositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveFloat'], any> {
  name: 'NonPositiveFloat';
}

export interface NonPositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveInt'], any> {
  name: 'NonPositiveInt';
}

export interface PhoneNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PhoneNumber'], any> {
  name: 'PhoneNumber';
}

export interface PositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveFloat'], any> {
  name: 'PositiveFloat';
}

export interface PositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveInt'], any> {
  name: 'PositiveInt';
}

export interface PostalCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PostalCode'], any> {
  name: 'PostalCode';
}

export interface UnsignedFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedFloat'], any> {
  name: 'UnsignedFloat';
}

export interface UnsignedIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedInt'], any> {
  name: 'UnsignedInt';
}

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GUID'], any> {
  name: 'GUID';
}

export interface HexadecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hexadecimal'], any> {
  name: 'Hexadecimal';
}

export interface HexColorCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColorCode'], any> {
  name: 'HexColorCode';
}

export interface HslScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSL'], any> {
  name: 'HSL';
}

export interface HslaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSLA'], any> {
  name: 'HSLA';
}

export interface IPv4ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv4'], any> {
  name: 'IPv4';
}

export interface IPv6ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv6'], any> {
  name: 'IPv6';
}

export interface IsbnScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISBN'], any> {
  name: 'ISBN';
}

export interface MacScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MAC'], any> {
  name: 'MAC';
}

export interface PortScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Port'], any> {
  name: 'Port';
}

export interface RgbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGB'], any> {
  name: 'RGB';
}

export interface RgbaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBA'], any> {
  name: 'RGBA';
}

export interface UsCurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['USCurrency'], any> {
  name: 'USCurrency';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export interface IbanScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IBAN'], any> {
  name: 'IBAN';
}

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  cats?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cat']>>>, ParentType, ContextType, RequireFields<QueryCatsArgs, never>>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createCat?: Resolver<Maybe<ResolversTypes['Cat']>, ParentType, ContextType, RequireFields<MutationCreateCatArgs, 'name' | 'categoryId'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'name'>>;
}>;

export type CatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cat'] = ResolversParentTypes['Cat']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cats?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cat']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  DateTime?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  NegativeFloat?: GraphQLScalarType;
  NegativeInt?: GraphQLScalarType;
  NonNegativeFloat?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  NonPositiveFloat?: GraphQLScalarType;
  NonPositiveInt?: GraphQLScalarType;
  PhoneNumber?: GraphQLScalarType;
  PositiveFloat?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  PostalCode?: GraphQLScalarType;
  UnsignedFloat?: GraphQLScalarType;
  UnsignedInt?: GraphQLScalarType;
  URL?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Long?: GraphQLScalarType;
  GUID?: GraphQLScalarType;
  Hexadecimal?: GraphQLScalarType;
  HexColorCode?: GraphQLScalarType;
  HSL?: GraphQLScalarType;
  HSLA?: GraphQLScalarType;
  IPv4?: GraphQLScalarType;
  IPv6?: GraphQLScalarType;
  ISBN?: GraphQLScalarType;
  MAC?: GraphQLScalarType;
  Port?: GraphQLScalarType;
  RGB?: GraphQLScalarType;
  RGBA?: GraphQLScalarType;
  USCurrency?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  IBAN?: GraphQLScalarType;
  ObjectID?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Cat?: CatResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
