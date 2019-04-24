import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

//Screens
import DeckScreen from '../screens/DeckScreen';
import QuizScreen from '../screens/QuizScreen';
import NewCardScreen from '../screens/NewCardScreen';

export default createAppContainer(createSwitchNavigator({
  Main: MainTabNavigator,
  DeckScreen,
  QuizScreen,
  NewCardScreen,
}));