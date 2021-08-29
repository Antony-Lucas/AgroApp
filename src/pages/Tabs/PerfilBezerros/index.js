import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../Bezerros/style';

export default function Profile(){
    return(
        <View style={styles.bannerHeader}>
            <Image
                style={styles.bgImage}
                source={require("../../../assets/Background.jpg")}
            />
            <View style={styles.bannerProfile}>
                <Image 
                    source={require("../../../assets/bezerro-faze.-Elge-640x439.jpg")}
                    style={styles.profile}
                />
                <Text style={styles.labelProfile}>Isackk</Text>
            </View>
            <View style={styles.bannerBody}>
                <View style={styles.bannerData}>
                    <Text style={styles.bannerLabels}>Nome</Text>
                    <TextInput
                        style={styles.bannerInputsLong}
                        placeholder={"Bezerro1"}
                    />
                </View>

                <View style={styles.bannerData}>
                    <Text style={styles.bannerLabels}>Data de Nascimento</Text>
                    <TextInput
                        style={styles.bannerInputs}
                        placeholder={"05/04/2021"}
                    />
                </View>

                <View style={styles.bannerData}>
                    <Text style={styles.bannerLabels}>Peso(Kg)</Text>
                    <TextInput
                        style={styles.bannerInputs}
                        placeholder={"50"}
                    />
                </View>

                <View style={styles.bannerData}>
                    <Text style={styles.bannerLabels}>Nome da mãe</Text>
                    <TextInput
                        style={styles.bannerInputsLong}
                        placeholder={"Netinha"}
                    />
                </View>
                <View style={styles.bannerData}>
                    <Text style={styles.bannerLabels}>última Vacina aplicada</Text>
                    <TextInput
                        style={styles.bannerInputs}
                        placeholder={"05/08/2021"}
                    />
                </View>

                <View style={styles.bannerData}>
                    <Text style={styles.bannerLabels}>Nome da vacina</Text>
                    <TextInput
                        style={styles.bannerInputs}
                        placeholder={"Vacina"}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.bannerIcon}>
                    <MaterialCommunityIcons
                        name="content-save-outline"
                        color={"#fff"}
                        size={25}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}