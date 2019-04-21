import React from 'react'
import {View, Text} from 'react-native'
import style from './style'

const Card = () => {

    const {container} = style
    return(
        <View style={container}>
            <Text>Hello World</Text>
        </View>
    )
}

export default Card