import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const icons = {
    Home: {
      name: 'home'
    },
    Receitas: {
      name: 'menu-book'
    },
  };


import Home from '../pages/Home';
import Receitas from '../pages/Receitas';
import AddReceitas from '../pages/AddReceitas';
import ListaDeReceitas from '../pages/ListadeReceitas';
import Perfil from '../pages/Perfil';
import EditarReceita from '../pages/ListadeReceitas/Edit';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs(){
    return(
        <Tab.Navigator
        screenOptions={ ({route}) => ({
          tabBarIcon: ({ color, size}) => {
            const { name } = icons[route.name];
            return <MaterialIcons name={name} color={color} size={size} />
          } 
        }) }
        tabBarOptions={{
          style:{
            backgroundColor: '#FFF',
            height: 50,
          },
          activeTintColor: '#ad0005',
          inactiveTintColor: '#000'        
        }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Receitas" component={Receitas} />
        </Tab.Navigator>
    );

}

export default function AppRoutes(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="AddReceitas" component={AddReceitas} options={{ headerShown: false }} />
        <Stack.Screen name="ListaReceitas" component={ListaDeReceitas} options={{ headerShown: false }} />
        <Stack.Screen name="EditarReceita" component={EditarReceita} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}


