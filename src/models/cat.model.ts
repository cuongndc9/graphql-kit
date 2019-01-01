import { Model, DataTypes, Sequelize } from 'sequelize';

import Category from './category.model';

class Cat extends Model {
  public id: string;

  public name: string;

  public color: string;

  public categoryId: string;

  public createdAt: Date;

  public updatedAt: Date;

  public deletedAt: Date;

  public category?: Category;

  static associate() {
    this.belongsTo(Category, {
      as: 'category',
      foreignKey: 'categoryId',
    });
  }
}

const initModel = (sequelize: Sequelize) => {
  Cat.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.UUID,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  }, {
    sequelize,
    underscored: true,
    paranoid: true,
    tableName: 'cat',
  });
};

export { initModel };
export default Cat;
