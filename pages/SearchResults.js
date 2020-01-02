import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import Global from '../components/Global'
import Product from '../components/Product'
import { ScrollView } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class SearchResult extends Component {

  render() {
    return (
      <View style={{height: '100%'}}>
        <Header />
        <ScrollView contentContainerStyle={{
          paddingBottom: HEIGHT * 0.12, 
          display: 'flex', 
          flexDirection: 'row', 
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          }}>
            <View style={styles.product}><Product /></View>
            <View style={styles.product}><Product /></View>
            <View style={styles.product}><Product /></View>
            <View style={styles.product}><Product /></View>
            <View style={styles.product}><Product /></View>
            <View style={styles.product}><Product /></View>
            <View style={styles.product}><Product /></View>
            <View style={styles.product}><Product /></View>
            <View style={styles.product}><Product /></View>
            <View style={styles.product}><Product /></View>
            <View style={styles.product}><Product /></View>
            <View style={styles.product}><Product /></View>
            <View style={styles.product}><Product /></View>
            <View style={styles.product}><Product /></View>
        </ScrollView>
        <FooterNavigation mainText='Change filters' nextScreen='HobbiesFilter' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  product: {
    marginBottom: HEIGHT * 0.02
  }
});
