import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import Global from '../components/Global'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class HobbiesFilter extends Component {

  constructor() {
    super();
    this.state = {
        selectedItemsSport: Global.Hobbies.selectedItemsSport,
        selectedItemObjectsSport: Global.Hobbies.selectedItemObjectsSport,
        hobbiesSport: Global.hobbiesSport,
        selectedItemsAdventure: Global.Hobbies.selectedItemsAdventure,
        selectedItemObjectsAdventure: Global.Hobbies.selectedItemObjectsAdventure,
        hobbiesAdventure: Global.hobbiesAdventure,
        selectedItemsTechnology: Global.Hobbies.selectedItemsTechnology,
        selectedItemObjectsTechnology: Global.Hobbies.selectedItemObjectsTechnology,
        hobbiesTechnology: Global.hobbiesTechnology,
        selectedItemsRelaxing: Global.Hobbies.selectedItemsRelaxing,
        selectedItemObjectsRelaxing: Global.Hobbies.selectedItemObjectsRelaxing,
        hobbiesRelaxing: Global.hobbiesRelaxing,
        electedItemsShopping: Global.Hobbies.selectedItemsShopping,
        selectedItemObjectsShopping: Global.Hobbies.selectedItemObjectsShopping,
        hobbiesShopping: Global.hobbiesShopping,
    };
  }

  //SPORT
  addToHobbiesSport = (item) => {
    let array = this.state.hobbiesSport.concat(item);
    this.setState({ hobbiesSport: array })
  }
  onSelectedItemsChangeSport = (selectedItemsSport) => {
    this.setState({ selectedItemsSport });
  };
  onSelectedItemObjectsChangeSport = (selectedItemObjectsSport) => {
    this.setState({ selectedItemObjectsSport });
  };

  //ADVENTURE
  addToHobbiesAdventure = (item) => {
    let array = this.state.hobbiesAdventure.concat(item);
    this.setState({ hobbiesAdventure: array })
  }
  
  AdventureSelectedItemsChangeAdventure = (selectedItemsAdventure) => {
    this.setState({ selectedItemsAdventure });
  };
  onSelectedItemObjectsChangeAdventure = (selectedItemObjectsAdventure) => {
    this.setState({ selectedItemObjectsAdventure });
  };

  //TECHNOLOGY
  addToHobbiesTechnology = (item) => {
    let array = this.state.hobbiesTechnology.concat(item);
    this.setState({ hobbiesTechnology: array })
  }
  
  AdventureSelectedItemsChangeTechnology = (selectedItemsTechnology) => {
    this.setState({ selectedItemsTechnology });
  };
  onSelectedItemObjectsChangeTechnology = (selectedItemObjectsTechnology) => {
    this.setState({ selectedItemObjectsTechnology });
  };

  //RELAXING
  addToHobbiesRelaxing = (item) => {
    let array = this.state.hobbiesRelaxing.concat(item);
    this.setState({ hobbiesRelaxing: array })
  }
  onSelectedItemsChangeRelaxing = (selectedItemsRelaxing) => {
    this.setState({ selectedItemsRelaxing });
  };
  onSelectedItemObjectsChangeRelaxing = (selectedItemObjectsRelaxing) => {
    this.setState({ selectedItemObjectsRelaxing });
  };

  //SHOPPING
  addToHobbiesShopping = (item) => {
    let array = this.state.hobbiesShopping.concat(item);
    this.setState({ hobbiesShopping: array })
  }
  onSelectedItemsChangeShopping = (selectedItemsShopping) => {
    this.setState({ selectedItemsShopping });
  };
  onSelectedItemObjectsChangeShopping = (selectedItemObjectsShopping) => {
    this.setState({ selectedItemObjectsShopping });
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
    Global.Hobbies.selectedItemsSport = this.state.selectedItemsSport
    Global.Hobbies.selectedItemObjectsSport = this.state.selectedItemObjectsSport
    Global.Hobbies.selectedItemsAdventure = this.state.selectedItemsAdventure
    Global.Hobbies.selectedItemObjectsAdventure = this.state.selectedItemObjectsAdventure
    Global.Hobbies.selectedItemsTechnology = this.state.selectedItemsTechnology
    Global.Hobbies.selectedItemObjectsTechnology = this.state.selectedItemObjectsTechnology
    Global.Hobbies.selectedItemsRelaxing = this.state.selectedItemsRelaxing
    Global.Hobbies.selectedItemObjectsRelaxing = this.state.selectedItemObjectsRelaxing
    Global.Hobbies.selectedItemsShopping = this.state.selectedItemsShopping
    Global.Hobbies.selectedItemObjectsShopping = this.state.selectedItemObjectsShopping


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
            <ScrollView style={styles.buttons} contentContainerStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
                {/* SPORT */}
                <Text style={{display: 'none'}}>{Global.hobbiesSport = []}</Text>
                {this.state.hobbiesSport.map(hobby => {
                  let found = false;
                  this.state.selectedItemObjectsSport.map(item => {
                    (item.id.includes(hobby)) ? found = true : null
                  })
                  if (found) Global.hobbiesSport.push(hobby)
                })}
                {this.state.selectedItemObjectsSport.map(item => {
                  let category = item.id.substring(0, item.id.length - 2);
                  (!this.state.hobbiesSport.includes(category)) ? this.addToHobbiesSport(category) : null})}
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectSport._toggleSelector()}>
                  <Text style={styles.buttonText}>Sport</Text>
                </TouchableOpacity>
                <SectionedMultiSelect
                ref={SectionedMultiSelect => (this.SectionedMultiSelectSport = SectionedMultiSelect)}
                iconRenderer={this.icon}
                items={sport}
                uniqueKey="id"
                subKey="children"
                renderSelectText={() => ' '}
                selectToggleIconComponent={<Icon name={null} />}
                showDropDowns={true}
                readOnlyHeadings={false}
                selectChildren={true}
                onSelectedItemsChange={(selectedItemsSport) => {
                  this.setState({ selectedItemsSport });}}
                onSelectedItemObjectsChange={ (selectedItemObjectsSport) => {
                  this.setState({ selectedItemObjectsSport });
                }}
                selectedItems={this.state.selectedItemsSport}
                styles={multipleSelect}
                />

                {/* ADVENTURE */}
                <Text style={{display: 'none'}}>{Global.hobbiesAdventure = []}</Text>
                {this.state.hobbiesAdventure.map(hobby => {
                  let found = false;
                  this.state.selectedItemObjectsAdventure.map(item => {
                    (item.id.includes(hobby)) ? found = true : null
                  })
                  if (found) Global.hobbiesAdventure.push(hobby)
                })}
                {this.state.selectedItemObjectsAdventure.map(item => {
                  let category = item.id.substring(0, item.id.length - 2);
                  (!this.state.hobbiesAdventure.includes(category)) ? this.addToHobbiesAdventure(category) : null})}
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectAdventure._toggleSelector()}>
                  <Text style={styles.buttonText}>Adventure</Text>
                </TouchableOpacity>
                <SectionedMultiSelect
                ref={SectionedMultiSelect => (this.SectionedMultiSelectAdventure = SectionedMultiSelect)}
                iconRenderer={this.icon}
                items={adventure}
                uniqueKey="id"
                subKey="children"
                renderSelectText={() => ' '}
                selectToggleIconComponent={<Icon name={null} />}
                showDropDowns={true}
                readOnlyHeadings={false}
                selectChildren={true}
                onSelectedItemsChange={(selectedItemsAdventure) => {
                  this.setState({ selectedItemsAdventure });}}
                onSelectedItemObjectsChange={ (selectedItemObjectsAdventure) => {
                  this.setState({ selectedItemObjectsAdventure });
                }}
                selectedItems={this.state.selectedItemsAdventure}
                styles={multipleSelect}
                />

                {/* TECHNOLOGY */}
                <Text style={{display: 'none'}}>{Global.hobbiesTechnology = []}</Text>
                {this.state.hobbiesTechnology.map(hobby => {
                  let found = false;
                  this.state.selectedItemObjectsTechnology.map(item => {
                    (item.id.includes(hobby)) ? found = true : null
                  })
                  if (found) Global.hobbiesTechnology.push(hobby)
                })}
                {this.state.selectedItemObjectsTechnology.map(item => {
                  let category = item.id.substring(0, item.id.length - 2);
                  (!this.state.hobbiesTechnology.includes(category)) ? this.addToHobbiesTechnology(category) : null})}
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectTechnology._toggleSelector()}>
                  <Text style={styles.buttonText}>Technology</Text>
                </TouchableOpacity>
                <SectionedMultiSelect
                ref={SectionedMultiSelect => (this.SectionedMultiSelectTechnology = SectionedMultiSelect)}
                iconRenderer={this.icon}
                items={technology}
                uniqueKey="id"
                subKey="children"
                renderSelectText={() => ' '}
                selectToggleIconComponent={<Icon name={null} />}
                showDropDowns={true}
                readOnlyHeadings={false}
                selectChildren={true}
                onSelectedItemsChange={(selectedItemsTechnology) => {
                  this.setState({ selectedItemsTechnology });}}
                onSelectedItemObjectsChange={ (selectedItemObjectsTechnology) => {
                  this.setState({ selectedItemObjectsTechnology });
                }}
                selectedItems={this.state.selectedItemsTechnology}
                styles={multipleSelect}
                />

                {/* RELAXING */}
                <Text style={{display: 'none'}}>{Global.hobbiesRelaxing = []}</Text>
                {this.state.hobbiesRelaxing.map(hobby => {
                  let found = false;
                  this.state.selectedItemObjectsRelaxing.map(item => {
                    (item.id.includes(hobby)) ? found = true : null
                  })
                  if (found) Global.hobbiesRelaxing.push(hobby)
                })}
                {this.state.selectedItemObjectsRelaxing.map(item => {
                  let category = item.id.substring(0, item.id.length - 2);
                  (!this.state.hobbiesRelaxing.includes(category)) ? this.addToHobbiesRelaxing(category) : null})}
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectRelaxing._toggleSelector()}>
                  <Text style={styles.buttonText}>Relaxing</Text>
                </TouchableOpacity>
                <SectionedMultiSelect
                ref={SectionedMultiSelect => (this.SectionedMultiSelectRelaxing = SectionedMultiSelect)}
                iconRenderer={this.icon}
                items={relaxing}
                uniqueKey="id"
                subKey="children"
                renderSelectText={() => ' '}
                selectToggleIconComponent={<Icon name={null} />}
                showDropDowns={true}
                readOnlyHeadings={false}
                selectChildren={true}
                onSelectedItemsChange={(selectedItemsRelaxing) => {
                  this.setState({ selectedItemsRelaxing });}}
                onSelectedItemObjectsChange={ (selectedItemObjectsRelaxing) => {
                  this.setState({ selectedItemObjectsRelaxing });
                }}
                selectedItems={this.state.selectedItemsRelaxing}
                styles={multipleSelect}
                />

                {/* SHOPPING */}
                <Text style={{display: 'none'}}>{Global.hobbiesShopping = []}</Text>
                {this.state.hobbiesShopping.map(hobby => {
                  let found = false;
                  this.state.selectedItemObjectsShopping.map(item => {
                    (item.id.includes(hobby)) ? found = true : null
                  })
                  if (found) Global.hobbiesShopping.push(hobby)
                })}
                {this.state.selectedItemObjectsShopping.map(item => {
                  let category = item.id.substring(0, item.id.length - 2);
                  (!this.state.hobbiesShopping.includes(category)) ? this.addToHobbiesShopping(category) : null})}
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectShopping._toggleSelector()}>
                  <Text style={styles.buttonText}>Shopping</Text>
                </TouchableOpacity>
                <SectionedMultiSelect
                ref={SectionedMultiSelect => (this.SectionedMultiSelectShopping = SectionedMultiSelect)}
                iconRenderer={this.icon}
                items={shopping}
                uniqueKey="id"
                subKey="children"
                renderSelectText={() => ' '}
                selectToggleIconComponent={<Icon name={null} />}
                showDropDowns={true}
                readOnlyHeadings={false}
                selectChildren={true}
                onSelectedItemsChange={(selectedItemsShopping) => {
                  this.setState({ selectedItemsShopping });}}
                onSelectedItemObjectsChange={ (selectedItemObjectsShopping) => {
                  this.setState({ selectedItemObjectsShopping });
                }}
                selectedItems={this.state.selectedItemsShopping}
                styles={multipleSelect}
                />
            </ScrollView>
        </ScrollView>
        <FooterNavigation mainText='Done' nextScreen={'SelectedParameters'} />
      </View>
    );
  }
}

