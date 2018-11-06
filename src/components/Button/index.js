import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles'

export default class LoginButton extends Component<Props> {
  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>
            { this.props.label }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
