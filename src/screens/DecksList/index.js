import React from 'react';
import {Container, Content, List, ListItem} from 'native-base'
import { initializeDeckData , getDecksData } from '../../helpers/storageHelper'

import Deck from '../../components/Deck'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    decks : initializeDeckData()
  }

  componentDidMount() {
    getDecksData().then(decks => this.setState({decks}))
  }

  handleClick = (title, questions) => {
    this.props.navigation.navigate('DeckScreen',{title, questions})
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
                <ListItem onPress={() => this.handleClick(title, questions)} key={deck} >
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