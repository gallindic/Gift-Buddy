import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Header from '../components/Header';
import Button from '../components/Button';
import FooterNavigation from '../components/FooterNavigation';
import Global from '../components/Global'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class BudgetFilter extends Component {

  constructor(props) {
        super(props);
        this.state = {
          budgetValueOne: 30,
          budgetValueTwo: 200,
        };
  }

  changeBudget(value) {
    this.setState(() => {
      return {
        budgetValueOne: parseFloat(value[0]),
        budgetValueTwo: parseFloat(value[1]),
      };
    });
}

skip = () => {
  this.setState({ budgetValueOne: 0 })
  this.setState({ budgetValueTwo: 0 })
  this.props.navigation.navigate('GenderFilter')
}

  render() {
    Global.BudgetFilter = this;
    const { budgetValueOne, budgetValueTwo } = this.state;
    return (
      <View style={{height: '100%'}}>
        <Header />
        <View style={styles.body}>
        <Text style={styles.text}>Set your budget{'\n'}</Text>
        </View>
        <View style={styles.buttons}>
            <Button
            text={budgetValueOne + ' EUR'}
            theme='secondary'
            size='small'
            disabled={true}
            />
            <Button
            text={(budgetValueTwo === 1000) ? '1000+ EUR' : budgetValueTwo + ' EUR'}
            theme='secondary'
            size='small'
            disabled={true}    
            />
        </View>
        <View style={styles.slider}>
            <MultiSlider
            values={[budgetValueOne, budgetValueTwo]}
            sliderLength={WIDTH * 0.8} 
            max={1000}
            selectedStyle={{backgroundColor: '#FF304F'}}
            markerStyle={{borderColor: '#FF304F', borderWidth: 3, backgroundColor: 'white'}}
            onValuesChange={this.changeBudget.bind(this)}
            />
        </View>
        <View style = {{backgroundColor: '', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity 
            style={styles.button}
            onPress= {() => this.skip()} >
            <Text style={styles.buttonText}>Skip this section</Text>
          </TouchableOpacity>
        </View>
        <FooterNavigation mainText='' nextScreen={'GenderFilter'} />
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
