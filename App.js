import React from 'react';
import {ContainerView} from './style.js';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends React.Component {
  
  render() {
      return (
        <ContainerView>
          <AppNavigator />
        </ContainerView>
      );
    } 
  }

