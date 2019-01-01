import { Sequelize } from 'sequelize';
import { logger } from 'juno-js';
import path from 'path';
import fs from 'fs';

import { config } from '../components';

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: config.pgUser,
  password: config.pgPassword,
  database: config.pgDB,
  host: config.pgHost,
  port: config.pgPort,
  // eslint-disable-next-line no-console
  logging: config.nodeEnv === 'development' ? console.log : false,
});

sequelize
  .authenticate()
  .catch((e) => {
    logger.error('Sequelize authentication failed: ', e);
  });

const associate = () => {
  const models: { [key: string]: any } = {};
  fs
    .readdirSync(__dirname)
    .filter((fileName: string) => /model.[t|j]s/.test(fileName))
    .forEach((fileName) => {
      const model = require(path.resolve(__dirname, fileName));
      model.initModel(sequelize);
      models[model.default.name] = model.default;
    });
  Object.keys(models).forEach((modelName: string) => {
    if ('associate' in models[modelName]) {
      models[modelName].associate();
    }
  });
};

export { sequelize, associate };
