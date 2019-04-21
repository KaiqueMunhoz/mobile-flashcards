import React from 'react'
import {Text} from 'react-native'
import {Button} from 'native-base'
import style from './style'

const ButtonSubmit = ({submitTitle}) => {

    const {buttonSubmit, textSubmit} = style

    return(
        <Button onPress={submitTitle} style={buttonSubmit} block info>
            <Text style={textSubmit}>Salvar</Text>
        </Button>
    )
}

export default ButtonSubmit