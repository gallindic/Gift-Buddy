import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import Global from '../components/Global'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class OccasionFilter extends Component {

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
            <Text style={styles.textFilterSelected}>{(Global.AgeFilter.state.ageValueOne === 0 && Global.AgeFilter.state.ageValueTwo === 0) ? 'None' : Global.AgeFilter.state.ageValueOne + ' - ' + Global.AgeFilter.state.ageValueTwo}</Text>
            <Text style={styles.textFilter}>Budget:</Text>
            <Text style={styles.textFilterSelected}>{(Global.BudgetFilter.state.budgetValueOne === 0 && Global.BudgetFilter.state.budgetValueTwo === 0) ? 'None' : Global.BudgetFilter.state.budgetValueOne + ' - ' + Global.BudgetFilter.state.budgetValueTwo}</Text>
            <Text style={styles.textFilter}>Gender:</Text>
            <Text style={styles.textFilterSelected}>{Global.Gender.state.gender}</Text>
            <Text style={styles.textFilter}>Occasion:</Text>
            <Text style={(Global.Occasion.state.selectedItemObjects.length !== 0) ? {display: 'none'} : styles.textFilterSelected}>{(Global.Occasion.state.selectedItemObjects.length === 0) ? 'None' : null}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={(Global.Occasion.state.selectedItemObjects.length === 0) ? {display: 'none'} : styles.textCategory}>{(Global.Occasion.state.selectedItemObjects.length !== 0) ? Global.Occasion.state.selectedItemObjects[0].id.substring(0, Global.Occasion.state.selectedItemObjects[0].id.length - 2) : null}: </Text>
              <Text style={(Global.Occasion.state.selectedItemObjects.length === 0) ? {display: 'none'} : styles.textFilterSelected}>{(Global.Occasion.state.selectedItemObjects.length !== 0) ? Global.Occasion.state.selectedItemObjects[0].name : null}</Text>
            </View>
            {/*Global.Hobbies.state.selectedItemObjectsSport.map(item => <Text>{item.name}</Text>)*/}
            <Text style={styles.textFilter}>Hobbies:</Text>
            <Text style={ (Global.hobbiesSport.length > 0) ? styles.textCategory : {display: 'none'} }>Sport: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesSport)}</Text></Text>
            <Text style={ (Global.hobbiesTechnology.length > 0) ? styles.textCategory : {display: 'none'} }>Technology: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesTechnology)}</Text></Text>
            <Text style={ (Global.hobbiesCooking.length > 0) ? styles.textCategory : {display: 'none'} }>Cooking: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesCooking)}</Text></Text>
            <Text style={ (Global.hobbiesArts.length > 0) ? styles.textCategory : {display: 'none'} }>Arts: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesArts)}</Text></Text>
            <Text style={ (Global.hobbiesMusic.length > 0) ? styles.textCategory : {display: 'none'} }>Music: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesMusic)}</Text></Text>
            <Text style={ (Global.hobbiesDancing.length > 0) ? styles.textCategory : {display: 'none'} }>Dancing: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesDancing)}</Text></Text>
            <Text style={ (Global.hobbiesFashion.length > 0) ? styles.textCategory : {display: 'none'} }>Fashion: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesFashion)}</Text></Text>
            <Text style={ (Global.hobbiesCars.length > 0) ? styles.textCategory : {display: 'none'} }>Cars: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesCars)}</Text></Text>
            <Text style={ (Global.hobbiesGames.length > 0) ? styles.textCategory : {display: 'none'} }>Games: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesGames)}</Text></Text>
            <Text style={ (Global.hobbiesReading.length > 0) ? styles.textCategory : {display: 'none'} }>Reading: <Text style={styles.textFilterSelected}>{this.printArray(Global.hobbiesReading)}</Text></Text>
            <Text style={ (Global.hobbiesSport.length + Global.hobbiesTechnology.length + Global.hobbiesCooking.length + Global.hobbiesArts.length + Global.hobbiesMusic.length + 
            Global.hobbiesDancing.length + Global.hobbiesFashion.length + Global.hobbiesCars.length + Global.hobbiesGames.length + Global.hobbiesReading.length === 0)
            ? styles.textFilterSelected
            : {display: 'none'} }>None</Text>
        </ScrollView>
        <FooterNavigation mainText='Search' nextScreen={'SearchResults'} />
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