import React, { useState, useEffect } from 'react';
import { FontAwesome } from "@expo/vector-icons";
import database from '../../config/firebaseconfig';
import styles from './style';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Quit from '../quit/';
import Chart from '../../components/main_chart/';
import ChartOut from '../../components/main_chart_out/';
import PizzaChartIn from '../../components/pizza_chart_in';
import { VarelaRound_400Regular } from '@expo-google-fonts/varela-round';
import { createDrawerNavigator,DrawerItemList} from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text,
    View,
    SafeAreaView ,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';

const Drawer = createDrawerNavigator();

function Tasks({ navigation }){
    const [task, setTask] = useState([]);

    function deleteTask(id){
        database.collection("tarefas").doc(id).delete()
    }

    useEffect(() => {
        database.collection("tarefas").onSnapshot((query)=>{
            const list = [];
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setTask(list);
        });
    }, []);

    let[fontsLoaded, error] = useFonts({
        VarelaRound_400Regular
    })

    if(!fontsLoaded){
        return <AppLoading/>
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.solved}>
                    <Text style={stylesFont.fontVUser}>Olá, Bom dia Usuário</Text>
                </View>
            </View>
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                style={styles.resume_tasks} 
                contentContainerStyle={{height: "150%"}}
            >
                <View>
                    <Text style={stylesFont.fontVtitle}>Resumo da sua fazenda: </Text>
                </View>
                <View style={styles.charts}>
                    <View style={styles.inCharts}>
                        <Chart/>
                        <ChartOut/>
                    </View>
                <View style={styles.pizzaCharts}>
                    <PizzaChartIn/>
                </View>
                <TouchableOpacity style={styles.buttonLink}>
                    <Text style={styles.linkTo}>Ir para Minha fazenda</Text>
                <MaterialCommunityIcons
                    name="chevron-right"
                    size={15}
                    color={"#6c757d"}
                />
                </TouchableOpacity>
                </View>
                    <View>
                        <Text style={stylesFont.fontVtitle2}>Para Hoje</Text>
                    </View>
                        
                    <View style={styles.block}>
                        <View style={styles.progressBar}>
                            <View style={styles.colorPercentage}><Text style={stylesFont.fontProgressp}>0%</Text></View>
                            <Text style={stylesFont.fontProgress}>Controle quinzenal de despesa da fazenda</Text>
                        </View>

                        <View style={styles.progressBar}>
                            <View style={styles.colorPercentage}><Text style={stylesFont.fontProgressp}>0%</Text></View>
                            <Text style={stylesFont.fontProgress}>Verificar Entrada e saída de leite</Text>
                        </View>

                        <View style={styles.progressBar}>
                            <View style={styles.colorPercentage}><Text style={stylesFont.fontProgressp}>0%</Text></View>
                            <Text style={stylesFont.fontProgress}>Pagar funcionários</Text>
                        </View>

                        <View style={styles.progressBar}>
                            <View style={styles.colorPercentage}><Text style={stylesFont.fontProgressp}>0%</Text></View>
                            <Text style={stylesFont.fontProgress}>Gastos com medicamentos</Text>
                        </View>
                    </View>  
            </ScrollView>
        </View>
    );
}

export default function Home(){
    return(
        <Drawer.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    drawerStatusBarAnimation: 'slide',
                    drawerStyle:{
                        width: 280,
                        backgroundColor: '#fff',
                    },
                    headerTransparent: true,
                    headerStyle:{
                        height: 150,
                    },
                    drawerType:"front",
                }}
                drawerContent={(props) => {
                    return(
                        <SafeAreaView style={{ flex: 1 }}>
                            <View
                                style={{
                                    height: 180,
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    marginTop: 20,
                                    marginLeft: 20
                                }}
                            >
                                <Image
                                    source={require("../../assets/user.png")}
                                    style={{height: "36%", width: "25%"}}
                                />
                                <Text style={styles.user}>Usuário</Text>
                            </View>
                            <DrawerItemList {...props} />
                        </SafeAreaView>
                    );
                }}
                >

                <Drawer.Screen 
                    name= "Home" 
                    component={Tasks}
                    options={{
                        title: false,
                        drawerLabel: "Home",
                        drawerIcon: ({focused, size}) => (
                            <MaterialCommunityIcons 
                               name="home"
                               size={size}
                               color={focused ? '#000' : '#ccc'}
                            />
                        ),
                    }} 
                />

                <Drawer.Screen 
                    name= "Quit" 
                    component={Quit}
                    options={{
                        title: false,
                        drawerLabel: "Sair",
                        drawerIcon: ({focused, size}) => (
                            <MaterialCommunityIcons
                               name="door-closed"
                               size={size}
                               color={focused ? '#000' : '#ccc'}
                            />
                        ),
                    }} 
                />
        </Drawer.Navigator>
    );
}

const stylesFont = StyleSheet.create({
    fontV:{
        fontFamily: "VarelaRound_400Regular",
        color: "#fff"
    },

    fontVUser:{
        fontFamily: "VarelaRound_400Regular",
        color: "#fff",
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 33
    },

    fontVtitle:{
        fontFamily: "VarelaRound_400Regular",
        fontSize: 12,
        fontWeight: 'bold',
        color: "#6c757d",
        marginTop: 20,
        marginLeft: 17
    },

    fontVtitle2:{
        fontFamily: "VarelaRound_400Regular",
        fontSize: 12,
        fontWeight: 'bold',
        color: "#6c757d",
        marginLeft: 17,
        bottom: 70
    },

    descriptionTask:{
        fontFamily: "VarelaRound_400Regular",
        fontSize: 12,
        width: "80%",
        marginHorizontal: 15,
        borderRadius: 5,
        marginBottom: 120,
        color: "#6c757d",
        alignItems: "center",
    },

    fontProgress:{
        fontFamily: "VarelaRound_400Regular",
        fontSize: 10,
        color: "#616161",
        width: "100%",
        marginLeft: 25
    },

    fontProgressp:{
        fontFamily: "VarelaRound_400Regular",
        fontSize: 10,
        color: "#616161",
        width: "100%",
    },

    fontShortcuts:{
        fontFamily: "VarelaRound_400Regular",
        fontSize: 9,
        color: "#6c757d",
        marginTop: 5
    }
})