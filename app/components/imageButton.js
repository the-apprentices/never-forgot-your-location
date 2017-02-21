import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import { Image, TouchableHighlight, StyleSheet } from 'react-native';

export default class imageButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={ () => this.props.onClick() }
        style={styles.button}
      >
        <Image source={this.props.imageUrl} style={styles.image} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
    marginRight: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    // height: 45,
    resizeMode: 'contain'
  }
});
