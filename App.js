import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Global from './components/Global'

import LandingPage from './pages/LandingPage'
import AgeFilter from './pages/AgeFilter'
import GenderFilter from './pages/GenderFilter'
import Header from './components/Header'
import FooterNavigation from './components/FooterNavigation'
import OccasionFilter from './pages/OccasionFilter'
import HobbiesFilter from './pages/HobbiesFilter'
import SelectedParameters from './pages/SelectedParameters'
import SearchResults from './pages/SearchResults'
import BudgetFilter from './pages/BudgetFilter'
import scraperScreen from './pages/scraperScreen'
import trendingScreen from './pages/trendingScreen'
import ProductDetail from './pages/ProductDetail'
import Product from './components/Product'

console.disableYellowBox = true;

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
  },
  HobbiesFilter: {
    screen: HobbiesFilter,
    navigationOptions: {
      header: null
    }
  },
  SelectedParameters: {
    screen: SelectedParameters,
    navigationOptions: {
      header: null
    }
  },
  SearchResults: {
    screen: SearchResults,
    navigationOptions: {
      header: null
    }
  },
  BudgetFilter: {
    screen: BudgetFilter,
    navigationOptions: {
      header: null
    }
  },
  scraperScreen: {
    screen: scraperScreen,
    navigationOptions: {
      header: null
    }
  },
  trendingScreen: {
    screen: trendingScreen,
    navigationOptions: {
      header: null
    }
  },
  Product: {
    screen: Product,
    navigationOptions: {
      header: null
    }
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(AppNavigator);