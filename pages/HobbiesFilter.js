import React, { Component, ReactDOM } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import { ScrollView } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const loop = [1]

export default class OccasionFilter extends Component {

  constructor() {
    super();
    this.state = {
        selectedItemsSport: [],
        single: true,
    };
  }

  onSelectedItemsChangeSport = (selectedItemsSport) => {
    this.setState({ selectedItemsSport });
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
        <ScrollView contentContainerStyle={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
        }}
        style={styles.body}
        >
            <Text style={styles.text}>Select hobbies</Text>
            <SectionedMultiSelect
            ref={SectionedMultiSelect => (this.SectionedMultiSelectSport = SectionedMultiSelect)}
            iconRenderer={this.icon}
            items={sport}
            uniqueKey="id"
            subKey="children"
            renderSelectText={() => ' '}
            selectToggleIconComponent={<Icon name={null} />}
            customChipsRenderer={() => null}
            showDropDowns={true}
            readOnlyHeadings={true}
            onSelectedItemsChange={this.onSelectedItemsChangeSport}
            selectedItems={this.state.selectedItemsSport}
            styles={multipleSelect}
            />
            <SectionedMultiSelect
            ref={SectionedMultiSelect => (this.SectionedMultiSelectTechnology = SectionedMultiSelect)}
            iconRenderer={this.icon}
            items={technology}
            uniqueKey="id"
            subKey="children"
            renderSelectText={() => ' '}
            selectToggleIconComponent={<Icon name={null} />}
            customChipsRenderer={() => null}
            showDropDowns={true}
            readOnlyHeadings={true}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            styles={multipleSelect}
            />
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectSport._toggleSelector()} >
                    <Text style={styles.buttonText}>Sports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectTechnology._toggleSelector()} >
                    <Text style={styles.buttonText}>Technology</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Cooking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Arts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Music</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Dancing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Fashion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Cars</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Games</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Reading</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }} style={styles.tags}> 
                {sport.map(item => item.children.map(subitem => {
                  if (this.state.selectedItemsSport.includes(subitem.id))
                    return (
                        <View style={styles.tag}>
                            <Text style={{color: 'white'}}>{subitem.name}</Text>
                            <TouchableOpacity onPress={() => {
                                let index = this.state.selectedItemsSport.indexOf(subitem.id);
                                if (index > -1) {
                                    this.state.selectedItemsSport.splice(index, 1);
                                    return null;
                                }
                            }}>
                                <Icon style={{paddingLeft: WIDTH * 0.02, color: 'white'}} size={RFValue(15, 580)} name="close"/>
                            </TouchableOpacity>
                        </View>
                    )
                }))}
            </ScrollView>
        </ScrollView>
        <FooterNavigation nextScreen={'GenderFilter'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    body: {
        marginVertical: HEIGHT * 0.05,
        paddingVertical: HEIGHT * 0.02,
        marginHorizontal: WIDTH * 0.05,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button: {
        alignItems: 'center',
        paddingVertical: WIDTH * 0.02,
        marginHorizontal: WIDTH * 0.02,
        marginVertical: WIDTH * 0.03,
        paddingHorizontal: WIDTH * 0.02,
        backgroundColor: 'white',
        borderColor: '#6E6263',
        borderRadius: 400,
        borderWidth: 1.5,
        width: WIDTH * 0.38
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
        shadowOpacity: 0.2,
      },
      tags: {
        width: '100%',
        backgroundColor: 'lightblue',
        marginVertical: HEIGHT * 0.05,
        padding: HEIGHT * 0.02,
        marginHorizontal: WIDTH * 0.05,
      },
      tag: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF304F',
        paddingHorizontal: WIDTH * 0.02,
        paddingVertical: WIDTH * 0.01,
        margin: WIDTH * 0.01,
        borderColor: '#6E6263',
        borderRadius: 40,
        borderWidth: 1.5,
      },
});

const multipleSelect = 
  {
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
    selectToggle: {
      backgroundColor: 'red',
      height: 0,
      width: 0,
    }
  }

const sport = [
    {
      name: 'Football',
      id: 0,
      children: [
        {
          name: 'Hoodies',
          id: 1,
        },
        {
          name: 'Shorts',
          id: 2,
        },
        {
          name: 'Shoes',
          id: 3,
        },
        {
          name: 'Accessories',
          id: 4,
        },
      ],
    },
    {
      name: 'Basketball',
      id: 10,
      children: [
        {
          name: 'Hoodies',
          id: 11,
        },
        {
          name: 'Shorts',
          id: 12,
        },
        {
          name: 'Shoes',
          id: 13,
        },
        {
          name: 'Accessories',
          id: 14,
        },
      ],
    },
    {
    name: 'Volleyball',
      id: 20,
      children: [
        {
          name: 'Accessories',
          id: 21,
        }
      ]
    },
    {
    name: 'Cycling',
        id: 30,
        children: [
        {
            name: 'Bikes',
            id: 31,
        }
        ]
    },
    {
    name: 'Running',
        id: 40,
        children: [
        {
            name: 'Shoes',
            id: 41,
        }
        ]
    }
  ];

  const technology = [
    {
      name: 'Gaming',
      id: 0,
      children: [
        {
          name: 'Computers',
          id: 1,
        },
        {
          name: 'Games',
          id: 2,
        },
        {
          name: 'Accessories',
          id: 4,
        },
      ],
    },
    {
      name: 'Audio',
      id: 10,
      children: [
        {
          name: 'Microphones',
          id: 11,
        },
        {
          name: 'Headphones',
          id: 12,
        },
        {
          name: 'Accessories',
          id: 14,
        },
      ],
    },
    {
    name: 'Video',
      id: 20,
      children: [
        {
          name: 'Accessories',
          id: 21,
        }
      ]
    },
  ];