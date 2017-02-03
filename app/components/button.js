import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class button extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onClick}
        style={[styles.button, this.props.style]}
        underlayColor='white'
      >
        <Text style={styles.buttonTitle}>{this.props.title}</Text>
      </TouchableHighlight>
    );
  }
}

// button.propTypes = {
//   title: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired
// };

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderColor: '#EFB81D',
    borderWidth: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#4A4A4A',
    fontWeight: 'bold',
    fontSize: 16
  }
});
