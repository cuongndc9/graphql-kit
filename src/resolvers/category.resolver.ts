import CategoryService from '../services/category.service';
import { MutationCreateCategoryArgs, Category, Resolvers } from '../types/graphql.type';

const resolver: Resolvers = {
  Query: {
    categories: (): Promise<Category[]> => CategoryService.getCategories(),
  },
  Mutation: {
    createCategory: (_: any, args: MutationCreateCategoryArgs): Promise<Category> => CategoryService.createCategory(args),
  },
};

export default resolver;
