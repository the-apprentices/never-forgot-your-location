import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

export default class button extends Component {
  constructor(props){
      super(props);
  }

  login(){
    console.log('login pressed');
  }

  render(){
    return (
      <View>
        <Button
          large
          fontSize={this.props.buttonStyle.fontsize}
          fontWeight={this.props.buttonStyle.fontWeight}
          backgroundColor={this.props.buttonStyle.backgroundColor}
          color={this.props.buttonStyle.color}
          title={this.props.title}
          buttonStyle={{
            borderStyle: this.props.buttonStyle.borderStyle,
            borderWidth: this.props.buttonStyle.borderWidth,
            borderColor: this.props.buttonStyle.borderColor
          }}
        />
      </View>
    )
  }
}
