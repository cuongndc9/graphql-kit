import { sequelize } from '../models/sequelize';
import CatModel from '../models/cat.model';
import Category from '../models/category.model';
import { MutationCreateCatArgs, Cat } from '../types/graphql.type';

class CatService {
  static getCats(): Promise<Cat[]> {
    return CatModel.findAll({
      include: [
        {
          model: Category,
          as: 'category',
        },
      ],
    });
  }

  static createCat({ name, color, categoryId }: MutationCreateCatArgs): Promise<Cat> {
    return sequelize.transaction((transaction) => CatModel.create({
      name,
      color,
      categoryId,
    }, { transaction }));
  }
}

export default CatService;
