import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LandingPage from './pages/LandingPage'
import AgeFilter from './pages/AgeFilter'
import GenderFilter from './pages/GenderFilter'
import Header from './components/Header'
import FooterNavigation from './components/FooterNavigation'
import OccasionFilter from './pages/OccasionFilter'

const AppNavigator = createStackNavigator({
  Home: {
    screen: LandingPage,
    navigationOptions: {
      header: null
    }
  },
  Header: {
    screen: Header,
    navigationOptions: {
      header: null
    }
  },
  FooterNavigation: {
    screen: FooterNavigation,
    navigationOptions: {
      header: null
    }
  },
  AgeFilter: {
    screen: AgeFilter,
    navigationOptions: {
      header: null
    }
  },
  GenderFilter: {
    screen: GenderFilter,
    navigationOptions: {
      header: null
    }
  },
  OccasionFilter: {
    screen: OccasionFilter,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(AppNavigator);