import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class logo extends Component {
  login(){
    console.log('login pressed');
  }
  render(){
    return (
      <View>
        <Text style={styles.logo}>LOGO</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    color: '#FF4630',
    fontSize: 40,
    fontWeight: 'bold'
  }
});
