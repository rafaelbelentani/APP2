import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Image } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PaginaPrincipal({navigation}) {
  

    const botao2 = () => {
      navigation.navigate("CS")
    }
  

    const logout = (navigation) => {
      AsyncStorage.removeItem("TOKEN")
      navigation.reset({
        index: 0,
        routes: [{name: "Login"}]
  
      })
    }

  return (
    <View style={styles.screen}>

<BackgroundImage
            source={require('../logo.png')}
            style={styles.logo} 
            resizeMode='contain'
             />
  

    
      <View style={styles.container2}>
      <TouchableOpacity
         onPress={ () => {botao2 ()} }
        style={styles.roundButton2}
      >
        <Image style={styles.imagem2} source={require('../../../assets/apont.png')} />
        <Text style={styles.texto1}>CS</Text>
      </TouchableOpacity>

 
      <TouchableOpacity
         onPress={ () => {logout (navigation)} }
        style={styles.roundButton2}
      >
        <Image style={styles.imagem2} source={require('../../../assets/sair.png')} />
        <Text style={styles.texto1}>Sair</Text>
      </TouchableOpacity>

      
            </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,    
    alignItems: 'center',
  },  

  roundButton2: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    borderRadius: 100,    
    marginTop: 100,    
  },

  logo: {
    width: 200,
    height: 200,
    },

    imagem: {
      width: 100,
      height: 100,
      padding: 50,
      
    },

    imagem2: {
      width: 100,
      height: 100,
      padding: 50,
      
            
    },
    
    texto1:{
      marginTop: 5,
    },

    container2:{

    },


});