import React, { Component } from 'react';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';

import AWSAppSyncClient from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link';
import { graphql, ApolloProvider, apolloReducer } from 'react-apollo';
import * as AWS from 'aws-sdk';

import AppSync from './config.js';

import AppNavigator from './routes'

export const client = new AWSAppSyncClient({
    url: AppSync.aws_appsync_graphqlEndpoint,
    region: AppSync.aws_appsync_region,
    auth: {
        type: AppSync.aws_appsync_authenticationType,
        apiKey: AppSync.aws_appsync_apiKey,
    },
})


export default class Root extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Rehydrated>
          <AppNavigator />
        </Rehydrated>
      </ApolloProvider>
    );
  }
}
