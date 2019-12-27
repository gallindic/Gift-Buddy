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

export default class OccasionFilter extends Component {

  constructor() {
    super();
    this.state = {
        selectedItemsSport: [],
        selectedItemObjectsSport: [],
        selectedItemsTechnology: [],
        selectedItemObjectsTechnology: [],
        selectedItemsCooking: [],
        selectedItemObjectsCooking: [],
        selectedItemsArts: [],
        selectedItemObjectsArts: [],
        selectedItemsMusic: [],
        selectedItemObjectsMusic: [],
        selectedItemsDancing: [],
        selectedItemObjectsDancing: [],
        selectedItemsFashion: [],
        selectedItemObjectsFashion: [],
        selectedItemsCars: [],
        selectedItemObjectsCars: [],
        selectedItemsGames: [],
        selectedItemObjectsGames: [],
        selectedItemsReading: [],
        selectedItemObjectsReading: [],
        hobbiesSport: [],
        hobbiesTechnology: [],
        hobbiesCooking: [],
        hobbiesArts: [],
        hobbiesMusic: [],
        hobbiesDancing: [],
        hobbiesFashion: [],
        hobbiesCars: [],
        hobbiesGames: [],
        hobbiesReading: [],
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

  //TECHNOLOGY
  addToHobbiesTechnology = (item) => {
    let array = this.state.hobbiesTechnology.concat(item);
    this.setState({ hobbiesTechnology: array })
  }
  onSelectedItemsChangeTechnology = (selectedItemsTechnology) => {
    this.setState({ selectedItemsTechnology });
  };
  onSelectedItemObjectsChangeTechnology = (selectedItemObjectsTechnology) => {
    this.setState({ selectedItemObjectsTechnology });
  };

  //COOKING
  addToHobbiesCooking = (item) => {
    let array = this.state.hobbiesCooking.concat(item);
    this.setState({ hobbiesCooking: array })
  }
  onSelectedItemsChangeCooking = (selectedItemsCooking) => {
    this.setState({ selectedItemsCooking });
  };
  onSelectedItemObjectsChangeCooking = (selectedItemObjectsCooking) => {
    this.setState({ selectedItemObjectsCooking });
  };

  //ARTS
  addToHobbiesArts = (item) => {
    let array = this.state.hobbiesArts.concat(item);
    this.setState({ hobbiesArts: array })
  }
  onSelectedItemsChangeArts = (selectedItemsArts) => {
    this.setState({ selectedItemsArts });
  };
  onSelectedItemObjectsChangeArts = (selectedItemObjectsArts) => {
    this.setState({ selectedItemObjectsArts });
  };

   //MUSIC
   addToHobbiesMusic = (item) => {
    let array = this.state.hobbiesMusic.concat(item);
    this.setState({ hobbiesMusic: array })
  }
   onSelectedItemsChangeMusic = (selectedItemsMusic) => {
    this.setState({ selectedItemsMusic });
  };
  onSelectedItemObjectsChangeMusic = (selectedItemObjectsMusic) => {
    this.setState({ selectedItemObjectsMusic });
  };

  //DANCING
  addToHobbiesDancing = (item) => {
    let array = this.state.hobbiesDancing.concat(item);
    this.setState({ hobbiesDancing: array })
  }
  onSelectedItemsChangeDancing = (selectedItemsDancing) => {
    this.setState({ selectedItemsDancing });
  };
  onSelectedItemObjectsChangeDancing = (selectedItemObjectsDancing) => {
    this.setState({ selectedItemObjectsDancing });
  };

  //FASHION
  addToHobbiesFashion = (item) => {
    let array = this.state.hobbiesFashion.concat(item);
    this.setState({ hobbiesFashion: array })
  }
  onSelectedItemsChangeFashion = (selectedItemsFashion) => {
    this.setState({ selectedItemsFashion });
  };
  onSelectedItemObjectsChangeFashion = (selectedItemObjectsFashion) => {
    this.setState({ selectedItemObjectsFashion });
  };

  //CARS
  addToHobbiesCars = (item) => {
    let array = this.state.hobbiesCars.concat(item);
    this.setState({ hobbiesCars: array })
  }
  onSelectedItemsChangeCars = (selectedItemsCars) => {
    this.setState({ selectedItemsCars });
  };
  onSelectedItemObjectsChangeCars = (selectedItemObjectsCars) => {
    this.setState({ selectedItemObjectsCars });
  };

  //GAMES
  addToHobbiesGames = (item) => {
    let array = this.state.hobbiesGames.concat(item);
    this.setState({ hobbiesGames: array })
  }
  onSelectedItemsChangeGames = (selectedItemsGames) => {
    this.setState({ selectedItemsGames });
  };
  onSelectedItemObjectsChangeGames = (selectedItemObjectsGames) => {
    this.setState({ selectedItemObjectsGames });
  };

  //READING
  addToHobbiesReading = (item) => {
    let array = this.state.hobbiesReading.concat(item);
    this.setState({ hobbiesReading: array })
  }
  onSelectedItemsChangeReading = (selectedItemsReading) => {
    this.setState({ selectedItemsReading });
  };
  onSelectedItemObjectsChangeReading = (selectedItemObjectsReading) => {
    this.setState({ selectedItemObjectsReading });
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
            <ScrollView style={styles.buttons} contentContainerStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}>
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
                onSelectedItemsChange={this.onSelectedItemsChangeSport}
                onSelectedItemObjectsChange={this.onSelectedItemObjectsChangeSport}
                selectedItems={this.state.selectedItemsSport}
                styles={multipleSelect}
                />
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
                readOnlyHeadings={true}
                onSelectedItemsChange={this.onSelectedItemsChangeTechnology}
                onSelectedItemObjectsChange={this.onSelectedItemObjectsChangeTechnology}
                selectedItems={this.state.selectedItemsTechnology}
                styles={multipleSelect}
                />
                <Text style={{display: 'none'}}>{Global.hobbiesCooking = []}</Text>
                {this.state.hobbiesCooking.map(hobby => {
                  let found = false;
                  this.state.selectedItemObjectsCooking.map(item => {
                    (item.id.includes(hobby)) ? found = true : null
                  })
                  if (found) Global.hobbiesCooking.push(hobby)
                })}
                {this.state.selectedItemObjectsCooking.map(item => {
                  let category = item.id.substring(0, item.id.length - 2);
                  (!this.state.hobbiesCooking.includes(category)) ? this.addToHobbiesCooking(category) : null})}
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectCooking._toggleSelector()}>
                    <Text style={styles.buttonText}>Cooking</Text>
                </TouchableOpacity>
                <SectionedMultiSelect
                ref={SectionedMultiSelect => (this.SectionedMultiSelectCooking = SectionedMultiSelect)}
                iconRenderer={this.icon}
                items={cooking}
                uniqueKey="id"
                subKey="children"
                renderSelectText={() => ' '}
                selectToggleIconComponent={<Icon name={null} />}
                showDropDowns={true}
                readOnlyHeadings={true}
                onSelectedItemsChange={this.onSelectedItemsChangeCooking}
                onSelectedItemObjectsChange={this.onSelectedItemObjectsChangeCooking}
                selectedItems={this.state.selectedItemsCooking}
                styles={multipleSelect}
                />
                <Text style={{display: 'none'}}>{Global.hobbiesArts = []}</Text>
                {this.state.hobbiesArts.map(hobby => {
                  let found = false;
                  this.state.selectedItemObjectsArts.map(item => {
                    (item.id.includes(hobby)) ? found = true : null
                  })
                  if (found) Global.hobbiesArts.push(hobby)
                })}
                {this.state.selectedItemObjectsArts.map(item => {
                  let category = item.id.substring(0, item.id.length - 2);
                  (!this.state.hobbiesArts.includes(category)) ? this.addToHobbiesArts(category) : null})}
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectArts._toggleSelector()}>
                    <Text style={styles.buttonText}>Arts</Text>
                </TouchableOpacity>
                <SectionedMultiSelect
                ref={SectionedMultiSelect => (this.SectionedMultiSelectArts = SectionedMultiSelect)}
                iconRenderer={this.icon}
                items={arts}
                uniqueKey="id"
                subKey="children"
                renderSelectText={() => ' '}
                selectToggleIconComponent={<Icon name={null} />}
                showDropDowns={true}
                readOnlyHeadings={true}
                onSelectedItemsChange={this.onSelectedItemsChangeArts}
                onSelectedItemObjectsChange={this.onSelectedItemObjectsChangeArts}
                selectedItems={this.state.selectedItemsArts}
                styles={multipleSelect}
                />
                <Text style={{display: 'none'}}>{Global.hobbiesMusic = []}</Text>
                {this.state.hobbiesMusic.map(hobby => {
                  let found = false;
                  this.state.selectedItemObjectsMusic.map(item => {
                    (item.id.includes(hobby)) ? found = true : null
                  })
                  if (found) Global.hobbiesMusic.push(hobby)
                })}
                {this.state.selectedItemObjectsMusic.map(item => {
                  let category = item.id.substring(0, item.id.length - 2);
                  (!this.state.hobbiesMusic.includes(category)) ? this.addToHobbiesMusic(category) : null})}
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} onPress={() => this.SectionedMultiSelectMusic._toggleSelector()}>
                      Music</Text>
                </TouchableOpacity>
                <SectionedMultiSelect
                ref={SectionedMultiSelect => (this.SectionedMultiSelectMusic = SectionedMultiSelect)}
                iconRenderer={this.icon}
                items={music}
                uniqueKey="id"
                subKey="children"
                renderSelectText={() => ' '}
                selectToggleIconComponent={<Icon name={null} />}
                showDropDowns={true}
                readOnlyHeadings={true}
                onSelectedItemsChange={this.onSelectedItemsChangeMusic}
                onSelectedItemObjectsChange={this.onSelectedItemObjectsChangeMusic}
                selectedItems={this.state.selectedItemsMusic}
                styles={multipleSelect}
                />
                <Text style={{display: 'none'}}>{Global.hobbiesDancing = []}</Text>
                {this.state.hobbiesDancing.map(hobby => {
                  let found = false;
                  this.state.selectedItemObjectsDancing.map(item => {
                    (item.id.includes(hobby)) ? found = true : null
                  })
                  if (found) Global.hobbiesDancing.push(hobby)
                })}
                {this.state.selectedItemObjectsDancing.map(item => {
                  let category = item.id.substring(0, item.id.length - 2);
                  (!this.state.hobbiesDancing.includes(category)) ? this.addToHobbiesDancing(category) : null})}
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectDancing._toggleSelector()}>
                    <Text style={styles.buttonText}>
                      Dancing</Text>
                </TouchableOpacity>
                <SectionedMultiSelect
                ref={SectionedMultiSelect => (this.SectionedMultiSelectDancing = SectionedMultiSelect)}
                iconRenderer={this.icon}
                items={dancing}
                uniqueKey="id"
                subKey="children"
                renderSelectText={() => ' '}
                selectToggleIconComponent={<Icon name={null} />}
                showDropDowns={true}
                readOnlyHeadings={true}
                onSelectedItemsChange={this.onSelectedItemsChangeDancing}
                onSelectedItemObjectsChange={this.onSelectedItemObjectsChangeDancing}
                selectedItems={this.state.selectedItemsDancing}
                styles={multipleSelect}
                />
                <Text style={{display: 'none'}}>{Global.hobbiesFashion = []}</Text>
                {this.state.hobbiesFashion.map(hobby => {
                  let found = false;
                  this.state.selectedItemObjectsFashion.map(item => {
                    (item.id.includes(hobby)) ? found = true : null
                  })
                  if (found) Global.hobbiesFashion.push(hobby)
                })}
                {this.state.selectedItemObjectsFashion.map(item => {
                  let category = item.id.substring(0, item.id.length - 2);
                  (!this.state.hobbiesFashion.includes(category)) ? this.addToHobbiesFashion(category) : null})}
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectFashion._toggleSelector()}>
                    <Text style={styles.buttonText}>
                      Fashion</Text>
                </TouchableOpacity>
                <SectionedMultiSelect
                ref={SectionedMultiSelect => (this.SectionedMultiSelectFashion = SectionedMultiSelect)}
                iconRenderer={this.icon}
                items={fashion}
                uniqueKey="id"
                subKey="children"
                renderSelectText={() => ' '}
                selectToggleIconComponent={<Icon name={null} />}
                showDropDowns={true}
                readOnlyHeadings={true}
                onSelectedItemsChange={this.onSelectedItemsChangeFashion}
                onSelectedItemObjectsChange={this.onSelectedItemObjectsChangeFashion}
                selectedItems={this.state.selectedItemsFashion}
                styles={multipleSelect}
                />
                <Text style={{display: 'none'}}>{Global.hobbiesCars = []}</Text>
                {this.state.hobbiesCars.map(hobby => {
                  let found = false;
                  this.state.selectedItemObjectsCars.map(item => {
                    (item.id.includes(hobby)) ? found = true : null
                  })
                  if (found) Global.hobbiesCars.push(hobby)
                })}
                {this.state.selectedItemObjectsCars.map(item => {
                  let category = item.id.substring(0, item.id.length - 2);
                  (!this.state.hobbiesCars.includes(category)) ? this.addToHobbiesCars(category) : null})}
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectCars._toggleSelector()}>
                    <Text style={styles.buttonText}>
                      Cars</Text>
                </TouchableOpacity>
                <SectionedMultiSelect
                ref={SectionedMultiSelect => (this.SectionedMultiSelectCars = SectionedMultiSelect)}
                iconRenderer={this.icon}
                items={cars}
                uniqueKey="id"
                subKey="children"
                renderSelectText={() => ' '}
                selectToggleIconComponent={<Icon name={null} />}
                showDropDowns={true}
                readOnlyHeadings={true}
                onSelectedItemsChange={this.onSelectedItemsChangeCars}
                onSelectedItemObjectsChange={this.onSelectedItemObjectsChangeCars}
                selectedItems={this.state.selectedItemsCars}
                styles={multipleSelect}
                />
                <Text style={{display: 'none'}}>{Global.hobbiesGames = []}</Text>
                {this.state.hobbiesGames.map(hobby => {
                  let found = false;
                  this.state.selectedItemObjectsGames.map(item => {
                    (item.id.includes(hobby)) ? found = true : null
                  })
                  if (found) Global.hobbiesGames.push(hobby)
                })}
                {this.state.selectedItemObjectsGames.map(item => {
                  let category = item.id.substring(0, item.id.length - 2);
                  (!this.state.hobbiesGames.includes(category)) ? this.addToHobbiesGames(category) : null})}
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectGames._toggleSelector()}>
                    <Text style={styles.buttonText}>
                      Games</Text>
                </TouchableOpacity>
                <SectionedMultiSelect
                ref={SectionedMultiSelect => (this.SectionedMultiSelectGames = SectionedMultiSelect)}
                iconRenderer={this.icon}
                items={games}
                uniqueKey="id"
                subKey="children"
                renderSelectText={() => ' '}
                selectToggleIconComponent={<Icon name={null} />}
                showDropDowns={true}
                readOnlyHeadings={true}
                onSelectedItemsChange={this.onSelectedItemsChangeGames}
                onSelectedItemObjectsChange={this.onSelectedItemObjectsChangeGames}
                selectedItems={this.state.selectedItemsGames}
                styles={multipleSelect}
                />
                <Text style={{display: 'none'}}>{Global.hobbiesReading = []}</Text>
                {this.state.hobbiesReading.map(hobby => {
                  let found = false;
                  this.state.selectedItemObjectsReading.map(item => {
                    (item.id.includes(hobby)) ? found = true : null
                  })
                  if (found) Global.hobbiesReading.push(hobby)
                })}
                {this.state.selectedItemObjectsReading.map(item => {
                  let category = item.id.substring(0, item.id.length - 2);
                  (!this.state.hobbiesReading.includes(category)) ? this.addToHobbiesReading(category) : null})}
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectReading._toggleSelector()}>
                    <Text style={styles.buttonText}>
                      Reading</Text>
                </TouchableOpacity>
                <SectionedMultiSelect
                ref={SectionedMultiSelect => (this.SectionedMultiSelectReading = SectionedMultiSelect)}
                iconRenderer={this.icon}
                items={reading}
                uniqueKey="id"
                subKey="children"
                renderSelectText={() => ' '}
                selectToggleIconComponent={<Icon name={null} />}
                showDropDowns={true}
                readOnlyHeadings={true}
                onSelectedItemsChange={this.onSelectedItemsChangeReading}
                onSelectedItemObjectsChange={this.onSelectedItemObjectsChangeReading}
                selectedItems={this.state.selectedItemsReading}
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
        marginHorizontal: WIDTH * 0.05,
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
      width: WIDTH * 0.8,
      padding: WIDTH * 0.01
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
      children: [
        {
          name: 'Hoodies',
          id: 'Football 1',
        },
        {
          name: 'Shorts',
          id: 'Football 2',
        },
        {
          name: 'Shoes',
          id: 'Football 3',
        },
        {
          name: 'Accessories',
          id: 'Football 4',
        },
      ],
    },
    {
      name: 'Basketball',
      id: 'Basketball00',
      children: [
        {
          name: 'Hoodies',
          id: 'Basketball 1',
        },
        {
          name: 'Shorts',
          id: 'Basketball 2',
        },
        {
          name: 'Shoes',
          id: 'Basketball 3',
        },
        {
          name: 'Accessories',
          id: 'Basketball 4',
        },
      ],
    },
    {
    name: 'Volleyball',
      id: 'Volleyball00',
      children: [
        {
          name: 'Accessories',
          id: 'Volleyball 1',
        }
      ]
    },
    {
    name: 'Cycling',
        id: 'Cycling00',
        children: [
        {
            name: 'Bikes',
            id: 'Cycling 1',
        }
        ]
    },
    {
    name: 'Running',
        id: 'Running00',
        children: [
        {
            name: 'Shoes',
            id: 'Running 1',
        }
        ]
    },
  ];

  const technology = [
    {
      name: 'Gaming',
      id: 'Gaming',
      children: [
        {
          name: 'Computers',
          id: 'Gaming 1',
        },
        {
          name: 'Games',
          id: 'Gaming 2',
        },
        {
          name: 'Accessories',
          id: 'Gaming 3',
        },
      ],
    },
    {
      name: 'Audio',
      id: 'Audio',
      children: [
        {
          name: 'Microphones',
          id: 'Audio 1',
        },
        {
          name: 'Headphones',
          id: 'Audio 2',
        },
        {
          name: 'Accessories',
          id: 'Audio 3',
        },
      ],
    },
    {
    name: 'Video',
      id: 'Video',
      children: [
        {
          name: 'Accessories',
          id: 'Video 1',
        }
      ]
    },
  ];

  const cooking = [
    {
      name: 'Recipies',
      id: 'Recipies',
      children: [
        {
          name: 'Books',
          id: 'Recipies 1',
        },
        {
          name: 'Courses',
          id: 'Recipies 2',
        },
        {
          name: 'Videos',
          id: 'Recipies 3',
        },
      ],
    },
    {
      name: 'Clothing',
      id: 'Clothing',
      children: [
        {
          name: 'Hats',
          id: 'Clothing 1',
        },
        {
          name: 'Aprons',
          id: 'Clothing 2',
        },
      ],
    },
    {
    name: 'Accessories',
      id: 'Accessories',
      children: [
        {
          name: 'Dishes',
          id: 'Accessories 1',
        },
        {
          name: 'Cutlery',
          id: 'Accessories 2',
        },
        {
          name: 'Machines',
          id: 'Accessories 3',
        }
      ]
    },
  ];

  const arts = [
    {
      name: 'Accessories',
      id: 'Accessories',
      children: [
        {
          name: 'Colors',
          id: 'Accessories 1',
        },
        {
          name: 'Brushes',
          id: 'Accessories 2',
        },
        {
          name: 'Other',
          id: 'Accessories 3',
        },
      ],
    },
  ];

  const music = [
    {
      name: 'Songs',
      id: 'Songs',
      children: [
        {
          name: 'CDs',
          id: 'Songs 1',
        },
        {
          name: 'Vinyl',
          id: 'Songs 2',
        },
        {
          name: 'CLoud songs',
          id: 'Songs 3',
        },
      ],
    },
    {
      name: 'Accessories',
      id: 'Accessories',
      children: [
        {
          name: 'Microphones',
          id: 'Accessories 1',
        },
        {
          name: 'Mixers',
          id: 'Accessories 2',
        },
      ],
    },
  ];

  const dancing = [
    {
      name: 'Clothing',
      id: 'Clothing',
      children: [
        {
          name: 'Shirts',
          id: 'Clothing 1',
        },
        {
          name: 'Pants',
          id: 'Clothing 2',
        },
        {
          name: 'Shoes',
          id: 'Clothing 3',
        },
      ],
    },
    {
      name: 'Accessories',
      id: 'Accessories',
      children: [
        {
          name: 'Requisites',
          id: 'Accessories 1',
        },
        {
          name: 'Speakers',
          id: 'Accessories 2',
        },
      ],
    },
  ];

  const fashion = [
    {
      name: 'Clothing',
      id: 'Clothing',
      children: [
        {
          name: 'Suits',
          id: 'Clothing 1',
        },
        {
          name: 'Shirts',
          id: 'Clothing 2',
        },
        {
          name: 'Pants',
          id: 'Clothing 3',
        },
      ],
    },
    {
      name: 'Footwear',
      id: 'Footwear',
      children: [
        {
          name: 'Shoes',
          id: 'Footwear 1',
        },
        {
          name: 'Trainers',
          id: 'Footwear 2',
        },
      ],
    },
    {
    name: 'Accesories',
      id: 'Accesories',
      children: [
        {
          name: 'Watches',
          id: 'Accesories 1',
        },
        {
          name: 'Belts',
          id: 'Accesories 2',
        },
        {
          name: 'Bags',
          id: 'Accesories 3',
        }
      ]
    },
  ];

  const cars = [
    {
      name: 'Tools',
      id: 'Tools',
      children: [
        {
          name: 'Machines',
          id: 'Tools 1',
        },
        {
          name: 'Hand tools',
          id: 'Tools 2',
        },
      ],
    },
    {
      name: 'Parts',
      id: 'Parts',
      children: [
        {
          name: 'Windows',
          id: 'Parts 1',
        },
        {
          name: 'Exhausters',
          id: 'Parts 2',
        },
      ],
    },
  ];

  const games = [
    {
      name: 'Board games',
      id: 'Board games',
      children: [
        {
          name: 'Social',
          id: 'Board games 1',
        },
        {
          name: 'Drinking',
          id: 'Board games 2',
        },
        {
          name: 'Kids',
          id: 'Board games 3',
        },
      ],
    },
    {
      name: 'Outside games',
      id: 'Outside games',
      children: [
        {
          name: 'Kids',
          id: 'Outside games 1',
        },
        {
          name: 'Adult',
          id: 'Outside games 2',
        },
      ],
    },
  ];

  const reading = [
    {
      name: 'Books',
      id: 'Books',
      children: [
        {
          name: 'Digital books',
          id: 'Books 1',
        },
        {
          name: 'Physical books',
          id: 'Books 2',
        },
        {
          name: 'Kurba IDK kdo se bere knjige LMAO',
          id: 'Books 3',
        },
      ],
    },
  ];
  