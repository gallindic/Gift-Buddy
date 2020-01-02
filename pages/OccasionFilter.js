import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import Global from '../components/Global'
import Button from '../components/Button'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class OccasionFilter extends Component {

  constructor() {
    super();
    this.state = {
        selectedItems: [],
        selectedItemObjects: [],
    };
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  onSelectedItemObjectsChange = (selectedItemObjects) => {
    this.setState({ selectedItemObjects });
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
    Global.Occasion = this;
    return (
      <View style={{height: '100%'}}>
        <Header />
        <View style={styles.body}>
          <Text style={styles.text}>Select the occasion</Text>
            <Button text='Choose' theme='secondary' onPress={() => this.SectionedMultiSelect._toggleSelector()} />
            <SectionedMultiSelect
            ref={SectionedMultiSelect => (this.SectionedMultiSelect = SectionedMultiSelect)}
            headerComponent={
              <View style={{backgroundColor: '#FF304F'}}>
                <Text style={{
                  fontSize: RFValue(20, 580),
                  textAlign: 'center',
                  fontWeight: '700',
                  padding: RFValue(15, 580),
                  color: 'white'
                }}>Select the occasion</Text>
              </View>
            }
            ref={SectionedMultiSelect => (this.SectionedMultiSelect = SectionedMultiSelect)}
            iconRenderer={this.icon}
            items={items}
            uniqueKey="id"
            subKey="children"
            selectText="Choose some things..."
            showDropDowns={true}
            readOnlyHeadings={true}
            selectToggleIconComponent={<Icon name={null} />}
            single={true}
            onSelectedItemsChange={this.onSelectedItemsChange}
            onSelectedItemObjectsChange={this.onSelectedItemObjectsChange}
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
              separator  : {
                backgroundColor: 'green'
              }
            }}
            />
            <View style={styles.currentlySelected}>
              <Text style={styles.text}>Currently selected</Text>
                <Text style={styles.currentlySelectedText}>{
                  (this.state.selectedItemObjects.length === 0) ? 'None' : this.state.selectedItemObjects[0].name
                  }
                </Text>
            </View>
        </View>
        <FooterNavigation mainText='Skip' nextScreen={'HobbiesFilter'} />
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
    },
    currentlySelectedText: {
      fontSize: RFValue(15, 580),
      textAlign: 'center',
      fontWeight: '500',
      color: '#FF304F',
      paddingVertical: RFValue(10, 580)
    },
});

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
  },
  {
    name: 'Anniversary',
    id: 20,
    children: [
      {
        name: 'Wedding anniversary',
        id: 21,
      },
      {
        name: 'Relationship anniversary',
        id: 22,
      },
      {
        name: 'Years of service',
        id: 23,
      },
      {
        name: 'Other',
        id: 24,
      },
    ],
  },
  {
    name: 'Wedding',
    id: 30,
    children: [
      {
        name: 'Bachelor party',
        id: 31,
      },
      {
        name: 'Bachelorette party',
        id: 32,
      },
      {
        name: 'Silly gifts',
        id: 33,
      },
      {
        name: 'Other',
        id: 34,
      },
    ],
  },
  {
    name: 'Childbirth',
    id: 40,
    children: [
      {
        name: 'Babyshower',
        id: 41,
      },
      {
        name: 'Boy',
        id: 42,
      },
      {
        name: 'Girl',
        id: 43,
      },
      {
        name: 'Twins',
        id: 44,
      },
    ],
  },
  {
    name: 'Sacred rites',
    id: 50,
    children: [
      {
        name: 'Baptism',
        id: 51,
      },
      {
        name: 'Holy Communion',
        id: 52,
      },
      {
        name: 'Confirmation',
        id: 53,
      },
    ],
  },
];