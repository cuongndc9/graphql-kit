import { Model, DataTypes, Sequelize } from 'sequelize';

import Cat from './cat.model';

class Category extends Model {
  public id: string;

  public name: string;

  public createdAt: Date;

  public updatedAt: Date;

  public deletedAt: Date;

  public cats?: Cat[];

  static associate() {
    this.hasMany(Cat, {
      as: 'cats',
      foreignKey: 'categoryId',
    });
  }
}

const initModel = (sequelize: Sequelize) => {
  Category.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    underscored: true,
    paranoid: true,
    tableName: 'category',
  });
};

export { initModel };
export default Category;
