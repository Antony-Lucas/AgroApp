import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tasks from './src/pages/Tasks/';
import ProfileBezerros from './src/pages/Tabs/PerfilBezerros/';
import ProfileVacas from './src/pages/Tabs/perfilVacas/';
import ProfileVaqueiros from './src/pages/Tabs/perfilVaqueiro';
import DrawerButton from './src/pages/Menu/DrawerButton';
import gerVaqueiros from './src/pages/Tabs/gerVaqueiro/';
import FreqVaqueiros from './src/pages/Tabs/freqVaqueio/';
import Details from './src/pages/Details/';
import Modal from './src/pages/Tabs/gerVaqueiro/modal/';
import ModalBovinos from './src/pages/Tabs/bovinos/modal/';
import ModalVaqueiros from './src/pages/Tabs/perfilVaqueiro/modal/'

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
          name="ProfileVacas"
          component={ProfileVacas}
          options={{
            title: false,
            headerTintColor: "#fff",
            headerTransparent: true
          }}
        />

        <Stack.Screen
          name="ProfileVaqueiros"
          component={ProfileVaqueiros}
          options={{
            title: false,
            headerTintColor: "#6c757d",
            headerTransparent: true
          }}
        />

        <Stack.Screen
          name="gerVaqueiro"
          component={gerVaqueiros}
          options={{
            title: false,
            headerTintColor: "#6c757d",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="FreqVaqueiros"
          component={FreqVaqueiros}
          options={{
            title: false,
            headerTintColor: "#a0c4ff",
            headerTransparent: true
          }}
        />

        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{
            title: false,
            headerTintColor: "#fff",
            headerTransparent: true,
            presentation: 'transparentModal',
            cardOverlayEnabled: true
          }}
        />

        <Stack.Screen
          name="ModalBovinos"
          component={ModalBovinos}
          options={{
            title: false,
            headerTintColor: "#fff",
            headerTransparent: true,
            presentation: 'transparentModal',
            cardOverlayEnabled: true
          }}
        />

        <Stack.Screen
          name="ModalVaqueiros"
          component={ModalVaqueiros}
          options={{
            title: false,
            headerTintColor: "#fff",
            headerTransparent: true,
            presentation: 'transparentModal',
            cardOverlayEnabled: true
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