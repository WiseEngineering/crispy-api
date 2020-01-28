FROM node:12.13.1 as base

WORKDIR /code

COPY package.json /code/package.json
COPY yarn.lock /code/yarn.lock

RUN yarn

EXPOSE 4444

CMD ["yarn", "start"]

FROM base as prod

COPY . /code
