import React from 'react';
import {
    View, 
    Text, 
    TextInput, 
    FlatList, 
    ScrollView, 
    TouchableOpacity} from 'react-native';
import styles from './style';

export default function ProfileCowboy({ navigation }){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Editar</Text>
            <View style={styles.content}>
                <View style={styles.block}>
                    <Text style={styles.indicator}>Nome</Text>
                    <TextInput style={styles.inputs} placeholder="Vaqueiro1"/>
                    <Text style={styles.indicator}>Contato</Text>
                    <TextInput style={styles.inputs} placeholder="(91) 9 98765-4321"/>
                </View>
                <View style={[styles.block, {top: 15}]}>
                    <Text style={styles.indicator}>Adiantamento</Text>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.d}>Valor R$:</Text>
                        <TextInput style={{
                            fontSize: 12, 
                            color:"#6c757d",
                            width: "50%",
                            fontFamily: "VarelaRound_400Regular",}} 
                            placeholder="0,00"/>
                    </View>
                </View>
                <View style={[styles.block, {top: 30}]}>
                    <Text style={styles.indicator}>Histórico</Text>
                    <ScrollView>
                        <TouchableOpacity onPress={() => navigation.navigate("ModalVaqueiros")}>
                            <Text style={styles.d}>Adiantamento de R$105,00 no dia 11/09/2021</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.d}>Adiantamento de R$145,00 no dia 25/08/2021</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.d}>Adiantamento de R$110,00 no dia 02/07/2021</Text>
                            <Text style={{color: "green", fontSize: 10}}>PG</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={[styles.block, {top: 45}]}>
                    <Text style={styles.indicator}>Vaqueiro1 Está te devendo no total:</Text>
                    <Text style={styles.d}>R$250,00</Text>
                </View>
            </View>
        </View>
    )
}