import { flow } from 'lodash';
import joi, { ValidationResult } from 'joi';

import { SchemaValidationError } from './errors';

export const middleware = (...parameters: any[]) => (root?: any, args?: any, context?: any, info?: any) => {
  const resolver = parameters[parameters.length - 1];
  flow([...parameters.slice(0, parameters.length - 1)])(root, args, context, info);
  return resolver(root, args, context, info);
};

export const schemaValidation = (schema: any = {}) => (...rest: any[]) => {
  const root = rest[0];
  const args = rest[1];
  const value = {
    ...root,
    ...args,
  };
  const validateOptions = { allowUnknown: true, abortEarly: false };
  const validation: ValidationResult<any> = joi.validate(value, schema, validateOptions);
  if (validation.error) {
    throw new SchemaValidationError(validation.error);
  }
  return rest;
};
