import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import Logo from '../components/logo';
import ImageButton from '../components/imageButton';
import Button from '../components/button';

export default class Home extends Component {
  constructor(props){
    super(props);
  }

  fbLogin(){
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithReadPermissions(['email','public_profile'])
    .then(result => {
      if (result.isCancelled) return console.log('Login cancelled');

      AccessToken.getCurrentAccessToken().then(data => {
        fetch('https://graph.facebook.com/v2.5/me?fields=id,email,first_name,last_name&access_token=' + data.accessToken)
        .then(response => response.json())
        .then(userInfo => {

          console.log(userInfo);
        }).catch(ex => {
          return console.log('login error');
        })
      });
    }, err => {
      console.log('Login fail with error: ', error);
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={[styles.logo, styles.col1]}>
          <Logo/>
        </View>
        <View style={[styles.social]}>
          <ImageButton onClick={this.fbLogin} imageUrl={require('../images/facebook.png')}/>
        </View>
        <View style={[styles.button, styles.margin15, styles.col3]}>
          <Button title='SAVE LOCATION' />
        </View>
        <View style={[styles.button, styles.margin15, styles.col4]}>
          <Button title='VISITED PLACES' />
        </View>
      </View>
    )
  }
}

// <View style={[styles.social, styles.margin20, styles.col2]}>

// const saveLocationButton = {
//   fontsize: 16,
//   fontWeight: 'bold',
//   backgroundColor: '#FF4630',
//   color:'#FFFFFF',
//   borderColor:'#FF4630',
// }
//
// const visitedPlacesButton = {
//   fontsize: 16,
//   fontWeight: 'bold',
//   backgroundColor: '#FFFFFF',
//   color:'#FF4630',
//   borderColor:'#FF4630',
//   borderStyle: 'solid',
//   borderWidth: 1
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F5F6',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  social: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexGrow: 0.4
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
    flexGrow: 0.8,
    top: 10
  },
  col2: {
    flexGrow: 1.2,
    // marginTop:
  },
  col3: {
    flexGrow: 0.2,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  col4: {
    flexGrow: 0.45,
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});
