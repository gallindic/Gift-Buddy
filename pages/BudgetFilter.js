import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import NumericInput from 'rn-numeric-input'

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import Global from '../components/Global'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class BudgetFilter extends Component {

  constructor(props) {
        super(props);
        this.state = {
          budgetValueOne: Global.BudgetFilter.budgetValueOne,
          budgetValueTwo: Global.BudgetFilter.budgetValueTwo,
        };
  }

  changeBudget(value) {
    this.setState({
      budgetValueOne: parseFloat(value[0]),
      budgetValueTwo: parseFloat(value[1])
    });
  }

  changeBudgetLower(valueLower) {
    this.setState({ budgetValueOne: valueLower })
  }

  changeBudgetUpper(valueUpper) {
    this.setState({ budgetValueTwo: valueUpper })
  }

  skip = () => {
    this.setState({ budgetValueOne: 0 })
    this.setState({ budgetValueTwo: 0 })
    this.props.navigation.navigate('GenderFilter')
  }

  render() {
    Global.BudgetFilter.budgetValueOne = this.state.budgetValueOne
    Global.BudgetFilter.budgetValueTwo = this.state.budgetValueTwo
    const { budgetValueOne, budgetValueTwo } = this.state;
    return (
      <View style={{height: '100%'}}>
        <Header />
        <View style={styles.body}>
        <Text style={styles.text}>Set your budget{'\n'}</Text>
        </View>
        <View style={styles.buttons}>
          <View>
            <Text style={styles.budgetText}>From (EUR)</Text>
            <NumericInput 
            onChange={this.changeBudgetLower.bind(this)}
            rounded
            minValue={0}
            maxValue={1000}
            value={budgetValueOne}
            />
          </View>
          <View>
            <Text style={styles.budgetText}>To (EUR)</Text>
            <NumericInput 
            onChange={this.changeBudgetUpper.bind(this)}
            rounded
            minValue={0}
            maxValue={1000}
            value={budgetValueTwo}
            /> 
          </View>
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
            <View style={{display: 'flex', flexDirection: 'row', width: WIDTH*0.8, justifyContent: 'space-between'}}>
              <Text style={styles.sliderText}>0</Text>
              <Text style={styles.sliderText}>1000+</Text>
            </View>
        </View>
        <View style = {{backgroundColor: '', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity 
            style={styles.button}
            onPress= {() => this.skip()} >
            <Text style={styles.buttonText}>Skip this section</Text>
          </TouchableOpacity>
        </View>
        <FooterNavigation budgetDiff={budgetValueTwo-budgetValueOne} mainText='' nextScreen={'GenderFilter'} />
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
  budgetText: {
    fontSize: RFValue(15, 580),
    textAlign: 'center',
  },
  budgetContainer: {
    width: WIDTH/5,
    height: HEIGHT/20,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: RFValue(15, 580),
  },
  slider: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: RFValue(15, 580),
  },
  sliderText: {
    fontSize: RFValue(15, 580),
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
