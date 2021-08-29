import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Animated, TouchableOpacity } from 'react-native';
import styles from './style';
import { AntDesign,  MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

class FabButton extends React.Component{
    animation = new Animated.Value(0);

    toggleMenu = () =>{
        const toValue = this.open ? 0 : 1;
        Animated.spring(this.animation, {
            toValue,
            friction: 6,
            useNativeDriver: true
        }).start();

        this.open = !this.open;
    }

    render(){
        const Name = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -320]
                    })
                }
            ]
        }

        const Control = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -270]
                    })
                }
            ]
        }

        const CowBoy = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -220]
                    })
                }
            ]
        }

        const Cows = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -170]
                    })
                }
            ]
        }

        const Milk = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -120]
                    })
                }
            ]
        }

        const Cowzin = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -70]
                    })
                }
            ],
        }

        const rotation = {
            transform: [{
                rotate: this.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "45deg"]
                })
            }]
        }
        
        const { navigation } = this.props;

        return(
            <View style={styles.buttonPlus}>
                {<TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.submenu, Name]}>
                        <MaterialCommunityIcons name="file-search-outline" size={25} color="#fff" style={styles.icon}/>
                        <Text style={styles.fontMain}>Nome das Vacas</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>}
    
                <TouchableWithoutFeedback >
                    <Animated.View style={[styles.button, styles.submenu, Control]}>
                        <MaterialCommunityIcons name="cow" size={25} color="#fff" style={styles.icon}/>
                        <Text style={styles.fontMain}>Controle Diário</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
    
                <TouchableWithoutFeedback >
                    <Animated.View style={[styles.button, styles.submenu, CowBoy]}>
                        <MaterialCommunityIcons name="account-cowboy-hat" size={25} color="#fff" style={styles.icon}/>
                        <Text style={styles.fontMain}>Vaqueiro</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
    
                <TouchableWithoutFeedback >
                    <Animated.View style={[styles.button, styles.submenu, Cows]}>
                        <MaterialCommunityIcons name="cow" size={25} color="#fff" style={styles.icon}/>
                        <Text style={styles.fontMain}>vacas</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
    
                <TouchableWithoutFeedback >
                    <Animated.View style={[styles.button, styles.submenu, Milk]}>
                        <MaterialCommunityIcons name="glass-pint-outline" size={25} color="#fff" style={styles.icon}/>
                        <Text style={styles.fontMain}>Leite</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
    
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Bezerros')}>
                    <Animated.View style={[styles.button, styles.submenu, Cowzin]}>
                        <MaterialCommunityIcons name="cow" size={25} color="#fff" style={styles.icon}/>
                        <Text style={styles.fontMain}>Bezerros</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
    
                <TouchableWithoutFeedback  onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <AntDesign name="plus" size={20} color="#fff"/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default function(props){
    const navigation = useNavigation();

    return<FabButton {...props} navigation={navigation}/>
}