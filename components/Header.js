import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { withNavigation } from 'react-navigation';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class Header extends Component {
  render() {
    return (
      <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home')}>
        <View style={styles.header}>
        <Image
          source={require('../sources/logo.png')}
        />
        <Text style={styles.text}>GIFT BUDDY</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    header: {
      height: HEIGHT * 0.12,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    text: {
      marginLeft: '3%',
      fontSize: RFValue(20, 580),
      color: 'black',
      fontWeight: '700',
    }
});

export default withNavigation(Header)