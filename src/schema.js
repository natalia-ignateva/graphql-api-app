const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    //...
  }),
});

module.exports = schema;