import React from 'react';
import { View } from 'react-native';
import {Container, Content, List, ListItem} from 'native-base'
import { initializeDeckData , getDecksData } from '../../helpers/storageHelper'

import Deck from '../../components/Deck'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    decks : {}
  }

  componentDidMount() {
    this.setState({
      decks: initializeDeckData()
    })
  }

  render() {
    const {decks} = this.state

    return (
      <Container>
        <Content>
          <List>
            {Object.keys(decks).map(deck => {
              const {title, questions} = decks[deck]
              return (
                <ListItem key={deck} >
                  <Deck title={title} numberCards={questions.length} />
                </ListItem>
              ) 
            })}
          </List>
        </Content>
      </Container>
    );
  }

}