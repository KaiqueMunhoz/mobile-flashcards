import React from 'react';
import { View } from 'react-native';
import {Container, Content, List, ListItem, Text, Body} from 'native-base'
import { getData } from '../../utils/api'
import Card from '../../components/Card'
import style from './style'

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
    const {container} = style

    return (
      <Container>
        <Content>
          <List>
            {Object.keys(decks).map(deck => {
              const {title, questions} = decks[deck]

              return (
                <ListItem key={deck} >
                <Body>
                  <Text>{title}</Text>
                  <Text note>{questions.length} cards</Text>
                </Body>
                </ListItem>
              ) 
            })}
          </List>
        </Content>
      </Container>
    );
  }

}