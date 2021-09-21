import React from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';
import styles from '../style';
import DropV from '../../../../components/drop_Vaqueiros/index';

export default function(){
    return(
        <View style={styles.containerModal}>
            <View style={styles.modal}>
                <View style={styles.indicator} />

                <Text style={styles.text}>Cadastrar vaqueiro</Text>
                <TextInput style={styles.inputName} placeholder="Nome"/>
                <View style={{display: 'flex', flexDirection: 'row', alignItems:'center', top: 15}}>
                    <Text>Dia da semana: </Text>
                    <DropV/>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: '#fff', fontFamily: "VarelaRound_400Regular", }}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}