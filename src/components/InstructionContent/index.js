import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles'

export default class InstructionContent extends Component<Props> {

  render() {
    const { text, image } = this.props
    return (
      <View style={styles.container}>
          <Image source={image}/>
          <Text style={styles.text}>{text}</Text>
      </View>);
  }
}
