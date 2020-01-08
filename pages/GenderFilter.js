import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import Global from '../components/Global'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class GenderFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pressedMale: false,
            pressedFemale: false,
            pressedOther: false,
            gender: 'None'
        }
    }

    changePressedMale() {
        this.setState({ pressedFemale: false });
        this.setState({ pressedOther: false });
        this.setState({ pressedMale: !this.state.pressedMale });
        this.setState({ gender: 'Male' });
    }

    changePressedFemale() {
        this.setState({ pressedMale: false });
        this.setState({ pressedOther: false });
        this.setState({ pressedFemale: !this.state.pressedFemale })
        this.setState({ gender: 'Female' });
    }

    changePressedOther() {
        this.setState({ pressedMale: false });
        this.setState({ pressedFemale: false });
        this.setState({ pressedOther: !this.state.pressedOther })
        this.setState({ gender: 'Other' });
    }

  render() {
    Global.Gender = this;

    return (
      <View style={{height: '100%'}}>
        <Header />
        <View style={styles.body}>
            <Text style={styles.text}>Select the persons{'\n'}gender</Text>
            <View style={styles.buttons}>
                    <TouchableOpacity 
                    style={this.state.pressedMale ? styles.buttonPressed : styles.button}
                    onPress={this.changePressedMale.bind(this)}
                    >
                        <Text style={this.state.pressedMale ? styles.buttonPressedText : styles.buttonText}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    style={this.state.pressedFemale ? styles.buttonPressed : styles.button}
                    onPress={this.changePressedFemale.bind(this)}
                    >
                        <Text style={this.state.pressedFemale ? styles.buttonPressedText : styles.buttonText}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={this.state.pressedOther ? styles.buttonPressed : styles.button}
                    onPress={this.changePressedOther.bind(this)}
                    >
                        <Text style={this.state.pressedOther ? styles.buttonPressedText : styles.buttonText}>Other</Text>
                    </TouchableOpacity>
                </View>
            </View>
        <FooterNavigation mainText='' nextScreen='OccasionFilter' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
      marginVertical: HEIGHT * 0.05,
      paddingVertical: HEIGHT * 0.02,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  text: {
      fontSize: RFValue(15, 580),
      textAlign: 'center',
      fontWeight: '500'
  },
  slider: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  },
  buttons: {
      width: WIDTH,
      display: 'flex',
      flexDirection: 'column',
      width: WIDTH * 0.7,
      paddingVertical: WIDTH * 0.1,
  },
  button: {
    alignItems: 'center',
    padding: '3%',
    marginHorizontal: '10%',
    marginVertical: '5%',
    backgroundColor: 'white',
    borderColor: '#6E6263',
    borderRadius: 8,
    borderWidth: 1.5,
    paddingHorizontal: '10%',
    paddingVertical: 15,
  },
  buttonPressed: {
    alignItems: 'center',
    padding: '3%',
    marginHorizontal: '10%',
    marginVertical: '5%',
    backgroundColor: '#FF304F',
    borderColor: '#6E6263',
    borderRadius: 8,
    borderWidth: 1.5,
    paddingHorizontal: '10%',
    paddingVertical: 15,
  },
  buttonText: {
    color: '#6E6263',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 0.2,
    fontSize: RFValue(19, 580),
  },
  buttonPressedText: {
    color: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 0.2,
    fontSize: RFValue(19, 580),
  },
});
