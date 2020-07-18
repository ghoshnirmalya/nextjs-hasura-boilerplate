import { defaultExchanges } from "urql";

const graphqlQueryConfig = () => ({
  url: process.env.API_URL || "http://localhost:8080/v1/graphql",
  exchanges: [...defaultExchanges],
  fetch,
  fetchOptions: {
    headers: { "X-Hasura-Admin-Secret": "secret" },
  },
});

export default graphqlQueryConfig;
