import React from 'react'
import {Text, Body} from 'native-base'

const Deck = ({title, numberCards}) => {
    return (
        <Body>
            <Text>{title}</Text>
            <Text note>{numberCards} cartas</Text>
        </Body>
    )
}

export default Deck