import React from 'react'
import {Text} from 'react-native'
import {Button} from 'native-base'
import style from './style'

const ButtonSubmit = ({createDeck}) => {

    const {buttonSubmit, textSubmit} = style

    return(
        <Button onPress={createDeck} style={buttonSubmit} block info>
            <Text style={textSubmit}>Salvar</Text>
        </Button>
    )
}

export default ButtonSubmit