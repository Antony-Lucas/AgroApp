import React, {useState, useEffect}  from 'react';
import {Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import database from '../../../config/firebaseconfig';
import { Entypo} from '@expo/vector-icons';
import styles from './style';

export default function FreqVaqueiro({ navigation }){
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
            <Text style={styles.Title}>Frequência</Text>
            <Text style={styles.subTitle}>Dia da semana</Text>
            <View style={styles.gridList}>
                <FlatList
                    showsVerticalScrollIndicator={true}
                    data={vaqueiro}
                    renderItem={( { item } )=>{
                        return(
                        <View style={styles.listCowB}>
                            {<TouchableOpacity
                            onPress={() => navigation.navigate("FreqVaqueiros")}
                            >
                            <MaterialCommunityIcons
                                name={"dots-vertical"}
                                size={23}
                                color={"#000"}
                            >
                            </MaterialCommunityIcons>  
                            </TouchableOpacity>
                            }
                            <Text
                            style={styles.descriptionList}
                            onPress={() => {
                                navigation.navigate("FreqVaqueiros", {
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
        </View>
    )
}