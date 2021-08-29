import React from 'react';
import { ViewBase, image, Text, Image } from 'react-native';

export default function Profile(){
    return(
        <View>
            <Image 
                source={require('../../assets/user.png')}
            />
            <Text>Usuário</Text>
        </View>
    );
}