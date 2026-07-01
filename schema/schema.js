const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const users = [
  { id: '1', name: 'A', email: 'a@b.com', age: 20 },
  { id: '2', name: 'B', email: 'b@b.com', age: 30 },
  { id: '3', name: 'C', email: 'c@b.com', age: 40 },
];
const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: userType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return users.find((user) => user.id === args.id);
      },
    },

    hello: {
      type: GraphQLString,
      resolve() {
        return 'Hello world From GraphQL';
      },
    },
  },
});

const Mutaions = new GraphQLObjectType({
  name: 'Mutaions',
  fields: {
    addUser: {
      type: userType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const newUser = {
          id: users.length + 1,
          name: args.name,
          email: args.email,
          age: args.age,
        };
        users.push(newUser);
        return newUser;
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutaions,
});
