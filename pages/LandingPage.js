import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class LandingPage extends Component {

  render() {
    return (
      <View style={{height: '100%'}}>
        <Header />
        <View style={styles.startSection}>
          <ImageBackground 
          style={styles.startImage}
          source={require('../sources/landing-page-gifts2.jpg')}>
            <Text style={styles.startSectionText}>Choose the perfect gift</Text>
            <Text style={styles.text}>Never buy the wrong one again</Text>
            <Button
              text="Start shopping"
              size="large"
              onPress={() => this.props.navigation.navigate('AgeFilter')}
            />
          </ImageBackground>
        </View>
        <View>
          <Image
                style={styles.image}
                source={require('../sources/landing-page-smrekice.jpg')}
            />
        </View>
        <ImageBackground 
        style={styles.customImage}
        source={require('../sources/landing-page-xmas.jpg')}>
          <Text style={styles.startSectionText}>Buy the perfect Christmas gift</Text>
          <Button
            text="Browse trending"
            size="large"
            onPress={() => this.props.navigation.navigate('trendingScreen')}
          />
        </ImageBackground>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  startSection: {
    height: HEIGHT * 0.30,
    marginBottom: 0,
    paddingBottom: 0
  },
  startImage: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  customImage: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: HEIGHT * 0.07,
    height: HEIGHT * 0.38,
    width: WIDTH
  },
  startSectionText: {
    marginTop: HEIGHT * 0.07,
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    color: 'white',
    fontSize: RFValue(14, 580),
    fontWeight: '700',
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.7,
  },
  text: {
    color: 'white',
    fontSize: RFValue(14, 580),
    fontWeight: '700',
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.7
  },
  startButton: {
    backgroundColor: 'white',
  },
  image: {
    width: WIDTH,
    height: HEIGHT * 0.12,
  }
});
