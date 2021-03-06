import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import NumericInput from 'rn-numeric-input'

import Header from '../components/Header';
import Button from '../components/Button';
import FooterNavigation from '../components/FooterNavigation';
import Global from '../components/Global'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class AgeFilter extends Component {

  constructor(props) {
        super(props);
        this.state = {
          ageValue: Global.AgeFilter.ageValue
        };
  }

  skip = () => {
    this.setState({ ageValue: 0 })
    this.props.navigation.navigate('BudgetFilter')
  }

  render() {
    Global.AgeFilter.ageValue = this.state.ageValue;
    return (
      <View style={{height: '100%'}}>
        <Header />
        <View style={styles.body}>
            <Text style={styles.text}>Select the persons age</Text>
        </View>
        <View style={styles.slider}>
            <NumericInput 
            onChange={value => this.setState({ ageValue: parseFloat(value) })}
            rounded
            minValue={0}
            maxValue={120}
            initValue={this.state.ageValue}
            />
        </View>
        <View style = {{backgroundColor: '', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity 
            style={styles.button}
            onPress= {() => this.skip()} >
            <Text style={styles.buttonText}>Skip this section</Text>
          </TouchableOpacity>
        </View>
        <FooterNavigation mainText='' nextScreen={'BudgetFilter'} />
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
      flexDirection: 'row',
      justifyContent: 'space-evenly',
  },
  button: {
    width: WIDTH * 0.6,
    alignItems: 'center',
    padding: '3%',
    marginHorizontal: '10%',
    marginVertical: HEIGHT * 0.15,
    backgroundColor: 'white',
    borderColor: '#6E6263',
    borderRadius: 8,
    borderWidth: 1.5,
    paddingHorizontal: '10%',
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: RFValue(15, 580)
  }
});
