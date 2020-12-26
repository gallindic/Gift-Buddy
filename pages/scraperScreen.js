import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View, Dimensions } from 'react-native';

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import Product from '../components/Product'
import Global from '../components/Global'

const HEIGHT = Dimensions.get('window').height;

export default class scraperScreen extends Component {
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

    checkForParametersInState = (state) => {
      elements = [];

      Object.keys(state).map(i => {
          if(state[i].length > 0){
            state[i].forEach(object => {
              if(typeof(object) === 'object' && object !== null){
                if('children' in object){
                  object.children.forEach(child => {
                    elements.push(child.name);
                  });
                } else {
                  elements.push(object.name);
                }
              }
            });
          }
      });

      return elements;
    }

    async getApiData(){
        try{
          let response = await fetch('http://192.168.0.186:5000/scrape', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              'priceFrom': Global.BudgetFilter.state.budgetValueOne,
              'priceTo': Global.BudgetFilter.state.budgetValueTwo,
              'hobbies': this.checkForParametersInState(Global.Hobbies.state),
              'occasion': this.checkForParametersInState(Global.Occasion.state)[0],
              'ageFrom': Global.AgeFilter.state.ageValueOne,
              'ageTo': Global.AgeFilter.state.ageValueTwo,
              'gender': Global.Gender.state.gender
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
