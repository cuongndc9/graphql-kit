# Start with fully-featured Node.js base image
FROM node:12 AS builder

WORKDIR /home/node/app

# Copy dependency information and install all dependencies
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Copy source code (and all other relevant files)
COPY src ./src

# Build code
COPY tsconfig.json tsconfig.build.json ./
RUN yarn build

# Run-time stage
FROM node:12-alpine

# Expose port 9000
EXPOSE 9000

WORKDIR /home/node/app

# Copy dependency information and install production-only dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Copy results from previous stage
RUN mkdir build
COPY --from=builder /home/node/app/build ./build

CMD [ "node", "./build/index.js" ]
