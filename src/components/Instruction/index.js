import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import InstructionContent from '../InstructionContent'

import styles from './styles'

import checkmark from '../../assets/images/checkmark.png'
import emoji from '../../assets/images/emoji.png'
import pencil from '../../assets/images/pencil.png'
import emojiGrin from '../../assets/images/emoji_grin.png'
import emojiInLove from '../../assets/images/emoji_in_love.png'

export default class InstructionPage extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      checkmark,
      emoji,
      pencil,
      emoji_grin: emojiGrin,
      emoji_in_love: emojiInLove
    }
  }


  render() {
    const { bigTitle, image, text } = this.props
    return (
        <View style={styles.container}>
          {
            bigTitle ?
              <Text style={styles.bigTitle}>{bigTitle}</Text>
            : <InstructionContent image={this.state[image]} text={text} />
          }
        </View>
    );
  }
}
