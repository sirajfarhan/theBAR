import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { graphql, compose } from 'react-apollo';

import Carousel from 'react-native-snap-carousel';

import ListProfilesQuery from './listProfilesQuery';

import styles from './styles';

class Friends extends React.Component {
  render() {
    const { listProfiles: { loading, error } } = this.props;
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
    const { listProfiles: { listProfiles: { items } } } = this.props;

    return (<View style={styles.container}>
      <Carousel
          layout={'tinder'}
          data={items}
          renderItem={this.renderItem}
          sliderWidth={400}
          itemWidth={220}/>
      </View>)
  }

  renderItem ({item, index}) {
        return (
            <View style={styles.cardContainer}>
                <Image style={styles.image} source={{ uri: item.picture }}/>
                <View style={styles.textContainer}>
                  <Text style={styles.nameText}>{item.firstName + ' ' + item.lastName}</Text>
                  <Text style={styles.ageText}>{item.age}</Text>
                </View>
            </View>
        );
    }
}

Friends = compose(graphql(
  ListProfilesQuery, {
    name: 'listProfiles'
  })
)(Friends)

export default Friends;
