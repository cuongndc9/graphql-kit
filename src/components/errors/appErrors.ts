import { GraphQLError } from 'graphql';
import { snakeCase } from 'lodash';

export class AppError extends Error implements GraphQLError {
  public extensions: Record<string, any> = {};

  readonly name: string;

  readonly locations: any;

  readonly path: any;

  readonly source: any;

  readonly positions: any;

  readonly nodes: any;

  public originalError: any;

  [key: string]: any;

  constructor(message = 'Internal Service Error') {
    super(message);
    this.extensions.code = snakeCase(this.constructor.name).toUpperCase();
  }
}

export class DatabaseError extends AppError {
  constructor(message = 'There is database error happened') {
    super(message);
  }
}
