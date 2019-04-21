import React from 'react';
import {Container, Content, Form, Item, Input, Label, H3} from 'native-base'
import style from './style'

import ButtonSubmit from '../../components/ButtonSubmit'

export default class SettingsScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    deckTitle: ''
  }

  submitTitle = () => {
    console.warn('clicou')
  }

  render() {
    const {title} = style

    return (
      <Container>
        <Content>
          <Form>
          <H3 style={title}>Qual é o titulo do novo baralho?</H3>
            <Item floatingLabel last>
              <Label>Titulo</Label>
              <Input
                onChangeText={deckTitle => this.setState({deckTitle})}
                value={this.state.deckTitle}
              />
            </Item>
            <ButtonSubmit submitTitle={this.submitTitle}/>
          </Form>
      </Content>
    </Container>
    )
  }
}
