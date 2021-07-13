FROM fedormelexin/graphql-engine-arm64:v2.0.0.cli-migrations-v2

# # Copy migrations directory
COPY ./migrations /hasura-migrations

# # Copy metadata directory
COPY ./metadata /hasura-metadata

# Enable the console
ENV HASURA_GRAPHQL_ENABLE_CONSOLE=true

# Heroku hobby tier PG has few limitations including 20 max connections
# https://devcenter.heroku.com/articles/heroku-postgres-plans#hobby-tier
ENV HASURA_GRAPHQL_PG_CONNECTIONS=15

# https://github.com/hasura/graphql-engine/issues/4651#issuecomment-623414531
ENV HASURA_GRAPHQL_CLI_ENVIRONMENT=default

# https://github.com/hasura/graphql-engine/issues/5172#issuecomment-653774367
ENV HASURA_GRAPHQL_MIGRATIONS_DATABASE_ENV_VAR=DATABASE_URL

# https://github.com/hasura/graphql-engine/issues/4259
ENV HASURA_GRAPHQL_MIGRATIONS_SERVER_TIMEOUT=60

# Enable JWT
ENV HASURA_GRAPHQL_JWT_SECRET=HASURA_GRAPHQL_JWT_SECRET

# Secure the GraphQL endpoint
ENV HASURA_GRAPHQL_ADMIN_SECRET=HASURA_GRAPHQL_ADMIN_SECRET

CMD graphql-engine \
  --database-url $DATABASE_URL \
  serve \
  --server-port $PORT