//General CSS
const styles = StyleSheet.create({
    body: {
        marginVertical: HEIGHT * 0.05,
        paddingVertical: HEIGHT * 0.02,
        marginHorizontal: WIDTH * 0.02,
    },
    text: {
      fontSize: RFValue(15, 580),
      textAlign: 'center',
      fontWeight: '500'
    },
    buttons: {
        marginBottom: HEIGHT * 0.07,
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
});

//CSS for modals
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
    selectedItem: {
      backgroundColor: '#6c757d'
    },
    selectedItemText: {
      color: 'white'
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
    },
    chipsWrapper: {
      width: WIDTH * 0.9,
      padding: WIDTH * 0.01,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    chipContainer: {
      backgroundColor: '#FF304F'
    },
    chipText: {
      color: 'white'
    },
    chipIcon: {
      color: 'white'
    },
  }

//Dropdowns generate from arrays here
const sport = [
  {
    name: 'Football',
    id: 'Football00',
  },
  {
    name: 'Basketball',
    id: 'Basketball00',
  },
  {
    name: 'Volleyball',
    id: 'Volleyball00',
  },
  {
    name: 'Cycling',
    id: 'Cycling00',
  },
  {
    name: 'Running',
    id: 'Running00',
  },
  {
    name: 'Fishing',
    id: 'Fishing00',
  },
  {
    name: 'Fitness',
    id: 'Fitness00',
  },
  {
    name: 'Tennis',
    id: 'Tennis00',
  },
];

const adventure = [
  {
    name: 'Hiking',
    id: 'Hiking00',
  },
  {
    name: 'Traveling',
    id: 'Traveling00',
  },
  {
    name: 'Camping',
    id: 'Camping00',
  },
];

const technology = [
  {
    name: 'Gaming',
    id: 'Gaming00',
  },
  {
    name: 'Photography',
    id: 'Photography00',
  },
];

const relaxing = [
  {
    name: 'Reading',
    id: 'Reading00',
  },
  {
    name: 'Arts and crafts',
    id: 'Arts and crafts00',
  },
  {
    name: 'Music',
    id: 'Music00',
  },
  {
    name: 'Cooking',
    id: 'Cooking00',
  },
  {
    name: 'Board games',
    id: 'Board games00',
  },
];

const shopping = [
  {
    name: 'Fashion',
    id: 'Fashion00',
  },
  {
    name: 'Personal care',
    id: 'Personal care00',
  },
  {
    name: 'Makeup',
    id: 'Makeup00',
  },
  {
    name: 'Jewellery',
    id: 'Jewellery00',
  },
];