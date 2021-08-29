import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tasks from './src/pages/Tasks/';
import Bezerros from './src/pages/Bezerros/';
import ProfileBezerros from './src/pages/Tabs/PerfilBezerros/';
import DrawerButton from './src/pages/Menu/DrawerButton';
import Details from './src/pages/Details/';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerButton">
        <Stack.Screen
          name="DrawerButton"
          component={DrawerButton}
          options={{
            title: false,
            headerStyle:{
              height: 0,
              backgroundColor: "#6EACFF"
            }
          }}
        />

        <Stack.Screen
          name="Tarefa"
          component={Tasks}
          options={{
            title: false,
            headerStyle:{
              height: 0,
              backgroundColor: "#6EACFF"
            }
          }}
        />

        <Stack.Screen
          name="Bezerros"
          component={Bezerros}
          options={{
            title: false,
            headerTintColor:"#bdb2ff",
            headerTransparent: true,
            headerShown: true
          }}
          
        />

        <Stack.Screen
          name="ProfileBezerros"
          component={ProfileBezerros}
          options={{
            title: false,
            headerTintColor:"#fff",
            headerTransparent: true,
            headerShown: true
          }}
          
        />

        <Stack.Screen
          name="Detalhes"
          component={Details}
          options={{
            headerTintColor:"#6EACFF"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}