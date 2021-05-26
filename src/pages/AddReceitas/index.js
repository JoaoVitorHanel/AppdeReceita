import React,{useState,useContext} from 'react';
import { View, Alert} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import {AuthContext} from '../../contexts/auth';
import 
{
Container,
Items,
Item,
AdicionarReceita,
Texto,
TextoReceita
}
from './styles';

export default function AddReceitas() {

    const navigation = useNavigation();

    const { user: usuario } = useContext(AuthContext);

    const [nome,setNome] = useState('');
    const [ingredientes,setIngredientes] = useState('');
    const [mododepreparo,setMododepreparo] = useState('');
    const [tempodepreparo,setTempodepreparo] = useState('');

    async function Verificacao(){

        if(nome == ''){
            Alert.alert('Atenção:','Preencha todos os campos!')
            return;
          };
        if(ingredientes == ''){
            Alert.alert('Atenção:','Preencha todos os campos!')
            return;
          };
        if(mododepreparo == ''){
            Alert.alert('Atenção:','Preencha todos os campos!')
            return;
          };
        if(tempodepreparo == ''){
            Alert.alert('Atenção:','Preencha todos os campos!')
            return;
          };     


  
            Alert.alert(
              "Atenção:",
              "Você realmente deseja adicionar a receita ?",
              [
                {
                  text: 'Cancelar',
                  style: 'cancel'
                },
                {
                  text: 'SIM',
                  onPress: () => Receitaadd()
                }
              ]
            ); 
      }

      async function Receitaadd(){
        let uid = usuario.uid;

        let key = await firebase.database().ref('receitas').child(uid).push().key;
        await firebase.database().ref('receitasclientes').child(uid).child(key).set({
            Nome: nome,
            Ingredientes: ingredientes,
            Tempodepreparo: tempodepreparo,
            Mododepreparo: mododepreparo
        });

        Alert.alert(
            "Receita:",
            "Receita adicionada com sucesso !",
            [
              {
                text: 'Ok',
              }
            ]
          );

          navigation.navigate('Receitas')

          setIngredientes(''),
          setMododepreparo(''),
          setNome(''),
          setTempodepreparo('')


      }


 return (
   <Container>

       <Texto>Adicionar Receita</Texto>


        <Items>
            <Item
            multiline numberOfLines={2} placeholder="Nome da receita"autoCorrect={false}autoCapitalize="none"onChangeText={ (text) => setNome(text) }
            />
            <Item
            multiline numberOfLines={4} placeholder="Ingredientes"autoCorrect={false}autoCapitalize="none"onChangeText={ (text) => setIngredientes(text) }
            />
            <Item
            multiline numberOfLines={4} placeholder="Modo de Preparo"autoCorrect={false}autoCapitalize="none"onChangeText={ (text) => setMododepreparo(text) }
            />
            <Item
            multiline numberOfLines={2} placeholder="Tempo para fazer"autoCorrect={false}autoCapitalize="none"onChangeText={ (text) => setTempodepreparo(text) }
            />
        </Items>

       <AdicionarReceita onPress={()=> Verificacao()}>
            <MaterialIcons name="menu-book" size={24} color="white" />
                <TextoReceita>Adicionar Receita</TextoReceita>
       </AdicionarReceita>

   </Container>
  );
}