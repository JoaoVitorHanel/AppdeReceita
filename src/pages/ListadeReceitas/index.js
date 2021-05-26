import React, { useState, useEffect, useRef,useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Keyboard,ScrollView, ActivityIndicator} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from '../../services/firebaseConnection';
import {useNavigation} from '@react-navigation/native';
import List from './List';
import {AuthContext} from '../../contexts/auth';
import { Background } from './styles';

console.disableYellowBox=true;

export default function ListaDeReceitas() {

  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const inputRef = useRef(null);
  const [list, setList] = useState([]);
  const [key, setkey] = useState('');

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  function Navegar(){
    navigation.navigate('Adicionar')
  };

  function updateList(searchValue) {

    setSearch(searchValue);

    if (searchValue) {
        const currentList = [...list];

        currentList.sort((itemA, itemB) => {
            searchValue = searchValue.toLowerCase();
            let a = itemA.nome.toLowerCase();
            let b = itemB.nome.toLowerCase();

            if (a.includes(searchValue) && b.includes(searchValue)) {
                return a.indexOf(searchValue) - b.indexOf(searchValue);
            } else if (a.includes(searchValue))
                return -1;
            else if (b.includes(searchValue))
                return 1;
            else
                return 0;
        });

        setList(currentList);
    }
 }

 useEffect(()=> {

  async function loadList(){
    await firebase.database().ref('receitasclientes').child(uid).on('value', (snapshot)=>{
        setList([]);
  
        snapshot.forEach((childItem)=>{
        let data = {
          key: childItem.key,
          nome: childItem.val().Nome,
          ingredientes: childItem.val().Ingredientes,
          preparo: childItem.val().Mododepreparo,
          tempo: childItem.val().Tempodepreparo

          
        };

        setList(oldArray => [...oldArray, data].reverse());
      })

      setLoading(false)

    });
  }

  loadList();

 }, []);

 async function handleDelete(key){
    await firebase.database().ref('receitasclientes').child(uid).child(key).remove();
  }

 function handleEdit(data){
   setList(data.nome);
   setkey(data.key);
   inputRef.current.focus();
 }

 return (
   <ScrollView>
    <Background>
     <View style={styles.searchContainer}>
            <MaterialIcons name="search" size={24} color="black" />
            <TextInput
                style={{marginLeft: 5, fontSize: 20, flexGrow: 5}}
                value={search}
                onChangeText={e => updateList(e)}
                 />  
     </View>

    {loading ?
    (
    <ActivityIndicator color="#121212" size={45} marginTop={10}/>
    ) :
    (
      <FlatList
    data={list}
    keyExtractor={item => item.key}
    renderItem={ ({ item }) => (
      <List data={item} deleteItem={handleDelete} editItem={handleEdit} />
    ) }
    />
    )
    }

   </Background>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 25,
  },
  containerTask:{
    flexDirection: 'row'
  },
  input:{
    flex:1,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 40,
    fontSize: 17
  },
  buttonAdd:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#121212',
    paddingLeft: 14,
    paddingRight:14,
    marginLeft: 5,
  },
  buttonText:{
    fontSize: 23,
    color: '#FFF'
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,

    marginBottom: 5
},

});
