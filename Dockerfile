FROM node:12.13.1

WORKDIR /code

COPY package.json /code/package.json
COPY yarn.lock /code/yarn.lock
RUN yarn install

COPY . /code

EXPOSE 4444

CMD ["yarn", "start"]
