import { QueryInterface, DataTypes } from 'sequelize';

const migration = {
  up: (queryInterface: QueryInterface) => queryInterface.sequelize.transaction((t) => queryInterface.createTable('cat', {
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
    category_id: {
      type: DataTypes.UUID,
      references: {
        model: 'category',
        key: 'id',
      },
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  }, {
    transaction: t,
  })),
  down: (queryInterface: QueryInterface) => queryInterface.sequelize.transaction((t) => queryInterface.dropTable('cat', { transaction: t })),
};

export default migration;
