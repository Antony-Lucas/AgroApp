import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './style';

export default function Cowboy({ navigation }) {
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>Vaqueiros</Text>
        <View style={styles.Scriin}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("gerVaqueiro")}>
                <FontAwesome5 name="hat-cowboy" size={40} color="#eae4e9"/>
                <Text style={styles.Label}>Gerenciar vaqueiros</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FreqVaqueiros")}>
                <FontAwesome5 name="clipboard-list" size={40} color="#cddafd"/>
                <Text style={styles.Label}>Frequência</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FreqVaqueiros")}>
                <FontAwesome5 name="clipboard-list" size={40} color="#cddafd"/>
                <Text style={styles.Label}>Adiantamentos</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }