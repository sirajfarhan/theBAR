import React, { Component } from 'react';
import { Text, View, Image, AsyncStorage } from 'react-native';
import { graphql, compose } from 'react-apollo';

import { AccessToken } from 'react-native-fbsdk';

import Button from '../../components/Button'

import { logout } from '../../helpers'

import ListUsersQuery from './listUsersQuery'

import styles from './styles'

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.onLogoutButtonPressed = this.onLogoutButtonPressed.bind(this)
  }

  render() {
    const { listUsers: { loading, error } } = this.props;
    if(loading) {
      return (
        <View style={styles.container}>
          <Text>
            Loading
          </Text>
        </View>
      )
    }

    if(error) {
      return (
        <View style={styles.container}>
          <Text>
            {
              error.message
            }
          </Text>
        </View>
      )
    }

    const { listUsers: { listUsers: { items: [user] } } } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.profilePicture}
            source={{ uri: user.profilePicture }} />
        </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileInfoTitle}>First Name:</Text>
          <Text style={styles.profileInfoValue}>{user.firstName}</Text>
        </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileInfoTitle}>Last Name:</Text>
          <Text style={styles.profileInfoValue}>{user.lastName}</Text>
        </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileInfoTitle}>Email:</Text>
          <Text style={styles.profileInfoValue}>{user.email}</Text>
        </View>
        <View style={styles.buttonCotainer}>
          <Button onPress={this.onLogoutButtonPressed} label="LOGOUT"  />
        </View>
      </View>
    );
  }

  async onLogoutButtonPressed() {
    const accessToken = await AccessToken.getCurrentAccessToken();
    await logout(accessToken.accessToken)
    AsyncStorage.removeItem('loginId')
    this.props.navigation.replace('login')
  }
}

Profile = compose(graphql(
  ListUsersQuery, {
    name: 'listUsers',
    options: (props) => {
      return {
        variables: {
          filter: {
            username: {
              eq: props.navigation.getParam('id')
            }
          }
        }
      }
    }
  })
)(Profile)

export default Profile;
