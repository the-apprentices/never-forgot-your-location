import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Logo from '../components/logo';
import FbLoginButton from '../components/fbLoginButton';
import Button from '../components/button';

export default class Home extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Logo/>
        </View>
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
  container: {
    backgroundColor: '#F1F5F6',
    flex: 1,
    flexDirection: 'column',
  },
  logo:{
    flex: 0.8,
  }
});
