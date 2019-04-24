import React from 'react'
import {Text, View} from 'react-native'
import {Container, H1, H3, Content, Button} from 'native-base'

import style from './style'

const DeckScreen = (props) => {

    const {container, titleStyle, subtitle, addCard, titleAndSubtitle, textQuiz, startQuiz} = style
    const {title, questions} = props.navigation.state.params

    const card = questions.length === 1 || 0 ? 'carta' : 'cartas'

    return(
        <Container style={container}>
            <Content>
                <View style={titleAndSubtitle}>
                    <H1 style={titleStyle}>{title}</H1>
                    <H3 style={subtitle}>{`${questions.length} ${card}`}</H3>
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

export default DeckScreen