# crispy-api
Typescript GraphQL API for `crispy-web`

API based on [`Apollo`](https://www.apollographql.com/docs/apollo-server/) express server. 

## How to use

### 1. Download project & install dependencies

Clone the `crispy-api` branch of this repository:

```
git clone git@github.com:WiseEngineering/crispy-api.git
```

Go to project folder:

```
cd crispy-api
cp .env.example .env
```


### 2. Start up `Docker` servers 

Command to start up server

```
docker-compose up -d
```

Run migration:

```
docker exec -it crispy-api yarn migrate
```

if you use docker-compose you can get container name use

```
docker ps
```

### 3. UI client URL

```
http://localhost:4444/graphql/playground
```
