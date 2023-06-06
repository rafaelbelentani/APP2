import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login/index/';
import PaginaPrincipal from './src/pages/PaginaPrincipal/index/';
import Cadastro from './src/pages/Cadastro/index/';
import Recuperar from './src/pages/Recuperar/index';
import CheckList from './src/pages/CheckList';
import Apontamento from './src/pages/Apontamento'


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Pagina Principal" component={PaginaPrincipal} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Recuperar" component={Recuperar} />
        <Stack.Screen name="Check List" component={CheckList} />
        <Stack.Screen name="Apontamento" component={Apontamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
