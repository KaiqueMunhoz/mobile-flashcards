import React from 'react';
import { Platform, Text, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends React.Component {


  render() {
    
      return (
        <View>
          <Text>Hello World</Text>
        </View>
         
        
      );
    } 
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
