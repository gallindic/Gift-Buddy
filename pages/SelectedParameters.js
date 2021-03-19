import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import Global from '../components/Global'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class SelectedParameters extends Component {

  constructor() {
    super();
    console.log(Global.hobbiesGames)
  }

  printArray = (array) => {
    let printed = ''
    array.map(i => printed += i + ', ')
    return printed.substring(0, printed.length - 2)
  }

  render() {
    return (
      <View style={{height: '100%'}}>
        <Header />
        <ScrollView contentContainerStyle={{paddingBottom: HEIGHT * 0.05}} style={styles.body}>
            <Text style={styles.text}>Selected parameters</Text>
            <Text style={styles.textFilter}>Age:</Text>
            <Text style={styles.textFilterSelected}>{(Global.AgeFilter.ageValue === 0) ? 'None' : Global.AgeFilter.ageValue}</Text>
            <Text style={styles.textFilter}>Budget:</Text>
            <Text style={styles.textFilterSelected}>{(Global.BudgetFilter.budgetValueOne === 0 && Global.BudgetFilter.budgetValueTwo === 0) ? 'None' : Global.BudgetFilter.budgetValueOne + ' - ' + Global.BudgetFilter.budgetValueTwo}</Text>
            <Text style={styles.textFilter}>Gender:</Text>
            <Text style={styles.textFilterSelected}>{Global.Gender.gender}</Text>
            <Text style={styles.textFilter}>Occasion:</Text>
            <Text style={(Global.Occasion.selectedItemObjects.length !== 0) ? {display: 'none'} : styles.textFilterSelected}>{(Global.Occasion.selectedItemObjects.length === 0) ? 'None' : null}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={(Global.Occasion.selectedItemObjects.length === 0) ? {display: 'none'} : styles.textCategory}>{(Global.Occasion.selectedItemObjects.length !== 0) ? Global.Occasion.selectedItemObjects[0].id.substring(0, Global.Occasion.selectedItemObjects[0].id.length - 2) : null}: </Text>
              <Text style={(Global.Occasion.selectedItemObjects.length === 0) ? {display: 'none'} : styles.textFilterSelected}>{(Global.Occasion.selectedItemObjects.length !== 0) ? Global.Occasion.selectedItemObjects[0].name : null}</Text>
            </View>
            {/*Global.Hobbies.selectedItemObjectsSport.map(item => <Text>{item.name}</Text>)*/}
            <Text style={styles.textFilter}>Hobbies:</Text>
            <Text style={ (Global.hobbiesSport.length > 0) ? styles.textCategory : {display: 'none'} }>Sport: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesSport)}</Text></Text>
            <Text style={ (Global.hobbiesAdventure.length > 0) ? styles.textCategory : {display: 'none'} }>Adventure: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesAdventure)}</Text></Text>
            <Text style={ (Global.hobbiesTechnology.length > 0) ? styles.textCategory : {display: 'none'} }>Technology: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesTechnology)}</Text></Text>
            <Text style={ (Global.hobbiesRelaxing.length > 0) ? styles.textCategory : {display: 'none'} }>Relaxing: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesRelaxing)}</Text></Text>
            <Text style={ (Global.hobbiesShopping.length > 0) ? styles.textCategory : {display: 'none'} }>Shopping: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesShopping)}</Text></Text>
            <Text style={ (Global.hobbiesSport.length + Global.hobbiesAdventure.length + Global.hobbiesTechnology.length + Global.hobbiesRelaxing.length + Global.hobbiesShopping.length === 0)
            ? styles.textFilterSelected
            : {display: 'none'} }>None</Text>
        </ScrollView>
        <FooterNavigation mainText='Search' nextScreen={'scraperScreen'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    body: {
        marginVertical: HEIGHT * 0.05,
        paddingVertical: HEIGHT * 0.02,
        marginHorizontal: WIDTH * 0.05,
        marginBottom: HEIGHT * 0.12,
    },
    text: {
        fontSize: RFValue(15, 580),
        textAlign: 'center',
        fontWeight: '500'
    },
    textFilter: {
        fontSize: RFValue(15, 580),
        textAlign: 'center',
        fontWeight: '500',
        paddingTop: WIDTH * 0.06
    },
    textFilterSelected: {
        fontSize: RFValue(15, 580),
        textAlign: 'center',
        fontWeight: '500',
        color: '#FF304F',
        paddingTop: WIDTH * 0.01
    },
    textCategory: {
      fontSize: RFValue(15, 580),
      textAlign: 'center',
      fontWeight: '500',
      paddingTop: WIDTH * 0.01
  }
});