import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import Global from '../components/Global'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class OccasionFilter extends Component {

  render() {
    return (
      <View style={{height: '100%'}}>
        <Header />
        <View style={styles.body}>
            <Text style={styles.text}>Selected parameters</Text>
            <Text style={styles.textFilter}>Age:</Text>
            <Text style={styles.textFilterSelected}>{Global.AgeFilter.state.ageValueOne + ' - ' + Global.AgeFilter.state.ageValueTwo}</Text>
            <Text style={styles.textFilter}>Budget:</Text>
            <Text style={styles.textFilterSelected}>{Global.AgeFilter.state.budgetValueOne + ' - ' + Global.AgeFilter.state.budgetValueTwo + ' EUR'}</Text>
            <Text style={styles.textFilter}>Gender:</Text>
            <Text style={styles.textFilterSelected}>{Global.Gender.state.gender}</Text>
            <Text style={styles.textFilter}>Occasion:</Text>
            <Text style={styles.textFilterSelected}>{(Global.Occasion.state.selectedItemObjects.length === 0) ? 'None' : Global.Occasion.state.selectedItemObjects[0].name}</Text>
            <Text style={styles.textFilter}>Hobbies:</Text>
            <Text style={styles.textFilterSelected}></Text>
        </View>
        <FooterNavigation mainText='Search' nextScreen={''} />
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
    }
});