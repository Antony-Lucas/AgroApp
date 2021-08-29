import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Cadastro from '../Tabs/cadastroBezerros/';
import Listar from '../Tabs/detalhesBezerros/';

const Tab = createMaterialBottomTabNavigator ();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Cadastro"
      activeColor="#000"
      inactiveColor="rgba(0,0,0,0.3)"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{
          tabBarLabel: 'Cadastro',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='playlist-plus' color={color} size={25}/>
          ),
        }}
      />
      <Tab.Screen 
        name="listar" 
        component={Listar} 
        options={{
          tabBarLabel: 'Listar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='format-list-bulleted' color={color} size={25}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <MyTabs />
  );
}
