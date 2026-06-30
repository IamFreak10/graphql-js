const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return 'Hello world From GraphQL';
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
