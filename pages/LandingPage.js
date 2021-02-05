import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, TouchableOpacity, Text } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import HeaderLanding from '../components/HeaderLanding'
import Footer from '../components/Footer'
import Button from '../components/Button';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class LandingPage extends Component {

  render() {
    return (
      <ImageBackground 
      source={require('../sources/background_holo_v2.jpg')}
      style={styles.startImage}>
        <HeaderLanding />
        <View style={{height: '55%', display: 'flex', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AgeFilter')}>
            <Text style={styles.buttonText}>Shop</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  startImage: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  button: {
    display: 'flex',
    height: HEIGHT * 0.08,
    width: WIDTH * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF304F',
    borderColor: '#6E6263',
    borderRadius: 8,
    borderWidth: 1.5,
  },
  buttonText: {
    color: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 0.2,
    fontSize: RFValue(30, 580),
    fontWeight: '700'
  }
});
