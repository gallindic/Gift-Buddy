import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, View, TouchableOpacity, Text, Linking } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { normalize } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


class Product extends Component {
    render() {
        //console.log(this.props.product.imageLink);
        return(
            
            <View key={this.props.index} style={styles.body}>
                
                <Image source={{ uri: this.props.product.imageLink }} style={{width: '90%', height: HEIGHT * 0.25, paddingBottom: 20}} resizeMode='contain'/>
                {/*<Text style={styles.description} adjustsFontSizeToFit numberOfLines={4}>{ this.props.product.title }</Text>*/}
                <Text style={styles.price}>{this.props.product.price} €</Text>
                {/*<TouchableOpacity style={styles.button} onPress={ ()=>{ Linking.openURL(this.props.product.link)}}><Text style={styles.buttonText}>Show</Text></TouchableOpacity>*/}
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("ProductDetail", {
                    imageLink: this.props.product.imageLink, 
                    price: this.props.product.price, 
                    link: this.props.product.link,
                    title: this.props.product.name,
                    rating: 3.5,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae. Nibh cras pulvinar mattis nunc sed blandit. Sed elementum tempus egestas sed sed. Et tortor consequat id porta nibh venenatis. Tempor nec feugiat nisl pretium fusce id velit ut. Rhoncus urna neque viverra justo nec ultrices dui sapien. Nibh nisl condimentum id venenatis a. Eu lobortis elementum nibh tellus molestie nunc non blandit. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Netus et malesuada fames ac. Lacus vel facilisis volutpat est. Vitae tortor condimentum lacinia quis vel eros. Libero nunc consequat interdum varius sit. Facilisis volutpat est velit egestas dui. Sed velit dignissim sodales ut eu. Tellus molestie nunc non blandit massa enim nec dui nunc. Sed augue lacus viverra vitae congue eu consequat ac. Enim nunc faucibus a pellentesque sit amet porttitor eget. Erat velit scelerisque in dictum non.",})}>
                    <Text style={styles.buttonText}>Show</Text></TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(Product)

const styles = StyleSheet.create({
    body: {
        marginTop: HEIGHT * 0.02,
        padding: WIDTH * 0.02,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: WIDTH * 0.45,
        //borderColor: '#6E6263',
        //borderWidth: 1.5,
        backgroundColor: '#fff',
        borderRadius: normalize(15),
        shadowColor: '#96aab4',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,  
        elevation: 5
    },
    description: {
        textAlign: 'center',
        fontSize: RFValue(12, 580),
    },
    price: {
        fontSize: RFValue(13, 580),
        fontWeight: '600',
        paddingVertical: HEIGHT * 0.03,
    },
    button: {
        alignItems: 'center',
        paddingVertical: WIDTH * 0.01,
        paddingHorizontal: WIDTH * 0.03,
        backgroundColor: 'white',
        borderColor: '#6E6263',
        backgroundColor: '#FF304F',
        borderRadius: 8,
        borderWidth: 1.5,
      },
    buttonText: {
        color: 'white',
        fontSize: RFValue(13, 580),
        fontWeight: '500',
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowRadius: 1,
        shadowOpacity: 0.2,
    },
    buttonMatch: {
        alignItems: 'center',
        paddingHorizontal: WIDTH * 0.03,
        marginTop: 0,
        backgroundColor: 'white',
        borderColor: '#6E6263',
        backgroundColor: '#3BEB8D',
        borderRadius: 20,
        borderWidth: 1.5,
        marginTop: normalize(-18)
    },
});