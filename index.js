import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Navigation } from 'react-native-navigation';
import { goToHome } from '././src/navigation/goToHome';
import { Home } from './src/dashboard';
import { Client } from './src/graphql/apollo-client';

import { NAVIGATION_NAME_HOME } from './src/navigation/names';

Navigation.registerComponent(
  NAVIGATION_NAME_HOME,
  () => props =>
    (
      <ApolloProvider client={Client}>
        <Home {...props} />
      </ApolloProvider>
    ),
  () => Home,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait'],
    },
  });
  goToHome();
});
