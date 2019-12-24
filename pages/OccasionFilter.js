import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const loop = [1]

const items = [
    {
      name: 'Holidays',
      id: 0,
      children: [
        {
          name: 'Halloween',
          id: 1,
        },
        {
          name: 'Christmas',
          id: 2,
        },
        {
          name: 'Valentine\'s day',
          id: 3,
        },
        {
          name: 'Mother\s day',
          id: 4,
        },
        {
          name: 'Easter',
          id: 5,
        },
      ],
    },
    {
      name: 'Birthday',
      id: 10,
      children: [
        {
          name: '18',
          id: 11,
        },
        {
          name: '20',
          id: 12,
        },
        {
          name: '30',
          id: 13,
        },
        {
          name: '50',
          id: 14,
        },
      ],
    }
  ];

export default class OccasionFilter extends Component {

  constructor() {
    super();
    this.state = {
        selectedItems: [],
        single: true,
        item: 'None'
    };
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  icon = ({ name, size = 18, style }) => {
    let iconName;
    switch (name) {
      case 'search':
        iconName = 'magnifier'
        break
      case 'keyboard-arrow-up':
        iconName = 'arrow-up'
        break
      case 'keyboard-arrow-down':
        iconName = 'arrow-down'
        break
      case 'close':
        iconName = 'close'
        break
      case 'check':
        iconName = null
        break
      case 'cancel':
        iconName = 'close'
        break
      default:
        iconName = null
        break
    }
    return <Icon style={style} size={size} name={iconName}/>
  }

  render() {
    return (
      <View style={{height: '100%'}}>
        <Header />
        <View style={styles.body}>
            <Text style={styles.text}>Select the occasion</Text>
            <SectionedMultiSelect
            iconRenderer={this.icon}
            items={items}
            uniqueKey="id"
            subKey="children"
            selectText="Choose some things..."
            showDropDowns={true}
            readOnlyHeadings={true}
            single={true}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            styles={{
              itemText: {
                fontSize: RFValue(20, 580),
                paddingHorizontal: RFValue(5, 580),
              },
              subItemText: {
                fontSize: RFValue(17, 580),
                paddingHorizontal: RFValue(30, 580),
              },
               button: {
                backgroundColor: '#FF304F',
              },
              confirmText: {
                padding: RFValue(15, 580),
              },
              searchTextInput: {
                color: 'black'
              },
              selectedSubItem: {
                backgroundColor: '#6c757d'
              },
              selectedSubItemText: {
                color: 'white'
              },
              itemIconStyle : {
                backgroundColor: 'brown',
                padding: '50%'
              },
            }}
            />
            <View style={styles.currentlySelected}>
              <Text style={styles.text}>Currently selected</Text>
              <TouchableOpacity style={styles.button} disabled={true}>
                <Text style={styles.buttonText}>{
                  loop.map(item => {
                    if (this.state.selectedItems.length === 0) return 'None'
                  })
                }
                {items.map(item => item.children.map(subitem => {
                  if (subitem.id == this.state.selectedItems) return subitem.name
                }))}
                </Text>
              </TouchableOpacity>
            </View>
        </View>
        <FooterNavigation nextScreen={'HobbiesFilter'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    body: {
        marginVertical: HEIGHT * 0.05,
        paddingVertical: HEIGHT * 0.02,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: RFValue(15, 580),
        textAlign: 'center',
        fontWeight: '500'
    },
    currentlySelected: {
      margin: RFValue(30, 580)
    },
    currentlySelectedText: {
      fontSize: RFValue(15, 580),
      textAlign: 'center',
      fontWeight: '500',
      paddingVertical: RFValue(10, 580)
    },
    button: {
      alignItems: 'center',
      padding: '3%',
      marginHorizontal: '10%',
      marginVertical: '5%',
      backgroundColor: 'white',
      borderColor: '#6E6263',
      borderRadius: 8,
      borderWidth: 1.5,
      paddingHorizontal: '10%'
    },
    buttonText: {
      color: '#6E6263',
      fontSize: RFValue(15, 580),
      fontWeight: '500',
      shadowColor: '#000000',
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowRadius: 1,
      shadowOpacity: 0.2
    },
});