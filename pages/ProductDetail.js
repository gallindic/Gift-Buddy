import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ActivityIndicator } from 'react-native';
import { normalize, Rating } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import { ScrollView } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class ProductDetail extends Component {

  constructor(props) {
        super(props);
        this.state = {
          description: '',
          isLoading: true,
        }
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails(){
    let getDetails = async () => {
      const { navigation } = this.props;
      let url = navigation.getParam("link", "error");
      console.log(url);

      let data = await fetch("http://192.168.0.140:5000/getProductData", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'url': url
        }),
        json: true
      });

      return data.json();
    }

    getDetails().then(data => {
      console.log(data);
      this.setState({
        isLoading: false,
        productData: data
      })
    });

  }

  render() {
    const { navigation } = this.props;
    const imageLink = navigation.getParam("imageLink", "error")
    const price = navigation.getParam("price", 0)
    const link = navigation.getParam("link", "error")
    const title = navigation.getParam("title", "Unavailable title")
    const description = navigation.getParam("description", "Unavailable description")
    const rating = navigation.getParam("rating", 0)


    if(this.state.isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#ff0000" />    
        </View>
      );  
    } else {
      return (
        <View style={{height: '100%'}}>
          <ScrollView  contentContainerStyle={{
            paddingBottom: HEIGHT * 0.12, 
          }}>
            <Header />
            <Image source={{ uri: imageLink }} style={styles.image} resizeMode='contain'/>
            <View style={{paddingHorizontal: normalize(10)}}>
              <Text style={styles.text}>{title}</Text>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text}>{price} €</Text>
                <Rating imageSize={RFValue(18, 580)} readonly startingValue={this.state.productData.rating} style={{alignSelf: 'center'}} />
              </View>
              <Text style={styles.aboutText}>About this item:</Text>
            </View>
          <View >
            <Text style={styles.descriptionText}>{this.state.productData.description}</Text>
          </View>
          </ScrollView>
          <FooterNavigation mainText='Show on Amazon' linkTo={link} />
        </View>
      );
    }

    
  }
}

const styles = StyleSheet.create({
  image: {
    width: WIDTH,
    height: HEIGHT * 0.35,
    marginBottom: normalize(20),
  },
  text: {
    fontSize: RFValue(18, 580),
    fontWeight: '600',
    paddingVertical: normalize(4),
    alignSelf: 'flex-start'
  },
  aboutText: {
    fontSize: RFValue(12, 580),
    fontWeight: '600',
    paddingVertical: normalize(2),
    paddingTop: normalize(5),
    alignSelf: 'flex-start',
  },
  descriptionText: {
    fontSize: RFValue(12, 580),
    fontWeight: '400',
    paddingVertical: normalize(2),
    paddingHorizontal: normalize(10),
    alignSelf: 'flex-start',
  },
});