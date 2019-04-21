import React from 'react';
import {Text} from 'react-native'
import {Container, Content, Form, Item, Input, Label, H3 ,Button} from 'native-base'
import style from './style'

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
          <Button style={buttonSubmit} block info>
            <Text style={textSubmit}>Salvar</Text>
          </Button>
        </Form>
      </Content>
    </Container>
    )
  }
}
