import  React, {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import database from '../../../config/firebaseconfig';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../Bezerros/style';


export default function DetalhesB({ navigation }){
    const [bezerros, setBezerros] = useState([])

    useEffect(() =>{
        database.collection("bezerros").onSnapshot((query) => {
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(),id: doc.id})
            })
            setBezerros(list)
        })
    }, [])
    
    return(
        <View style={styles.container}>
            <View style={styles.gridD}>
                <Text style={styles.title}>Listagem de Bezerros</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={bezerros}
                    renderItem={( { item } )=>{
                    return(
                        <View style={styles.Tasks}>
                            {<TouchableOpacity
                                onPress={() => navigation.navigate('ProfileBezerros')}
                            >
                                <MaterialCommunityIcons
                                    name="dots-vertical"
                                    size={23}
                                    color="#000"
                                >
                                </MaterialCommunityIcons>
                            </TouchableOpacity>}
                            <Text
                                style={styles.DescriptionTask}
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
            </View>
        </View>
    );
}