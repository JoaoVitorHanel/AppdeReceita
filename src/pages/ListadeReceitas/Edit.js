import React,{useState,useContext} from 'react';
import { Alert} from 'react-native';
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
TextoReceita,
DeletarReceita
} from '../AddReceitas/styles';


export default function EditarReceita({route,navigation}){
    const navegar = useNavigation()
    
    console.log(route.params)

    const { user: usuario } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const uid = user && user.uid;

    const [nome,setNome] = useState(route.params.nome);
    const [ingredientes,setIngredientes] = useState(route.params.ingredientes);
    const [mododepreparo,setMododepreparo] = useState(route.params.preparo);
    const [tempodepreparo,setTempodepreparo] = useState(route.params.tempo);

    async function VericarDelete(){
        
        Alert.alert(
            "Atenção:",
            "Você realmente deseja deletar essa receita ?",
            [
              {
                text: 'Cancelar',
                style: 'cancel'
              },
              {
                text: 'SIM',
                onPress: () => Delete()
              }
            ]
          ); 
      }
    async function Delete(){
        await firebase.database().ref('receitasclientes').child(uid).child(route.params.key).remove();
        navegar.navigate('Receitas')
    } 

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
              "Você realmente deseja editar essa receita ?",
              [
                {
                  text: 'Cancelar',
                  style: 'cancel'
                },
                {
                  text: 'SIM',
                  onPress: () => Receitaedit()
                }
              ]
            ); 
      }

      async function Receitaedit(){
        let uid = usuario.uid;

        await firebase.database().ref('receitasclientes').child(uid).child(route.params.key).update({
            Nome: nome,
            Ingredientes: ingredientes,
            Tempodepreparo: tempodepreparo,
            Mododepreparo: mododepreparo
        });

        Alert.alert(
            "Receita:",
            "Receita editada com sucesso !",
            [
              {
                text: 'Ok',
              }
            ]
          );

          navigation.navigate('Receitas')


      }


 return (
   <Container>

       <Texto>Editar Receita</Texto>


        <Items>
            <Item
            value={nome}multiline numberOfLines={2} placeholder="Nome da receita"autoCorrect={false}autoCapitalize="none" onChangeText={ (text) => setNome(text) }
            />
            <Item
            value={ingredientes}multiline numberOfLines={4} placeholder="Ingredientes"autoCorrect={false}autoCapitalize="none"onChangeText={ (text) => setIngredientes(text) }
            />
            <Item
            value={mododepreparo}multiline numberOfLines={4} placeholder="Modo de Preparo"autoCorrect={false}autoCapitalize="none"onChangeText={ (text) => setMododepreparo(text) }
            />
            <Item
            value={tempodepreparo}multiline numberOfLines={2} placeholder="Tempo para fazer"autoCorrect={false}autoCapitalize="none"onChangeText={ (text) => setTempodepreparo(text) }
            />
        </Items>

       <AdicionarReceita onPress={()=> Verificacao()}>
            <MaterialIcons name="menu-book" size={24} color="white" />
                <TextoReceita>Editar Receita</TextoReceita>
       </AdicionarReceita>
       
       <DeletarReceita onPress={ ()=> VericarDelete() }>
                <MaterialIcons name="delete" size={24} color="white" />
       </DeletarReceita>

   </Container>
  );
}