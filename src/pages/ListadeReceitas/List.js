import React, {useState, useEffect} from 'react';
import {SafeAreaView,Text,StyleSheet,View,FlatList,TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import 
{
Container,
ViewNome,
ViewNomeText,
ViewNomeTextB,
ViewBotaoSA,
BotaoDelete,
Logo,
ViewImg,
ViewIngredientes,
ViewIngredientesText,
ViewIngredientesTextB,
ViewMododePreparo,
ViewMododePreparoText,
ViewMododePreparoTextB,
ViewTempo,
ViewTempoText,
ViewTempoTextB
} from './Liststyles';

      
    

export default function List({ data }){

    const navigation = useNavigation();

    function Edit(){
        navigation.navigate('EditarReceita',{nome: data.nome,ingredientes: data.ingredientes,preparo: data.preparo, tempo: data.tempo, key: data.key})
        
    }

    return(
        
    <Container>

        <ViewImg>
        <Logo source={require('../../assets/logoreceita.png')}/>
        </ViewImg>

        <ViewNome>
                <ViewNomeText>Nome:</ViewNomeText>       
                <ViewNomeTextB>{data.nome}</ViewNomeTextB>
        </ViewNome>

        <ViewIngredientes>
                <ViewIngredientesText>Ingredientes:</ViewIngredientesText>       
                <ViewIngredientesTextB>{data.ingredientes}</ViewIngredientesTextB>
        </ViewIngredientes>

        <ViewMododePreparo>
                <ViewMododePreparoText>Preparo:</ViewMododePreparoText>       
                <ViewMododePreparoTextB>{data.preparo}</ViewMododePreparoTextB>
        </ViewMododePreparo>

        <ViewTempo>
                <ViewTempoText>Tempo:</ViewTempoText>       
                <ViewTempoTextB>{data.tempo}</ViewTempoTextB>
        </ViewTempo>

        <ViewBotaoSA>
                <BotaoDelete style={{marginRight: 10, marginLeft: 5, marginBottom: 10}} onPress={ ()=> Edit()}>
                <MaterialIcons name="edit" size={24} color="#ad0005" />
                </BotaoDelete >
        </ViewBotaoSA>
    </Container>
    );
}
