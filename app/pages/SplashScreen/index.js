import React, {Component} from 'react';
import { Platform, Text, View, AsyncStorage } from 'react-native';
import { A } from 'react-native-fbsdk';
import delay from 'delay';

import styles from './styles'

export default class GetFriendsInfoPage extends Component {
  async componentDidMount(){
    const { navigation: { replace } } = this.props;
    const loginId = await AsyncStorage.getItem('loginId');
    await delay(3000)
    if(loginId) {
      replace('main', { id: loginId })
    } else {
      replace('login')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>theBAR</Text>
      </View>
    );
  }
}
