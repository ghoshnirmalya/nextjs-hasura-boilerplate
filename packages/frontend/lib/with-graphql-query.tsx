import { createClient, Provider } from "urql";
import fetch from "isomorphic-unfetch";

const client = createClient({
  url: process.env.API_URL || "http://localhost:8080/v1/graphql",
  fetch,
  fetchOptions: {
    headers: { "X-Hasura-Admin-Secret": "secret" },
  },
  requestPolicy: "cache-and-network",
});

const WithGraphQLQuery = ({ children }: any) => (
  <Provider value={client}>{children}</Provider>
);

export default WithGraphQLQuery;
