import React from 'react';
import {
  View
} from 'react-native';
import { getData } from '../../utils/api'
import Card from '../../components/Card'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    decks : {}
  }

  componentDidMount() {
    this.setState({
      decks : getData()
    })
  }

  render() {
    const {decks} = this.state

    return (
      <View>
        {
          Object.keys(decks).map(deck => (
            <Card key={deck}/>
          ))
        }
      </View>
    );
  }

}