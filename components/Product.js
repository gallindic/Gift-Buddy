import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, View, TouchableOpacity, Text } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { normalize } from 'react-native-elements';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class Product extends Component {

  render() {
    return (
      <View style={styles.body}>
        <Image
              source={require('../sources/ps4.png')}
              style={{width: '90%', height: HEIGHT * 0.25}}
            />
            <Text style={styles.description} adjustsFontSizeToFit numberOfLines={3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </Text>
            <Text style={styles.price}>298 EUR</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Show more</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    body: {
        padding: WIDTH * 0.02,
        display: 'flex',
        alignItems: 'center',
        width: WIDTH * 0.45,
        borderWidth: 1.5,
    },
    description: {
        textAlign: 'center',
        fontSize: RFValue(12, 580),
    },
    price: {
        fontSize: RFValue(13, 580),
        fontWeight: '600',
        paddingVertical: HEIGHT * 0.01
    },
    button: {
        alignItems: 'center',
        paddingVertical: WIDTH * 0.01,
        paddingHorizontal: WIDTH * 0.03,
        backgroundColor: 'white',
        borderColor: '#6E6263',
        backgroundColor: '#FF304F',
        borderRadius: 8,
        borderWidth: 1.5,
      },
      buttonText: {
        color: 'white',
        fontSize: RFValue(13, 580),
        fontWeight: '500',
        shadowColor: '#000000',
        shadowOffset: {
          width: 1,
          height: 1
        },
        shadowRadius: 1,
        shadowOpacity: 0.2,
      },
});