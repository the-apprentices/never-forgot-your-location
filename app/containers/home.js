import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Logo from '../components/logo';
import FbLoginButton from '../components/fbLoginButton';
import Button from '../components/button';

export default class Home extends Component {
  render(){
    return (
      <View>
        <Logo />
        <FbLoginButton />
        <Button buttonStyle={saveLocationButton} title='SAVE LOCATION' />
        <Button buttonStyle={visitedPlacesButton} title='VISITED PLACES' />
      </View>
    )
  }
}

const saveLocationButton = {
  fontsize: 16,
  fontWeight: 'bold',
  backgroundColor: '#FF4630',
  color:'#FFFFFF',
  borderColor:'#FF4630',
}

const visitedPlacesButton = {
  fontsize: 16,
  fontWeight: 'bold',
  backgroundColor: '#FFFFFF',
  color:'#FF4630',
  borderColor:'#FF4630',
  borderStyle: 'solid',
  borderWidth: 1
}

const styles = StyleSheet.create({
  loginButton: {
    borderRadius: 0
  }
});
