import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppRegistry } from 'react-native';
import CardsList from './views/cardsList/CardsList';
import { useFonts } from 'expo-font';
import Loading from './views/loading/Loading';

const AUTH_TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mzc1LCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU0ODQyMzAwLCJleHAiOjE2NTU0NDcxMDB9.LWNZW6vZzAqOQjHCZOLMuErqn4LqaMTVfqnd3DJxK04RbHHAr0MCM7oVSVEl_wyJJwqnIuyZC7vgCeJ3TOXxU8QPzXGCQRQjqUKW5aReCoCrU_WAjkcmf87bXpnk9EheMae8zzyownH4S8FQUPMBcLuwYhvrada7sL8s66xA2YqKPBHbMgZNH2TppxB8WxgCiRY-EzNTE3JUatzf6nvbnXCzq2ecAP5304-G2gC742YT4n3DNHdXWcSRHeZeTu0ps15tlB-2Z_QQo6vLTKmoQLlzA_6ksaSxi-VxYJjMjxgZVyPTBxvVd1y6YxsFKMzJ3F_2n5H5UxFTIOEamx8wXg';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api-dev.foodstyles.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

const App = () => {
  let [fontsLoaded, error] = useFonts({
    'ProximaNovaAltBold': require('./assets/fonts/ProximaNovaAlt-Bold.ttf'),
    'ProximaNovaAltRegular': require('./assets/fonts/ProximaNovaAlt-Regular.ttf'),
    'ProximaNovaAltSemibold': require('./assets/fonts/ProximaNovaAlt-Semibold.ttf'),
    'ProximaNovaAltCondSemibold': require('./assets/fonts/ProximaNovaAltCond-Semibold.ttf'),
  })

  return (<>
    {fontsLoaded ? <ApolloProvider client={client}>
      <CardsList />
    </ApolloProvider> : <Loading />}
  </>)
}
  ;

AppRegistry.registerComponent('FoodStyles', () => App);

export default App;
