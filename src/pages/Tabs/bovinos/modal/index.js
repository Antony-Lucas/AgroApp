import React from "react";
import { 
    TouchableOpacity, 
    TextInput, 
    Text,
    View,
    Keyboard } 
from "react-native";
import styles from '../style';

const KeyboardAvoidingComponent = () =>{
    return(
        <View style={styles.modal}> 
            <Text style={styles.text}>Cadastrar Bovino</Text>
            <View style={{display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'}}>
                    <TextInput style={styles.inputLong} placeholder="Nome"/>
                    <TextInput style={styles.inputShort} placeholder="Data de nascimento"/>
                    <TextInput style={styles.inputShort} placeholder="Peso(kg)"/>
                    <TextInput style={styles.inputLong} placeholder="Última vacina aplicada"/>
                    <TextInput style={styles.inputShort} placeholder="Data da aplicação"/>
            </View>
            <TouchableOpacity style={styles.btn} onPress={Keyboard.dismiss}>
                <Text style={{ color: '#fff', fontFamily: "VarelaRound_400Regular", }}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default KeyboardAvoidingComponent;