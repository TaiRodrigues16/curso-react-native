import React from 'react'
import {Text} from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <>
            <Text style={Estilo.textG}>{props.a}</Text>
            <Text style={Estilo.textG}>{props.b}</Text>
        </>
    )
}