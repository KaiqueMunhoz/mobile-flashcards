import React from 'react';
import {View} from 'react-native'
import {Container} from 'native-base'
import style from './style.js';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends React.Component {
  
  render() {
    
    return (
      <Container style={{marginTop: 20}}>
        <AppNavigator />
      </Container>
    );
  } 
}

