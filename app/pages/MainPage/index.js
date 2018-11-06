import React, {Component} from 'react';
import { Platform, Text, View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Profile from '../../containers/Profile'
import Friends from '../../containers/Friends'

export default createBottomTabNavigator({
  Profile: Profile,
  Friends: Friends,
},{
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });
