import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';

import styles from './styles'

import InstructionPage from '../Instruction'

import instructionsData from '../../assets/data/instructions.json'

export default class InstructionViewPager extends Component<Props> {
  render() {
    return (
      <IndicatorViewPager
        style={styles.container}
        indicator={this.renderDotIndicator()}>

          <View>
            <InstructionPage bigTitle={'WELCOME TO theBAR'} />
          </View>
          {
            instructionsData.map((instruction, index) => (
              <View key={index}>
                <InstructionPage
                  text={instruction.text}
                  image={instruction.image} />
              </View>
            ))
          }
      </IndicatorViewPager>
    );
  }
  renderDotIndicator() {
    return (
      <PagerDotIndicator
        pageCount={6}
        dotStyle={styles.dotStyle}
        selectedDotStyle={styles.selectedDotStyle} />);
  }
}
