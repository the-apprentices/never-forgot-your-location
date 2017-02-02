import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class fbLoginButton extends Component {
  onClick(){
    console.log('hello');
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
          onPress={ () => this.onClick() }
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
