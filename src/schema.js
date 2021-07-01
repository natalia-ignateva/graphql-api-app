const graphql = require('graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = graphql;

const schema = new GraphQLSchema({
  query: queryType,
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    post: {
      type: postType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (source, { id }) => {
        return posts[id];
      },
    },
    posts: {
      type: new GraphQLList(postType),
      resolve: () => {
        return posts;
      },
    },
  },
});

const postType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    title: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    author: {
      type: authorType,
      resolve: (source, params) => {
        return authors[source.author];
      },
    },
  },
});

const authorType = new GraphQLObjectType({
  name: 'Author',
  fields: {
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
  },
});

const posts = [
  {
    title: 'First post',
    description: 'Content of the first post',
    author: 'Daisy',
  },
  {
    title: 'Second post',
    description: 'Content of the second post',
    author: 'Rose',
  },
];

const authors = {
  Daisy: {
    name: 'Daisy',
    age: 5,
  },
  Rose: {
    name: 'Rose',
    age: 2,
  },
};

module.exports = schema;
