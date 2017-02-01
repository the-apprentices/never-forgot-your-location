import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class fbLoginButton extends Component {
  login(){
    console.log('login pressed');
  }
  render(){
    return (
      <View>
        <SocialIcon
          raised
          button
          fontWeight='bold'
          title='SIGN IN WITH FACEBOOK'
          type='facebook'
          style={styles.loginButton}
          onPress={ () => this.login() }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginButton: {
    borderRadius: 0
  }
});
