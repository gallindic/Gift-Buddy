import React, { Component } from 'react';
import { Text, Dimensions, View, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { normalize } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function AmazonLink(props) {
  console.log(props.linkTo, "test")
  return (
    <TouchableOpacity style={{ backgroundColor: '', padding: normalize(10, 'height') }} onPress={() => Linking.openURL(props.linkTo)}>
      <Text style={styles.text}>{props.mainText}</Text>
    </TouchableOpacity>
  )
}

function SpecialScreen(props) {
  return (
    <TouchableOpacity style={{ backgroundColor: '', padding: normalize(10, 'height') }} onPress={() => props.navigation.navigate(props.nextScreen)}>
      <Text style={styles.text}>{props.mainText}</Text>
    </TouchableOpacity>
  )
}

function NextScreen(props) {
  return (
    <TouchableOpacity style={{ padding: normalize(10, 'height')}} onPress={() => {
      if (props.budgetDiff < 0) alert("FROM price must be smaller than TO price")
      else props.navigation.navigate(props.nextScreen)
    }}>
    <Image
      source={require('../sources/next-icon.png')}
      style={{width: normalize(30, 'width'), height: normalize(30, 'height')}}
    />
    </TouchableOpacity>
  )
}

function RenderHelper(props) {
  if (props.linkTo === '' || props.linkTo === undefined) {
    if (props.mainText === '') {
      return <NextScreen navigation={props.navigation} nextScreen={props.nextScreen} budgetDiff={props.budgetDiff} />
    }
    else {
      return <SpecialScreen navigation={props.navigation} nextScreen={props.nextScreen} mainText={props.mainText} />
    }
  }
  else {
    return <AmazonLink linkTo={props.linkTo} mainText={props.mainText} />
  }
}

class FooterNavigation extends Component {

  constructor() {
    super();
    this.state = {
        age: null
    };
  }

  navigate(nextScreen) {
    console.log("this.props.budgetDiff")
    this.props.navigation.navigate(nextScreen)
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
          <RenderHelper linkTo={this.props.linkTo} mainText={this.props.mainText} navigation={this.props.navigation} budgetDiff={this.props.budgetDiff} nextScreen={this.props.nextScreen} />
          {(this.props.linkTo === '' || this.props.linkTo === undefined) ? console.log() : <Text style={{width: normalize(30, 'width'), height: normalize(30, 'height')}}></Text>}
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