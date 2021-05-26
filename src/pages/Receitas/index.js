import React,{useContext} from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {createNavigatorFactory, useNavigation} from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import
{
Container,
AdicionarReceita,
PesquisarReceita,
Texto,SubmitButton,
SubmitText,
TextoPerfil
} from './styles';

export default function Receitas() {

    const navigation = useNavigation();

    const { user, signOut } = useContext(AuthContext);
    const uid = user && user.uid;

 return (
   <Container>
       <PesquisarReceita onPress={()=> navigation.navigate('ListaReceitas')}>
        <MaterialIcons name="menu-book" size={24} color="white" />
           <Texto>Minhas Receitas</Texto>
       </PesquisarReceita>

       <AdicionarReceita onPress={()=> navigation.navigate('AddReceitas')}>
        <MaterialIcons name="add-circle-outline" size={24} color="white" />
           <Texto>Adicionar Receitas</Texto>
       </AdicionarReceita>

       <TextoPerfil>
        Olá:  {user && user.nome}
       </TextoPerfil>

       <SubmitButton onPress={ ()=> signOut() }>
        <SubmitText>SAIR</SubmitText>
       </SubmitButton>
   </Container>
  );
}