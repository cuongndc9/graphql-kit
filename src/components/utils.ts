import { get } from 'lodash';
import { BaseError, ValidationError } from 'sequelize';
import { GraphQLError } from 'graphql';

import {
  AppError,
  DatabaseError,
  DatabaseValidationError,
} from './errors';

export const formatError = (error: GraphQLError) => {
  let formattedError;
  const originalError = get(error, 'originalError');

  if (originalError instanceof ValidationError) {
    formattedError = new DatabaseValidationError(originalError);
  } else if (originalError instanceof BaseError) {
    formattedError = new DatabaseError(originalError.message);
  } else if (!get(originalError, 'extensions.code')) {
    formattedError = new AppError(error.message);
  } else {
    formattedError = error;
  }

  return formattedError;
};
