import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import DeckScreen from '../screens/DeckScreen';

export default createAppContainer(createSwitchNavigator({
  Main: MainTabNavigator,
  DeckScreen
}));