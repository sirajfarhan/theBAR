import React, {Component} from 'react';
import { Platform, Text, View, AsyncStorage} from 'react-native';
import { graphql, compose } from 'react-apollo';
import { LoginManager } from 'react-native-fbsdk';

import { getCurrentUserInfo } from '../../helpers'

import Button from '../../components/Button'
import InstructionViewPager from '../../components/InstructionViewPager'

import ActionCreators from '../../actions';

import createUserMutation from './createUserMutation'

import styles from './styles'

class LoginPage extends Component {
  constructor(props){
    super(props)

    this.loginWithFacebook = this.loginWithFacebook.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.instructionsContainer}>
          <InstructionViewPager />
        </View>
        <View style={{flex: 1}}>
          <Button onPress={this.loginWithFacebook} label="LOGIN WITH FACEBOOK" />
          <Button label="LOGIN WITH GOOGLE" />
        </View>
      </View>
    );
  }

  async loginWithFacebook() {
    const { createUser, listUsers, navigation: { replace } } = this.props;

    let { isCancelled } = await LoginManager.logInWithReadPermissions(['public_profile','email']);

    if(!isCancelled) {
      let {
        id: username,
        first_name: firstName,
        last_name: lastName,
        email,
        picture : {
          data: {
            url: profilePicture
          }
        }
      } = await getCurrentUserInfo();

      let createuserinput = {
        username,
        firstName,
        lastName,
        email,
        profilePicture,
      }

      await createUser({ variables: { createuserinput }});

      AsyncStorage.setItem('loginId', username)

      replace('main', { id: username })
    }
  }
}



LoginPage = compose(
  graphql(
    createUserMutation, {
      name: 'createUser'
    }))(LoginPage)

export default LoginPage
