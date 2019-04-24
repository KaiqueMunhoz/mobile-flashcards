import React from 'react'
import {Text, View} from 'react-native'
import {Container, H1, H3, Content, Button} from 'native-base'

import style from './style'

const DeckScreen = (props) => {

    const {container, titleStyle, subtitle, addCard, titleAndSubtitle, textQuiz, startQuiz} = style
    const {title, questions} = props.navigation.state.params

    const card = questions.length === 1 || 0 ? 'carta' : 'cartas'

    const goToNewCard = () => {
        props.navigation.navigate('DecksScreen')
    }
    
    const goToQuiz = () => {
        props.navigation.navigate('QuizScreen', {questions})
    }

    return(
        <Container style={container}>
            <Content>
                <View style={titleAndSubtitle}>
                    <H1 style={titleStyle}>{title}</H1>
                    <H3 style={subtitle}>{`${questions.length} ${card}`}</H3>
                </View>

                <Button onPress={goToNewCard} style={addCard} bordered info>
                    <Text>Adicionar carta</Text>
                </Button>
                <Button onPress={goToQuiz} style={startQuiz} info>
                    <Text style={textQuiz} >Começar quiz</Text>
                </Button>
            </Content>
        </Container>
    )
    
    
}

export default DeckScreen