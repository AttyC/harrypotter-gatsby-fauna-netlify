require("dotenv").config();
const { createHttpLink } = require("apollo-link-http");
const { ApolloServer, makeRemoteExecutableSchema, introspectSchema } = require("apollo-server-micro");
const fetch = require("isomorphic-fetch");

const link = createHttpLink({
  uri: "https://graphql.fauna.com/graphql",
  fetch,
  headers: {
    Authorization: `Bearer ${process.env.SERVER_KEY}`
  }
});

const schema = makeRemoteExecutableSchema({
  schema: introspectSchema(link),
  link
});

const server = new ApolloServer({
  schema,
  introspection: true
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true
  }
});