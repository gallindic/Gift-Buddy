import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, View, TouchableOpacity, Linking } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { normalize } from 'react-native-elements';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class Footer extends Component {

  linkToFacebook = async () => {
    const url = 'https://www.facebook.com/GiftBuddyTeam';
    return Linking.openURL(url);
  }

  linkToInstagram = async () => {
    const url = 'https://www.instagram.com/giftbuddy.si/';
    return Linking.openURL(url);
  }

  linkToWebsite = async () => {
    const url = 'https://giftbuddy.si/';
    return Linking.openURL(url);
  }

  render() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity onPress={this.linkToFacebook}>
          <Image
            source={require('../sources/fb-logo.png')}
            style={{width: normalize(40, 'width'), height: normalize(40, 'height')}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.linkToInstagram}>
          <Image
            source={require('../sources/ig-logo.png')}
            style={{width: normalize(40, 'width'), height: normalize(40, 'height')}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.linkToWebsite}>
          <Image
            source={require('../sources/web-logo.png')}
            style={{width: normalize(40, 'width'), height: normalize(40, 'height')}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: HEIGHT * 0.10,
        position: 'absolute',
        bottom: normalize(20, 'height'),
        paddingHorizontal: '20%',
    },
    text: {
        marginLeft: '3%',
        fontSize: RFValue(14, 580),
        color: 'white',
        fontWeight: '500',
    }
});