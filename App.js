import React from 'react';
import {View} from 'react-native'
import style from './style.js';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends React.Component {
  
  render() {

    const {container} = style
    
    return (
      <View style={container}>
        <AppNavigator />
      </View>
    );
  } 
}

