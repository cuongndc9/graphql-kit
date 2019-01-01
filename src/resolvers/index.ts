import fs from 'fs';
import path from 'path';
import { resolvers as scalarResolvers } from 'graphql-scalars';

const resolvers = [scalarResolvers];
fs
  .readdirSync(__dirname)
  .filter((fileName) => /resolver.[t|j]s/.test(fileName))
  .forEach((fileName) => {
    const resolver = require(path.join(__dirname, fileName));
    resolvers.push(resolver.default);
  });

export default resolvers;
