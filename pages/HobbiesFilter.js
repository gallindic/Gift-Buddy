import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import Header from '../components/Header';
import FooterNavigation from '../components/FooterNavigation';
import Global from '../components/Global'
import Hobbies from '../components/Hobbies'

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
    };
  }

  //SPORT
  onSelectedItemsChangeSport = (selectedItemsSport) => {
    this.setState({ selectedItemsSport });
  };
  onSelectedItemObjectsChangeSport = (selectedItemObjectsSport) => {
    this.setState({ selectedItemObjectsSport });
  };

  //TECHNOLOGY
  onSelectedItemsChangeTechnology = (selectedItemsTechnology) => {
    this.setState({ selectedItemsTechnology });
  };
  onSelectedItemObjectsChangeTechnology = (selectedItemObjectsTechnology) => {
    this.setState({ selectedItemObjectsTechnology });
  };

  //COOKING
  onSelectedItemsChangeCooking = (selectedItemsCooking) => {
    this.setState({ selectedItemsCooking });
  };
  onSelectedItemObjectsChangeCooking = (selectedItemObjectsCooking) => {
    this.setState({ selectedItemObjectsCooking });
  };

  //ARTS
  onSelectedItemsChangeArts = (selectedItemsArts) => {
    this.setState({ selectedItemsArts });
  };
  onSelectedItemObjectsChangeArts = (selectedItemObjectsArts) => {
    this.setState({ selectedItemObjectsArts });
  };

   //MUSIC
   onSelectedItemsChangeMusic = (selectedItemsMusic) => {
    this.setState({ selectedItemsMusic });
  };
  onSelectedItemObjectsChangeMusic = (selectedItemObjectsMusic) => {
    this.setState({ selectedItemObjectsMusic });
  };

  //DANCING
  onSelectedItemsChangeDancing = (selectedItemsDancing) => {
    this.setState({ selectedItemsDancing });
  };
  onSelectedItemObjectsChangeDancing = (selectedItemObjectsDancing) => {
    this.setState({ selectedItemObjectsDancing });
  };

  //FASHION
  onSelectedItemsChangeFashion = (selectedItemsFashion) => {
    this.setState({ selectedItemsFashion });
  };
  onSelectedItemObjectsChangeFashion = (selectedItemObjectsFashion) => {
    this.setState({ selectedItemObjectsFashion });
  };

  //CARS
  onSelectedItemsChangeCars = (selectedItemsCars) => {
    this.setState({ selectedItemsCars });
  };
  onSelectedItemObjectsChangeCars = (selectedItemObjectsCars) => {
    this.setState({ selectedItemObjectsCars });
  };

  //GAMES
  onSelectedItemsChangeGames = (selectedItemsGames) => {
    this.setState({ selectedItemsGames });
  };
  onSelectedItemObjectsChangeGames = (selectedItemObjectsGames) => {
    this.setState({ selectedItemObjectsGames });
  };

  //READING
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
    Global.Hobbies = this;
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
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectSport._toggleSelector()}>
                    <Text style={styles.buttonText}>Sports</Text>
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
                readOnlyHeadings={true}
                onSelectedItemsChange={this.onSelectedItemsChangeSport}
                onSelectedItemObjectsChange={this.onSelectedItemObjectsChangeSport}
                selectedItems={this.state.selectedItemsSport}
                styles={multipleSelect}
                />
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
                <TouchableOpacity style={styles.button} onPress={() => this.SectionedMultiSelectTechnology._toggleSelector()}>
                    <Text style={styles.buttonText}>
                      Reading</Text>
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
                <Hobbies selected={this.state.selectedItemsSport}/>
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
      id: 0,
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
      id: 1,
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
      id: 20,
      children: [
        {
          name: 'Accessories',
          id: 'Volleyball 1',
        }
      ]
    },
    {
    name: 'Cycling',
        id: 30,
        children: [
        {
            name: 'Bikes',
            id: 'Cycling 1',
        }
        ]
    },
    {
    name: 'Running',
        id: 40,
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

  const cooking = [
    {
      name: 'Recipies',
      id: 0,
      children: [
        {
          name: 'Books',
          id: 1,
        },
        {
          name: 'Courses',
          id: 2,
        },
        {
          name: 'Videos',
          id: 4,
        },
      ],
    },
    {
      name: 'Clothing',
      id: 10,
      children: [
        {
          name: 'Hats',
          id: 11,
        },
        {
          name: 'Aprons',
          id: 12,
        },
      ],
    },
    {
    name: 'Accessories',
      id: 20,
      children: [
        {
          name: 'Dishes',
          id: 21,
        },
        {
          name: 'Cutlery',
          id: 22,
        },
        {
          name: 'Machines',
          id: 23,
        }
      ]
    },
  ];

  const arts = [
    {
      name: 'Accessories',
      id: 0,
      children: [
        {
          name: 'Colors',
          id: 1,
        },
        {
          name: 'Brushes',
          id: 2,
        },
        {
          name: 'Other',
          id: 4,
        },
      ],
    },
  ];

  const music = [
    {
      name: 'Songs',
      id: 0,
      children: [
        {
          name: 'CDs',
          id: 1,
        },
        {
          name: 'Vinyl',
          id: 2,
        },
        {
          name: 'CLoud songs',
          id: 4,
        },
      ],
    },
    {
      name: 'Accessories',
      id: 10,
      children: [
        {
          name: 'Microphones',
          id: 11,
        },
        {
          name: 'Mixers',
          id: 12,
        },
      ],
    },
  ];

  const dancing = [
    {
      name: 'Clothing',
      id: 0,
      children: [
        {
          name: 'Shirts',
          id: 1,
        },
        {
          name: 'Pants',
          id: 2,
        },
        {
          name: 'Shoes',
          id: 4,
        },
      ],
    },
    {
      name: 'Accessories',
      id: 10,
      children: [
        {
          name: 'Requisites',
          id: 11,
        },
        {
          name: 'Speakers',
          id: 12,
        },
      ],
    },
  ];

  const fashion = [
    {
      name: 'Clothing',
      id: 0,
      children: [
        {
          name: 'Suits',
          id: 1,
        },
        {
          name: 'Shirts',
          id: 2,
        },
        {
          name: 'Pants',
          id: 4,
        },
      ],
    },
    {
      name: 'Footwear',
      id: 10,
      children: [
        {
          name: 'Shoes',
          id: 11,
        },
        {
          name: 'Trainers',
          id: 12,
        },
      ],
    },
    {
    name: 'Accesories',
      id: 20,
      children: [
        {
          name: 'Watches',
          id: 21,
        },
        {
          name: 'Belts',
          id: 22,
        },
        {
          name: 'Bags',
          id: 23,
        }
      ]
    },
  ];

  const cars = [
    {
      name: 'Tools',
      id: 0,
      children: [
        {
          name: 'Machines',
          id: 1,
        },
        {
          name: 'Hand tools',
          id: 2,
        },
      ],
    },
    {
      name: 'Parts',
      id: 10,
      children: [
        {
          name: 'Windows',
          id: 11,
        },
        {
          name: 'Exhausters',
          id: 12,
        },
      ],
    },
  ];

  const games = [
    {
      name: 'Board games',
      id: 0,
      children: [
        {
          name: 'Social',
          id: 1,
        },
        {
          name: 'Drinking',
          id: 2,
        },
        {
          name: 'Kids',
          id: 4,
        },
      ],
    },
    {
      name: 'Outside games',
      id: 10,
      children: [
        {
          name: 'Kids',
          id: 11,
        },
        {
          name: 'Adult',
          id: 12,
        },
      ],
    },
  ];

  const reading = [
    {
      name: 'Books',
      id: 0,
      children: [
        {
          name: 'Digital books',
          id: 1,
        },
        {
          name: 'Physical books',
          id: 2,
        },
        {
          name: 'Kurba IDK kdo se bere knjige LMAO',
          id: 4,
        },
      ],
    },
  ];
  