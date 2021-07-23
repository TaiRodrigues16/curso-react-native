import React, {Fragment} from "react";
import { View, Text } from "react-native";
import Estilo from './estilo'

// Pode envolver os elementos para retornar diretamente
// É também um fragment -> <></>
export default props => (
    <React.Fragment>
        <Text style={Estilo.textG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </React.Fragment>
       
)