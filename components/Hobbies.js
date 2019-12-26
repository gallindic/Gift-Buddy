import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, View, TouchableOpacity, Linking } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class Hobbies extends Component {

  constructor() {
    super();
    this.state = {
        hobbies: [],
    };
}

  changeState = () => {
      this.setState({ hobbies: this.props.selected })
  }

  render() {
    return (
      <View>
          {this.changeState.bind()}
      </View>
    );
  }
}