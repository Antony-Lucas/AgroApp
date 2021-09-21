import React ,{useState, useEffect}from 'react';
import {Text, View, TouchableOpacity, FlatList, TextInput} from 'react-native';
import database from '../../../config/firebaseconfig';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import styles from './style';

export default function gerVaqueiro({ navigation }){
    const [vaqueiro, setvaqueiro] = useState([]);

    useEffect(() =>{
      database.collection("vaqueiros").onSnapshot((query) =>{
        const list = []
        query.forEach((doc)=>{
          list.push({...doc.data(),id: doc.id})
        })
        setvaqueiro(list)
      })
    }, [])
    return(
        <View style={styles.Container}>
            <Text style={styles.Title}>Gerenciar vaqueiros</Text>
            <View style={styles.gridList}>
                <View style={styles.searchBar}>
                <Entypo
                    name={"magnifying-glass"}
                    color={"#616161"}
                    size={20}
                    style={{paddingHorizontal: 5}}
                />
                <TextInput
                    placeholder={"Pesquisar"}
                />
                </View>
                <FlatList
                    showsVerticalScrollIndicator={true}
                    data={vaqueiro}
                    renderItem={( { item } )=>{
                        return(
                        <View style={styles.listCowB}>
                            {<TouchableOpacity
                            onPress={() => navigation.navigate("ProfileVaqueiros")}
                            >
                            <MaterialCommunityIcons
                                name={"dots-vertical"}
                                size={23}
                                color={"#6c757d"}
                            >
                            </MaterialCommunityIcons>  
                            </TouchableOpacity>
                            }
                            <Text
                            style={styles.descriptionList}
                            onPress={() => {
                                navigation.navigate("ProfileVaqueiros", {
                                id: item.id,
                                name: item.nome,
                                })
                            }}
                            >
                            {item.nome}
                            </Text>
                        </View>
                        )
                    }}
                />
            </View>
            <TouchableOpacity style={styles.add} onPress={() => navigation.navigate("Modal")}>
                <MaterialCommunityIcons
                    name="account-plus"
                    color="#fff"
                    size={24}
                />
            </TouchableOpacity>
        </View>
    )
}