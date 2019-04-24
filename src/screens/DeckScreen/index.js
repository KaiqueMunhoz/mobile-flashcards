import React from 'react'
import {Text, View} from 'react-native'
import {Container, H1, H3, Content, Button} from 'native-base'

import style from './style'

class DeckScreen extends React.Component {

    componentDidMount() {
        const {title, questions} = this.props
    }

    render() {
        const {container, title, subtitle, addCard, titleAndSubtitle, textQuiz, startQuiz} = style

        return(
            <Container style={container}>
                <Content>
                    <View style={titleAndSubtitle}>
                        <H1 style={title}>Javascript</H1>
                        <H3 style={subtitle}>2 cards</H3>
                    </View>

                    <Button style={addCard} bordered info>
                        <Text>Adicionar carta</Text>
                    </Button>
                    <Button style={startQuiz} info>
                        <Text style={textQuiz} >Começar quiz</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
    
}

export default DeckScreen