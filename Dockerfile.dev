FROM node:12

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn

EXPOSE 9000

CMD ["yarn", "start:dev"]
