import React, { useState } from 'react';
import { Text, View, Alert, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';

export default function Login({navigation}) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  
  const entrar = () => {
    navigation.navigate("Pagina Principal")
 }
  


  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  const senha = () => {
    navigation.navigate("Recuperar")
  }
  

  return (
    <View style={styles.container}>

      <BackgroundImage
            source={require('./logo.png')}
            style={styles.logo} 
            resizeMode='contain'
             />
      
        <Input 
            
              placeholder= 'E-mail'
              leftIcon={{ type: 'font-awesome', name: 'envelope'}}
              onChangeText={value => setEmail(value)}
            />
            <Input 
              
              placeholder= 'Senha'
              style={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'lock'}}
              onChangeText={value => setPassword(value)}
              secureTextEntry={true}
              />

            <TouchableOpacity
             style={styles.botao}
             onPress={ () => {entrar ()} }
            >
            <Text style={styles.botaoText} >Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={styles.botao2}
             onPress={ () => {senha ()} }
            >
            <Text style={styles.botao2} >Esqueci a senha</Text>
            </TouchableOpacity>

           

            <TouchableOpacity
             style={styles.cadastrar}
             onPress={ () => {cadastrar ()} }
            >
            <Text style={styles.botaoText} >Cadastrar</Text>
            </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
      container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      },

  logo: {
    width: 200,
    height: 200,
    },
    
 
    botao: {
      width: 300,
      height: 42,
      backgroundColor: '#1E90FF',
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      
    },

    botao2:{
      marginTop: 5,
      textDecorationLine: 'underline',
      color: '#778899'
    },


    botaoText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
    },

    cadastrar: {
      width: 300,
      height: 42,
      backgroundColor: '#1E90FF',
      marginTop: 50,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
});