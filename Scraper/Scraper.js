import React, { Component } from 'react';
import { Text, View, FlatList, Item, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Product from '../components/Product';

class Scraper extends Component {

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
    let details = {
      'racunalnistvo': true,
      'TV': true,
      };
      let formBody = [];
      for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      try{
        let response = await fetch ('http://192.168.1.8:3000/', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer token',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formBody,
          json: true,
        });

        let responseJson = await response.json();

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        })
        return responseJson.movies;
      } catch(error) {
        console.error(error); 
      };
   
  }

    render() {
      return (
        <View>
          <Header/>
          <ScrollView>
            <Product products={this.state.dataSource} />
          </ScrollView>
        </View>
        
      );
    }
  }

  export default Scraper;