import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View, Dimensions } from 'react-native';

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import Product from '../components/Product'

const HEIGHT = Dimensions.get('window').height;

export default class scraperScreen extends Component {
    constructor(props){
        super(props)
        this.state = { 
            isLoading: true,
            dataSource: [] }
    }

    componentDidMount(){
        this.getApiData();
    }

    async getApiData(){
        let parameters = {
            'racunalnistvo': true,
            'TV': true,
        };
        let parametersBody = [];

        for (let parameter in parameters) {
            let encodedKey = encodeURIComponent(parameter);
            let encodedValue = encodeURIComponent(parameters[parameter]);
            parametersBody.push(encodedKey + "=" + encodedValue);
        }

        parametersBody = parametersBody.join("&");

        try{
            let response = await fetch ('http://172.20.10.5:3000/scrape'
            , {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer token',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: parametersBody,
                json: true,
            });

            let responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson,
            })
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
            <ScrollView contentContainerStyle={{ 'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'space-around', paddingBottom: HEIGHT * 0.12, }}>
              { this.showProducts() }
            </ScrollView>
            <FooterNavigation mainText='Change filters' nextScreen='HobbiesFilter' />
          </View>
          
        );
      }
    }
}
