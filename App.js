import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {ContainerView} from './style.js';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends React.Component {


  render() {
    
      return (
        <ContainerView>
          <Text>Hello World</Text>
        </ContainerView>
         
        
      );
    } 
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
