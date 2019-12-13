# crispy-api
Typescript GraphQL API for `crispy-web`

API based on [`Prisma IO`](https://www.prisma.io) client. Client server describe in `docker-compose` 

## How to use

### 1. Download project & install dependencies

Clone the `crispy-api` branch of this repository:

```
git clone git@github.com:WiseEngineering/crispy-api.git
```

Install Node dependencies:

```
cd crispy-api
yarn install
```


### 2. Start up `Prisma` server and setup all models 

Command to start up server

```
docker-compose up -d
```

Setup models to server:

```
yarn prisma-build
```

### 3. Start project 

```
yarn start
```
