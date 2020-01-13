import React, { Component } from 'react';
import { Text, Dimensions, View, TouchableOpacity, Linking, StyleSheet, Image } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { normalize } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class FooterNavigation extends Component {

  constructor() {
    super();
    this.state = {
        age: null
    };
  }

  render() {
    return (
      <View style={styles.footer}>
          <TouchableOpacity style={{ padding: normalize(10, 'height')}} onPress={() => this.props.navigation.goBack(null)}>
          <Image
            source={require('../sources/back-icon.png')}
            style={{width: normalize(30, 'width'), height: normalize(30, 'height')}}
          />
          </TouchableOpacity>
          {(this.props.mainText === '') ? (
            <TouchableOpacity style={{ padding: normalize(10, 'height')}} onPress={() => this.props.navigation.navigate(this.props.nextScreen)}>
            <Image
              source={require('../sources/next-icon.png')}
              style={{width: normalize(30, 'width'), height: normalize(30, 'height')}}
            />
            </TouchableOpacity>)
            : (
              <TouchableOpacity style={{ backgroundColor: '', padding: normalize(10, 'height') }} onPress={() => this.props.navigation.navigate(this.props.nextScreen)}>
                <Text style={styles.text}>{this.props.mainText}</Text>
              </TouchableOpacity>
            )
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#FF304F',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: HEIGHT * 0.10,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: '7%',
    },
    text: {
        fontSize: RFValue(18, 580),
        color: 'white',
        fontWeight: '600',
    }
});

export default withNavigation(FooterNavigation)