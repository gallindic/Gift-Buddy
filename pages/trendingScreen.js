import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View, Dimensions } from 'react-native';

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import Product from '../components/Product'
import Global from '../components/Global'

const HEIGHT = Dimensions.get('window').height;

export default class trendingScreen extends Component {
    constructor(props){
        super(props)
        this.state = { 
            isLoading: true,
            dataSource: [] 
        }
    }

    componentDidMount(){
        this.getApiData();
    }

    async getApiData(){
        try{
          let response = await fetch('https://giftbuddyapi.herokuapp.com/scrapeTrending', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'searchTrending': true,
            }),
            json: true
          });

          let responseJson = await response.json();
          this.setState({
              isLoading: false,
              dataSource: responseJson,
          });
        } catch(error) {
          console.error(error); 
        };
    }

    showProducts = () => {
      return this.state.dataSource.map(function(object, i){
        return(
          <Product product={object} index={i} />
        );
      });
    }
    
    render() {
      if(this.state.isLoading){
        return (
            <View style={{flex: 1, justifyContent: 'center', }}>
                <ActivityIndicator size="large" color="#ff0000" />    
            </View>
        );    
      }
      else{
        return (
          <View style={{height: '100%'}}>
            <Header/>
            <ScrollView contentContainerStyle={{ 'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'space-around', paddingBottom: HEIGHT * 0.20, }}>
              { this.showProducts() }
            </ScrollView>
            <FooterNavigation mainText='Change filters' nextScreen='HobbiesFilter' />
          </View>
          
        );
      }
    }
}
