import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../Bezerros/style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Cadastrar(){
    return(
        <View style={styles.container}>
            <View style={styles.grid}>
                <Text style={styles.title}>dados de cadastro do Bezerro</Text>
                <View style={styles.camp}>
                    <Text style={styles.inputLabel}>Nome</Text>
                    <TextInput 
                        style={styles.inputTextLong}
                        /*onChangeText={
                            setDescription
                        }
                        value={description}*/
                        // Altera elemento no firebase
                    />
                </View>
                <View style={styles.camp}>
                    <Text style={styles.inputLabel}>Data de Nascimento</Text>
                    <TextInput 
                        style={styles.inputText}
                        /*onChangeText={
                            setDescription
                        }
                        value={description}*/
                        // Altera elemento no firebase
                    />
                </View>
                <View style={styles.camp}>
                    <Text style={styles.inputLabel}>Peso do bezerro</Text>
                    <TextInput 
                        style={styles.inputText}
                        /*onChangeText={
                            setDescription
                        }
                        value={description}*/
                        // Altera elemento no firebase
                    />
                </View>
                <View style={styles.camp}>
                    <Text style={styles.inputLabel}>Mãe do bezerro</Text>
                    <TextInput 
                        style={styles.inputText}
                        /*onChangeText={
                            setDescription
                        }
                        value={description}*/
                        // Altera elemento no firebase
                    />
                </View>
                <Text style={styles.title}>dados de vacinação</Text>
                <View style={styles.camp}>
                    <Text style={styles.inputLabel}>Data da última aplicação</Text>
                    <TextInput 
                        style={styles.inputText}
                        /*onChangeText={
                            setDescription
                        }
                        value={description}*/
                        // Altera elemento no firebase
                    />
                </View>
                <View style={styles.camp}>
                    <Text style={styles.inputLabel}>Nome da última aplicação</Text>
                    <TextInput 
                        style={styles.inputText}
                        /*onChangeText={
                            setDescription
                        }
                        value={description}*/
                        // Altera elemento no firebase
                    />
                </View>
            </View>
            <TouchableOpacity
                style={styles.save}
                /*onPress={()=>{ addTask() }}*/
            >
                <Text style={styles.colorSave}>Salvar</Text>
                <MaterialCommunityIcons name="arrow-right" size={24} color="#bdb2ff"/>
            </TouchableOpacity>
        </View>
    );
}
