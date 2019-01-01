
import path from 'path';

import { migrate } from './utils';
import { sequelize } from '../../models/sequelize';

const pathToMigration = path.join(__dirname, '..', '..', 'migrations');
migrate(sequelize, pathToMigration).up();
