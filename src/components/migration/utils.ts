import Umzug from 'umzug';
import { Sequelize } from 'sequelize';

const migrate = (sequelize: Sequelize, path: string) => new Umzug({
  migrations: {
    path,
    pattern: /\.migration.[t|j]s$/,
    params: [
      sequelize.getQueryInterface(),
      sequelize.constructor,
      () => {
        throw new Error(`Migration tried to use old style "done" callback.
          Please upgrade to "umzug" and return a promise instead.`);
      },
    ],
  },
  storage: 'sequelize',
  storageOptions: {
    sequelize,
  },
});

export { migrate };
