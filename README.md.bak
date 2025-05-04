# graphql-kit

[![Hits-of-Code](https://hitsofcode.com/github/103cuong/graphql-kit)](https://hitsofcode.com/view/github/103cuong/graphql-kit)
[![GitHub](https://img.shields.io/github/license/103cuong/graphql-kit.svg)](https://github.com/103cuong/graphql-kit/blob/master/LICENSE)

🍣 A Node kit with TypeScript, GraphQL, Sequelize, PostgreSQL and awesome tools.

## Preparation

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (*optional)
- [Docker Compose](https://docs.docker.com/compose/) (*optional)
- [Dockstation](https://dockstation.io/) (*optional)

### How to use?

#### Update config.ts file (src/components/config.ts)

```typescript
const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 9000,
  pgHost: process.env.PG_HOST || '127.0.0.1',
  pgPort: (process.env.PG_PORT as number | undefined) || 5432,
  pgDB: process.env.PG_DB || 'postgres',
  pgUser: process.env.PG_USER || 'postgres',
  pgPassword: process.env.PG_PASSWORD || 'postgres',
};

export default config;
```

#### Start application

```sh
yarn
yarn start:dev
```

### Use with Docker + Docker Compose

```sh
yarn docker-compose:start
yarn docker-compose:stop
yarn docker-compose:rebuild
```

### Build GraphQL type

```sh
yarn build:graphql
```

🙌 Awesome

## License

MIT © [Cuong Tran](https://github.com/103cuong)
