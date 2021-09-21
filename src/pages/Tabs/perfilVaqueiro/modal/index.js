import React from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';
import styles from '../style';

export default function(){
    return(
        <View style={styles.containerModal}>
            <View style={styles.modal}>
                <Text style={styles.text}>Alterar status do adiantamento para pago?</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: '#fff', fontFamily: "VarelaRound_400Regular", }}>Sim, Alterar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2}>
                        <Text style={{ color: '#fff', fontFamily: "VarelaRound_400Regular", }}>Não, Manter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}