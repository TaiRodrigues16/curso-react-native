import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'

import Mega from './componentes/mega/Mega'
//import FlexboxV4 from './componentes/layout/FlexboxV4'
//import FlexboxV3 from './componentes/layout/FlexboxV3'
//import FlexboxV2 from './componentes/layout/FlexboxV2'
//import FlexboxV1 from './componentes/layout/FlexboxV1'
//import DigiteSeuNome from './componentes/DigiteSeuNome'
//import ListaProdutosV2 from './componentes/produtos/ListaProdutosV2'
//import ListaProdutos from './componentes/produtos/ListaProdutos'
//import UsuarioLogado from './componentes/UsuarioLogado'
//import Familia from './componentes/relacao/Familia'
//import Membro from './componentes/relacao/Membro'
//import ParImpar from './componentes/ParImpar'
//import Diferenciar from './componentes/Diferenciar'
//import ContadorV2 from "./componentes/contador/ContadorV2"
//import Pai from "./componentes/indireta/Pai"
//import Pai from "./componentes/direta/Pai"
//import Contador from "./componentes/Contador";
//import Botao from './componentes/Botao'
//import Titulo from "./componentes/Titulo";
//import Aleatorio from "./componentes/Aleatorio";
//import MinMax from './componentes/MinMax'
//import CompPadrao, { Comp1, Comp2 } from "./componentes/Multi"
//import Primeiro from './componentes/Primeiro'

/*function App(){
   //const jsx = <Text>Primeiro componente 2</Text> //variável react
    return <Text>Primeiro componente 2</Text>
}*/

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdNumeros={12}/>
        {/*<FlexboxV4 />
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexboxV1 />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={ {nome: "Gui", email:"gui@gui.com"} }/>
        <UsuarioLogado usuario={ {nome: "Gui"} }/>
        <UsuarioLogado usuario={ {email:"carlos@empresa.com"} }/>
        <UsuarioLogado usuario={ null }/>
        <UsuarioLogado usuario={{}}/>
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
            <Membro nome="Gui" sobrenome="Silva" />
            <Membro nome="Rebeca" sobrenome="Silva" />
        </Familia>
        <ParImpar num={3}/>
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Contador inicial={100} passo={13} />
        <Contador />
        <Botao />
        <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"/>
        <Aleatorio min={1} max={60} />
        <MinMax min={3} max={20} />
        <MinMax min="1" max="94" />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        {/*<Text>{1+1}</Text>}
        <Primeiro />*/}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})