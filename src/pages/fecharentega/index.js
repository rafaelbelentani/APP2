import { BackgroundImage } from 'react-native-elements/dist/config';
import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { StyleSheet} from 'react-native';

export default function Fecharentrega({navigation}) {

        navigation.navigate("Fechar Entrega");

        return (
                <View style={styles.screen}>  
            
                <BackgroundImage
                source={require('../Login/logo.png')}
                style={styles.logo} 
                resizeMode='contain'
                />

                </View>
);
}



const styles = StyleSheet.create({

        screen: {
        flex: 1,    
        alignItems: 'center',
        },
    
        logo: {
        width: 200,
        height: 200,
        },
    
              
    
    });
