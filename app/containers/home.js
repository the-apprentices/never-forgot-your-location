import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Logo from '../components/logo';
import FbLoginButton from '../components/fbLoginButton';
import Button from '../components/button';

export default class Home extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={[styles.logo, styles.col1]}>
          <Logo/>
        </View>
        <View style={[styles.social, styles.margin20, styles.col2]}>
          <FbLoginButton />
        </View>
        <View style={[styles.button, styles.margin15, styles.col3]}>
          <Button buttonStyle={saveLocationButton} title='SAVE LOCATION' />
        </View>
        <View style={[styles.button, styles.margin15, styles.col4]}>
          <Button buttonStyle={visitedPlacesButton} title='VISITED PLACES' />
        </View>
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
    justifyContent: 'flex-start'
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  social: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 1
  },
  button: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  margin20: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginLeft: 20,
    marginRight: 20
  },
  margin15: {
    marginLeft: 8,
    marginRight: 8,
  },
  col1: {
    flex: 0.8,
    top: 10
  },
  col2: {
    flex: 1.2,
    // marginTop:
  },
  col3: {
    flex: 0.2,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  col4: {
    flex: 0.45,
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});
