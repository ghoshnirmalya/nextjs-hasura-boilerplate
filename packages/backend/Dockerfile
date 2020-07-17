FROM hasura/graphql-engine:v1.2.2.cli-migrations-v2

# Set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

CMD graphql-engine \
  --database-url $HASURA_GRAPHQL_DATABASE_URL \
  serve
