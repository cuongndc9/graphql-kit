import { sequelize } from '../models/sequelize';
import Cat from '../models/cat.model';
import CategoryModel from '../models/category.model';
import { MutationCreateCategoryArgs, Category } from '../types/graphql.type';

class CategoryService {
  static getCategories(): Promise<Category[]> {
    return CategoryModel.findAll({
      include: [
        {
          model: Cat,
          as: 'cats',
        },
      ],
    });
  }

  static createCategory({ name }: MutationCreateCategoryArgs): Promise<Category> {
    return sequelize.transaction((transaction) => CategoryModel.create({
      name,
    }, { transaction }));
  }
}

export default CategoryService;
