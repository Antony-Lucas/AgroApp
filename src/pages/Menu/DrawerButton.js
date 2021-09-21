import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Casinha from '../Tasks/';
import Bovinos from '../Tabs/bovinos/';
import Vacinas from '../Vacinas/';
import Vaqueiro from '../Vaqueiro/';
import Controle from '../Controle/';

const Tab = createMaterialBottomTabNavigator();

function DrawerButton(){
    return(
        <Tab.Navigator 
            initialRouteName="Casinha"
            activeColor="#000"
            inactiveColor="rgba(0,0,0,0.3)"
            shifting={true}
            backBehavior={'none'}
            barStyle={{ backgroundColor: '#fff'}}
        >
            <Tab.Screen
                name="Casinha"
                component={Casinha}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name='home' color={color} size={25}/>
                    ),
                  }}
            />

            <Tab.Screen
                name="Bovinos"
                component={Bovinos}
                options={{
                    tabBarLabel: 'Bovinos',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name='cow' color={color} size={25}/>
                    )
                  }}
            />

            <Tab.Screen
                name="Vaqueiro"
                component={Vaqueiro}
                options={{
                    tabBarLabel: 'Vaqueiros',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name='account-cowboy-hat' color={color} size={25}/>
                    )
                  }}
            />

            <Tab.Screen
                name="Controle"
                component={Controle}
                options={{
                    tabBarLabel: 'Controle',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name='controller-classic-outline' color={color} size={25}/>
                    )
                  }}
            />

            <Tab.Screen
                name="Vacinas"
                component={Vacinas}
                options={{
                    tabBarLabel: 'Vacinas',
                    tabBarIcon: ({ color }) => (
                      <FontAwesome5 name='syringe' color={color} size={22}/>
                    )
                  }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
      <DrawerButton />
    );
  }
  