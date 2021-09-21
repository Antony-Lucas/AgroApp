import React, {useState, useEffect} from 'react';
import database from '../../../config/firebaseconfig';
import {Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import styles from './style';
import Dropdown from '../../../components/dropdown/';

export default function Bovinos({ navigation }) {
    const [bezerros, setBezerros] = useState([]);

    useEffect(() =>{
        database.collection("bezerros").onSnapshot((query) => {
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(),id: doc.id})
            })
            setBezerros(list)
        })
    }, [])
    
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>Bovinos</Text>
        <View style={styles.Scriin}>
            <View style={styles.topBar}>
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
                <View style={{top: 20, marginBottom: 30}}>
                    <Dropdown/>
                </View>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={bezerros}
                style={{height: "100%"}}
                renderItem={( { item } )=>{
                return(
                    <View style={styles.Tasks}>
                    {<TouchableOpacity
                        onPress={() => navigation.navigate('ProfileBezerros')}
                        
                    >
                        <MaterialCommunityIcons
                            name="dots-vertical"
                            size={23}
                            color="#6c757d"
                        >
                        </MaterialCommunityIcons>
                        </TouchableOpacity>}
                        <Text
                            style={styles.descriptionList}
                            onPress={()=>
                            navigation.navigate("ProfileBezerros",{
                                id: item.id,
                                name: item.nome,
                            })
                            }
                        >
                        {item.nome}  
                        </Text>  
                    </View>
                    )
                }}
            />
            <TouchableOpacity style={styles.add} onPress={() => navigation.navigate("ModalBovinos")}>
                <MaterialCommunityIcons
                    name="plus"
                    color="#fff"
                    size={24}
                />
            </TouchableOpacity>
        </View>
      </View>
    );
  }