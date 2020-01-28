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

  componentDidMount() {
    this.load();
  }

  load = () => this.SectionedMultiSelect._toggleSelector();

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
            <Button text='Choose again' theme='secondary' onPress={() => this.SectionedMultiSelect._toggleSelector()} />
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
        <FooterNavigation mainText='' nextScreen={'HobbiesFilter'} />
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
        id: 'Holidays 1',
      },
      {
        name: 'Christmas',
        id: 'Holidays 2',
      },
      {
        name: 'Valentine\'s day',
        id: 'Holidays 3',
      },
      {
        name: 'Mother\s day',
        id: 'Holidays 4',
      },
      {
        name: 'Easter',
        id: 'Holidays 5',
      },
    ],
  },
  {
    name: 'Birthday',
    id: 10,
    children: [
      {
        name: '18',
        id: 'Birthday 1',
      },
      {
        name: '20',
        id: 'Birthday 2',
      },
      {
        name: '30',
        id: 'Birthday 3',
      },
      {
        name: '40',
        id: 'Birthday 4',
      },
      {
        name: '50',
        id: 'Birthday 5',
      },
    ],
  },
  {
    name: 'Anniversary',
    id: 20,
    children: [
      {
        name: 'Wedding anniversary',
        id: 'Anniversary 1',
      },
      {
        name: 'Relationship anniversary',
        id: 'Anniversary 2',
      },
      {
        name: 'Years of service',
        id: 'Anniversary 3',
      },
      {
        name: 'Other',
        id: 'Anniversary 4',
      },
    ],
  },
  {
    name: 'Wedding',
    id: 30,
    children: [
      {
        name: 'Bachelor party',
        id: 'Wedding 1',
      },
      {
        name: 'Bachelorette party',
        id: 'Wedding 2',
      },
      {
        name: 'Silly gifts',
        id: 'Wedding 3',
      },
      {
        name: 'Other',
        id: 'Wedding 4',
      },
    ],
  },
  {
    name: 'Childbirth',
    id: 40,
    children: [
      {
        name: 'Babyshower',
        id: 'Childbirth 1',
      },
      {
        name: 'Boy',
        id: 'Childbirth 2',
      },
      {
        name: 'Girl',
        id: 'Childbirth 3',
      },
      {
        name: 'Twins',
        id: 'Childbirth 4',
      },
    ],
  },
  {
    name: 'Sacred rites',
    id: 50,
    children: [
      {
        name: 'Baptism',
        id: 'Sacred rites 1',
      },
      {
        name: 'Holy Communion',
        id: 'Sacred rites 2',
      },
      {
        name: 'Confirmation',
        id: 'Sacred rites 3',
      },
    ],
  },
];