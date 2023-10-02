import React, { useEffect, useState } from 'react';
import { Text, View, Alert, Image, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import usuarioService from '../../services/UsuarioService';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

export default function Login({navigation}) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [isLoadingToken, setLoadingToken] = useState(true)
  
  const entrar = () => {
    let data = {      
      username: email,
      password: password,
    }

  usuarioService.login(data)
  .then((response) => {
    setLoading(false)
    navigation.reset({
      index: 0,
      routes: [{name: "Pagina Principal"}]
    })   
  })
  .catch((error) => {
    setLoading(false)
    Alert.alert("Erro", "Usuário Inválido.")    
  })   
 }


 const logarComToken = (token) => {
  setLoadingToken(true)
  let data = {      
    token: token
  }

usuarioService.loginToken(data)
.then((response) => {
  setLoadingToken(false)
  navigation.reset({
    index: 0,
    routes: [{name: "Pagina Principal"}]
  })   
})
.catch((error) => {
  setLoadingToken(false)     
})   
}

  useEffect(() => {
    AsyncStorage.getItem("TOKEN").then((token) =>{
      logarComToken(token)
      console.log(token)

    })
    
  }, [])  


  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS == "ios" ? "padding": "height"}
    style = {[styles.container]}
    keyboardVerticalOffset={80}
    >

<ScrollView style={[styles.container2]} >



{isLoadingToken &&
  <Text>Carregando...</Text>
  }

    {!isLoadingToken &&
    <>



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


            { isLoading &&
              <ActivityIndicator />
            }

            { !isLoading &&
            <TouchableOpacity
             style={styles.botao}
             onPress={ () => {entrar ()} }
            >
            <Text style={styles.botaoText} >Login</Text>
            </TouchableOpacity>            
            }            

            </>
    }      
    
    </ScrollView>
    </KeyboardAvoidingView>


  );
}

const styles = StyleSheet.create({
      container: {
      flex: 1,      
      padding: 15,
      },

      container2: {
        width: '105%',
        
        },
   
  

  logo: {
    width: 200,
    height: 200,
    marginBottom: 100,
    alignSelf: 'center',
    },
    
 
    botao: {
      width: 300,
      height: 42,
      backgroundColor: '#1E90FF',
      marginTop: 30,
      borderRadius: 4,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },

    botao2:{
      marginTop: 5,
      textDecorationLine: 'underline',
      color: '#778899',
      alignSelf: 'center',
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