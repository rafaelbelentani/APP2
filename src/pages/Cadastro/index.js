import { fonts } from '@rneui/base';
import React, { useState } from 'react';
import { Text, View, Alert, Image, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import usuarioService from '../../services/UsuarioService';



export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [nome, setNome] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [isSelected, setSelected] = useState(false)
  const [errorNome, setErrorNome] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorTelefone, setErrorTelefone] = useState(null)
  const [errorSenha, setErrorSenha] = useState(null)
  const [isLoading, setLoading] = useState(false)
  
  let telefoneField = null

  const validar = () => {
    let error = false
    setErrorNome(null)
    setErrorEmail(null)
    setErrorTelefone(null)
    setErrorSenha(null)

    const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-A\-0-9]+\.)+[a-zA-Z]{2,}))$/
     if (nome ==null){
    setErrorNome("Preencha seu nome corretamente")
    error = true  
    } 

  if (!re.test(String(email).toLowerCase())){
    setErrorEmail("Preencha seu e-mail corretamente")
    error = true  
  } 
  if (!telefoneField.isValid()){
    setErrorTelefone("Preencha seu telefone corretamente")
    error = true  
  } 
  if (senha ==null){
    setErrorSenha("Preencha sua senha corretamente")
    error = true  
  }
  return !error
  }

  const salvar = () => {
    if(validar()){
      setLoading(true)

      let data = {      
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha,
      }

    usuarioService.cadastrar(data)
    .then((response) => {
      setLoading(false)
      const titulo = (response.data.status) ? "Sucesso!" : "Erro!"
      Alert.alert(titulo, response.data.mensagem)
      console.log(response.data)
    })
    .catch((error) => {
      setLoading(false)
      Alert.alert("Erro", "Houve um erro inesperado.")
    })
   
    }
  }


  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS == "ios" ? "padding": "height"}
    style = {[styles.container]}
    keyboardVerticalOffset={200}
    >

         <BackgroundImage
            source={require('../Login/logo.png')}
            style={styles.logo} 
            resizeMode='contain'
             />

 <Input  style={styles.containerMask}           
              placeholder= 'Nome'
              onChangeText={value => {
                setNome(value)
                setErrorNome(null)
              }}
              errorMessage={errorNome}
              
            />
            <Input style={styles.containerMask}            
              placeholder= 'E-mail'
              onChangeText={value => setEmail(value)}
              errorMessage={errorEmail}
            />

            

            <View style={styles.telefone} >
            <TextInputMask 
            placeholder='Telefone'
            type={'cel-phone'}
            options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
            validator: function(val, settings){
              if (val.length == 9){
                return true
              } else
              return false
            }
           }}
            
            value={telefone}        
            onChangeText={value => setTelefone(value)}
            keyboardType='phone-pad'
            returnKeyType='done'

            ref={(ref) => telefoneField = ref}
            style={styles.maskedInput}
            
            />
            </View>
            
             <Text style={styles.errorMessage}>{errorTelefone}</Text>

            <Input 
              placeholder= 'Senha'
              style={styles.input}
              errorMessage={errorSenha}
              onChangeText={value => setSenha(value)}
              secureTextEntry={true}
              />   

              <CheckBox 
                title="Eu aceito os termos de uso"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected}
                onPress={() => setSelected(!isSelected)}
              />        

            { isLoading &&
            <Text>Carregando...</Text>
            }


              {!isLoading &&
            <TouchableOpacity
             style={styles.cadastrar}
             onPress={ () => {salvar ()} }
            >
            <Text style={styles.botaoText} >Cadastrar</Text>
            </TouchableOpacity>
            }
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    marginBottom: 50,
    },

    barra: {
      width: "110%",
      padding: 5,
      cadastrar: 'center',
      marginBottom: -100,
      
    
    },

    


  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center'
    },
    
 
    botao: {
      width: 300,
      height: 42,
      backgroundColor: '#1E90FF',
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      },

   
    botaoText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      },

    cadastrar: {
      width: 300,
      height: 42,
      backgroundColor: '#1E90FF',
      marginTop: 50,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 10,
      },

    maskedInput: {
      flexGrow: 1,
      height: 40,
      fontSize: 18,
      borderBottomColor: "#999",
      borderBottomWidth: 1,
      borderStyle: "solid",
      alignSelf: "flex-start",
      marginBottom: -1,
      marginTop: 10,
      },

    containerMask: {
      flexDirection: "row",
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      
      },

    telefone: {
      flexDirection: "row",
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 0,
      },

    errorMessage:{
      alignSelf: "flex-start",
      marginLeft: 15,
      color: "red",     
      fontSize: 12,
      marginTop: -5,
      marginBottom: 10,
      },

      input: {
      marginBottom: 10,
      marginLeft: 5,
      marginRight: 10,
      
      

      },

    
     
     

  
});