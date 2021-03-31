import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View, Dimensions, Text, SafeAreaView, FlatList, StatusBar } from 'react-native';

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import Product from '../components/Product'
import Global from '../components/Global'
import { colors } from 'react-native-elements';

const HEIGHT = Dimensions.get('window').height;

export default class scraperScreen extends Component {
    constructor(props){
        super(props)
        this.state = { 
            isLoading: true,
            dataSource: [] 
        }
    }

    renderItem = ({ item }) => (
      <Product product={item} index={item.id} key={item.id} />
    );

    componentDidMount(){
        this.getApiData();
    }

    checkForParametersInState = (state) => {
      elements = [];

      Object.keys(state).map(hobby => {
        if(state[hobby] == "undefined" || state[hobby] == null){
          return;
        }

        state[hobby].forEach(object => {
          if(typeof(object) === 'object' && object !== null){
            elements.push(object.name);
          } else {
            elements.push(object.replace("00", ""));
          }
        });
      });

      return elements;
    }

    getApiData(){
      //console.log(this.checkForParametersInState(Global.Occasion)[1]);

      let testData = async () => {
        console.log("scraping");

        let data = await fetch("http://demo.api.giftbuddy.si/getData", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'priceFrom': Global.BudgetFilter.budgetValueOne,
            'priceTo': Global.BudgetFilter.budgetValueTwo == 0 ? 999999 : Global.BudgetFilter.budgetValueTwo,
            'hobbies': this.checkForParametersInState(Global.Hobbies),
            'occasion': this.checkForParametersInState(Global.Occasion)[1],
            'age': Global.AgeFilter.ageValue,
            'gender': Global.Gender.gender
          }),
          json: true
        });

        return data.json();
      }

      testData().then(data => {
        //console.log(data.length);
        this.setState({
          isLoading: false,
          dataSource: data
        })
      });
    }

    showProducts = () => {
      return this.state.dataSource.map(function(object, i){
        return(
          <Product product={object} index={i} key={i} />
        );
      });
    }
    
    render() {
      if(this.state.isLoading){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{marginBottom: 10}}>Just a moment.</Text>
                <ActivityIndicator size="large" color="#ff0000" />    
            </View>
        );    
      }
      else{
        return (
          <View style={{height: '100%'}}>
            <Header/>
              <FlatList
                data={this.state.dataSource}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2}
                contentContainerStyle={{paddingBottom: HEIGHT * 0.20}}
                columnWrapperStyle={{justifyContent:'space-evenly'}}
                scrollIndicatorInsets={{ right: 1 }}
              />
            <FooterNavigation mainText='Change filters' nextScreen='HobbiesFilter' />
          </View>
        );
      }
    }
}
