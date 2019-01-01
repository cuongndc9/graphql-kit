import joi from 'joi';

import { middleware, schemaValidation } from '../components';
import CatService from '../services/cat.service';
import { MutationCreateCatArgs, Cat, Resolvers } from '../types/graphql.type';

const resolver: Resolvers = {
  Query: {
    cats: (): Promise<Cat[]> => CatService.getCats(),
  },
  Mutation: {
    createCat: middleware(
      schemaValidation({
        color: joi.string().valid('black', 'white'),
      }),
      (_: any, args: MutationCreateCatArgs): Promise<Cat> => CatService.createCat(args),
    ),
  },
};

export default resolver;
