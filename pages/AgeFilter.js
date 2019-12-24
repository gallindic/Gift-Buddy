import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Header from '../components/Header';
import Button from '../components/Button';
import FooterNavigation from '../components/FooterNavigation';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class AgeFilter extends Component {

  constructor(props) {
        super(props);
        this.state = {
          ageValueOne: 30,
          ageValueTwo: 50,
          budgetValueOne: 30,
          budgetValueTwo: 200,
        };
  }

  changeAge(value) {
        this.setState(() => {
          if (value[1] === 100) {
            return {
                ageValueOne: parseFloat(value[0]),
                ageValueTwo: '100+',
            }
          }
          return {
            ageValueOne: parseFloat(value[0]),
            ageValueTwo: parseFloat(value[1]),
          };
        });
  }

  changeBudget(value) {
    this.setState(() => {
      if (value[1] === 1000) {
        return {
            budgetValueOne: parseFloat(value[0]),
            budgetValueTwo: '1000+',
        }
      }
      return {
        budgetValueOne: parseFloat(value[0]),
        budgetValueTwo: parseFloat(value[1]),
      };
    });
}

  render() {
    const { ageValueOne, ageValueTwo, budgetValueOne, budgetValueTwo } = this.state;
    return (
      <View style={{height: '100%'}}>
        <Header />
        <View style={styles.body}>
            <Text style={styles.text}>Select the persons{'\n'}age group</Text>
        </View>
        <View style={styles.slider}>
            <MultiSlider
            values={[ageValueOne, ageValueTwo]}
            sliderLength={WIDTH * 0.8} 
            max={100}
            selectedStyle={{backgroundColor: '#FF304F'}}
            markerStyle={{borderColor: '#FF304F', borderWidth: 3, backgroundColor: 'white'}}
            onValuesChange={this.changeAge.bind(this)}
            />
            <View style={styles.buttons}>
                <Button
                text={ageValueOne}
                theme='secondary'
                size='small'
                disabled={true}
                />
                <Button
                text={ageValueTwo}
                theme='secondary'
                size='small'
                disabled={true}    
                />
            </View>
        </View>
        <View style={styles.body}>
            <Text style={styles.text}>Set your budget</Text>
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
        <View style={styles.buttons}>
            <Button
            text={budgetValueOne + ' EUR'}
            theme='secondary'
            size='small'
            disabled={true}
            />
            <Button
            text={budgetValueTwo + ' EUR'}
            theme='secondary'
            size='small'
            disabled={true}    
            />
        </View>
        <FooterNavigation nextScreen={'GenderFilter'} />
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
});
