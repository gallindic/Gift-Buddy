import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, View, TouchableOpacity, Text, Linking } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { normalize } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class Product extends Component {

    render() {
        return(
            
            <View key={this.props.index} style={styles.body}>
                <Image host="lazyload-list" source={{ uri: this.props.product.imgUrl }} style={{width: '90%', height: HEIGHT * 0.25, paddingBottom: 20}} resizeMode='contain'/>
                {/*<Text style={styles.description} adjustsFontSizeToFit numberOfLines={4}>{ this.props.product.title }</Text>*/}
                <Text style={styles.price}>{this.props.product.price} €</Text>
                {/*<TouchableOpacity style={styles.button} onPress={ ()=>{ Linking.openURL(this.props.product.link)}}><Text style={styles.buttonText}>Show</Text></TouchableOpacity>*/}
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("ProductDetail", {
                    imageLink: this.props.product.imgUrl, 
                    price: this.props.product.price, 
                    link: this.props.product.url,
                    title: this.props.product.name,
                    id: this.props.product.id})}>
                    <Text style={styles.buttonText}>Show</Text>
                </TouchableOpacity>
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