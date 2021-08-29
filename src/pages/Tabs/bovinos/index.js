import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';

export default function Bovinos({ navigation }) {
    return (
      <View style={styles.Container}>
        <View style={styles.Scriin}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Bezerros")}>
                <Text style={styles.Label}>Bezerros</Text>
                <MaterialCommunityIcons
                    name="chevron-right"
                    size={20}
                    color={"#000"}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.Label}>Vacas</Text>
                <MaterialCommunityIcons
                    name="chevron-right"
                    size={20}
                    color={"#000"}
                />
            </TouchableOpacity>
        </View>
      </View>
    );
  }