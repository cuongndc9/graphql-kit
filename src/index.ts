import path from 'path';
import { logger, globalOptions } from 'juno-js';

import { config } from './components';
import { migrate } from './components/migration/utils';
import { sequelize, associate } from './models/sequelize';
import app from './app';

globalOptions.environment = config.nodeEnv;

const main = async () => {
  try {
    if (config.nodeEnv !== 'development') {
      const pathToMigration = path.join(__dirname, 'migrations');
      await migrate(sequelize, pathToMigration).up().catch((error) => logger.error('Migrate error', error));
    }
    associate();
    app();
  } catch (error) {
    logger.error('Global error', error);
  }
};

main();
