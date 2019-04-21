import React from 'react';
import {Container, Content, Form, Item, Input, Label, H3} from 'native-base'
import style from './style'

import ButtonSubmit from '../../components/ButtonSubmit'

export default class SettingsScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const {title, buttonSubmit, textSubmit} = style

    return (
      <Container>
      <Content>
        <Form>
        <H3 style={title}>Qual é o titulo do novo baralho?</H3>
          <Item floatingLabel last>
            <Label>Titulo</Label>
            <Input />
          </Item>
          <ButtonSubmit />
        </Form>
      </Content>
    </Container>
    )
  }
}
