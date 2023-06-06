import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Image } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';


export default function PaginaPrincipal({navigation}) {
  const botao1 = () => {
    navigation.navigate("Check List")};

    const botao2 = () => {
      navigation.navigate("Apontamento")
    }
  

  return (
    <View style={styles.screen}>

<BackgroundImage
            source={require('../logo.png')}
            style={styles.logo} 
            resizeMode='contain'
             />
  

    <TouchableOpacity
         onPress={ () => {botao1 ()} }
        style={styles.roundButton1}
      >
        <Image style={styles.imagem} source={require('../Login/botao1.png')} />
        <Text style={styles.texto1}>Check List</Text>
      </TouchableOpacity>

      <TouchableOpacity
         onPress={ () => {botao2 ()} }
        style={styles.roundButton2}
      >
        <Image style={styles.imagem2} source={require('../../../assets/apont.png')} />
        <Text style={styles.texto1}>Apontamento</Text>
      </TouchableOpacity>

   
    </View>
  );
}

const styles = StyleSheet.create({


  screen: {
    flex: 1,
    
    alignItems: 'center',
  },

  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    
    marginBottom: 50,
    marginTop: 70,
  },

  roundButton2: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    borderRadius: 100,
    
    marginTop: 50,
    
  },

  logo: {
    width: 200,
    height: 200,
    },

    imagem: {
      width: 100,
      height: 100,
      padding: 50,
      marginTop: 20,
    },

    imagem2: {
      width: 100,
      height: 100,
      padding: 50,
      marginTop: 20,
      
    },
    
    texto1:{
      marginTop: 5,

    },


});