import { ValidationError as JoiValidationError, ValidationErrorItem as JoiValidationErrorItem, Context } from 'joi';
import { ValidationError as SequelizeValidationError, ValidationErrorItem as SequelizeValidationErrorItem } from 'sequelize';

import { AppError } from './appErrors';

export class BusinessError extends AppError {
  payload?: any;

  constructor(message = 'There is business error happened') {
    super(message);
  }
}

export interface Payload {
  [key: string]: {
    message?: string;
    type?: string;
    context?: Context;
  };
}

export class SchemaValidationError extends BusinessError {
  constructor(error: JoiValidationError) {
    super(error.message);
    let payload: Payload = {};
    error.details.forEach((item: JoiValidationErrorItem) => {
      const {
        path, type, message, context,
      } = item;
      payload = {
        ...payload,
        [path.toString()]: {
          message,
          type,
          context,
        },
      };
    });
    this.extensions.payload = payload;
  }
}

export class ServiceValidationError extends BusinessError {
  constructor(message: string, type: string, variables: { [key: string]: any }) {
    super(message);
    const keys = Object.keys(variables);
    const values = Object.values(variables);
    const payload = {
      [keys[0]]: {
        message,
        type,
        context: {
          value: values[0],
          [`${type.split('.').slice(-1).pop()}`]: keys[1],
          [`${keys[1]}`]: values[1],
          key: keys[0],
          label: keys[0],
        },
      },
    };
    this.extensions.payload = payload;
  }
}

export class DatabaseValidationError extends BusinessError {
  constructor(error: SequelizeValidationError) {
    super(error.message);
    let payload: Payload = {};
    error.errors.forEach((item: SequelizeValidationErrorItem) => {
      // https://github.com/sequelize/sequelize/issues/11926
      const {
        // @ts-ignore
        path, message, value, validatorKey, validatorArgs,
      } = item;
      payload = {
        ...payload,
        [path]: {
          message,
          type: validatorKey,
          context: {
            value,
            args: validatorArgs,
          },
        },
      };
    });
    this.extensions.payload = payload;
  }
}
