import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        //usuario && Object.keys(usuario).length !== 0 -> Pode usar esse também
        <>
            
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.textG}> Usuário Logado:</Text>
                <Text style={Estilo.textG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}