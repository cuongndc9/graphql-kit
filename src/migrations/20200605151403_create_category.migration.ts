import { QueryInterface, DataTypes } from 'sequelize';

const migration = {
  up: (queryInterface: QueryInterface) => queryInterface.sequelize.transaction((t) => queryInterface.createTable('category', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
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
  down: (queryInterface: QueryInterface) => queryInterface.sequelize.transaction((t) => queryInterface.dropTable('category', { transaction: t })),
};

export default migration;
