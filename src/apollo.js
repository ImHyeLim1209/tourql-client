import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache({
    typePolicies: {
      SightList: {
        keyFields: [],
      },
      Sight: {
        keyFields: ["contentid"]
      }
    }
  }),
  resolvers: {
    Sight: {
      isLiked: () => false
    },
    Mutation: {
      toggleLikeSight: (_, { id, isLiked }, { cache }) => {
        console.log(isLiked);
        const mySight = {
          __typename: 'Sight',
          contentid: id,
        };

        cache.modify({
          id: cache.identify(mySight),
          fields: {
            isLiked(cachedName) {
              return !isLiked;
            }
          }
        });
      }
    }
  }
});

export default client;