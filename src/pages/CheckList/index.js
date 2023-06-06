import { Alert, Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Input, CheckBox } from 'react-native-elements';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { ModalPicker } from '../../Components/Selected/ModalPicker';



export default function CheckList({navigation}) {
const [isSelected, setSelected] = useState(false);
const [isSelected2, setSelected2] = useState(false);
const [isSelected3, setSelected3] = useState(false);
const [isSelected4, setSelected4] = useState(false);
const [isSelected5, setSelected5] = useState(false);
const [isSelected6, setSelected6] = useState(false);
const [isSelected7, setSelected7] = useState(false);
const [isSelected8, setSelected8] = useState(false);
const [isSelected9, setSelected9] = useState(false);
const [isSelected10, setSelected10] = useState(false);
const [isSelected11, setSelected11] = useState(false);
const [isSelected12, setSelected12] = useState(false);
const [isSelected13, setSelected13] = useState(false);
const [isSelected14, setSelected14] = useState(false);
const [isSelected15, setSelected15] = useState(false);
const [isSelected16, setSelected16] = useState(false);
const [chooseData, setchooseData] = useState('Selecione o Apartamento')
const [isModalVisible, setisModalVisible] = useState(false)



const changeModalVisibility = (bool) =>{
  setisModalVisible(bool)
}

const setData = (option) => {
    setchooseData(option)
}


function concluir(){
  Alert.alert("Concluido!", "Um relatório com essas informações foi enviado para o e-mail xxxxxxxxxxxx.")
}



return (
  <KeyboardAvoidingView 
  behavior={Platform.OS == "ios" ? "padding": "height"}
  style = {[styles.container]}
  keyboardVerticalOffset={100}
  >
        <ScrollView style={styles.container}>
    
          < BackgroundImage
            source={require('../Login/logo.png')}
            style={styles.logo} 
            resizeMode='contain'
             />

          <TouchableOpacity style={styles.cadastrar}
            onPress={() => changeModalVisibility(true)}
          >
            <Text style={styles.botaoText}>{chooseData}</Text>
          </TouchableOpacity>

          <Modal
          transparent={true}
          animationType='fade'
          visible={isModalVisible}
          nRequestClose={() => changeModalVisibility(false)}
          >

            <ModalPicker
            changeModalVisibility={changeModalVisibility}
            setData={setData}            
            />
            </Modal>
         
       
  
      
            
                <CheckBox 
                title="Lençol"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected}
                onPress={() => setSelected(!isSelected)}
              />       

                <CheckBox 
                title="Endredon"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected2}
                onPress={() => setSelected2(!isSelected2)}
              />       

                <CheckBox 
                title="Fronha"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected3}
                onPress={() => setSelected3(!isSelected3)}
              />       

              <CheckBox 
                title="Travesseiros"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected4}
                onPress={() => setSelected4(!isSelected4)}
              />       

              <CheckBox 
                title="Frigobar"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected5}
                onPress={() => setSelected5(!isSelected5)}
              />  

              <CheckBox 
                title="Frigobar"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected6}
                onPress={() => setSelected6(!isSelected6)}
              />  

                <CheckBox 
                title="Sabonete líquido"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected7}
                onPress={() => setSelected7(!isSelected7)}
              />  

              <CheckBox 
                title="Sabonete Barra"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected8}
                onPress={() => setSelected8(!isSelected8)}
                /> 

                <CheckBox 
                title="Toucas"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected9}
                onPress={() => setSelected9(!isSelected9)}
                /> 

                <CheckBox 
                title="Chão"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected10}
                onPress={() => setSelected10(!isSelected10)}
                />  

                <CheckBox 
                title="Janelas"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected11}
                onPress={() => setSelected11(!isSelected11)}
                />  

                <CheckBox 
                title="Batente de portas"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected12}
                onPress={() => setSelected12(!isSelected12)}
                />  

                <CheckBox 
                title="Espelho"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected13}
                onPress={() => setSelected13(!isSelected13)}
                />  

                <CheckBox 
                title="Televisão"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected14}
                onPress={() => setSelected14(!isSelected14)}
                />  

                <CheckBox 
                title="Luminárias"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected15}
                onPress={() => setSelected15(!isSelected15)}
                />  

                <CheckBox 
                title="Ar Condicionado"
                checkedIcon="check" 
                uncheckedIcon="square-o" 
                checkedColor='green' 
                uncheckedColor='red'
                checked={isSelected16}
                onPress={() => setSelected16(!isSelected16)}
                />

              <TextInput 
            placeholder= 'Observação'
            style={styles.input}            
            />

             <TouchableOpacity
             style={styles.cadastrar}
             onPress={ concluir }
             
            >
            <Text style={styles.botaoText} >Concluir</Text>
            </TouchableOpacity>

            </ScrollView>
            </KeyboardAvoidingView> 
        


          
  );
}


const styles = StyleSheet.create({

  container: {
    
    marginBottom: 20,
    },

  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center'
    },

    botaoText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      alignSelf: 'center',
      
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
      marginBottom: 15,
      
    },

    input: {
      width: '90%',
      backgroundColor: '#DDD',
      height: 60,
      borderRadius: 10,
      alignSelf: 'center',
      fontSize: 18,
      textAlign: 'center',
      marginTop: 20,

        },

   
 
  });