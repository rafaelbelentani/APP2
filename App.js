import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login/index/';
import PaginaPrincipal from './src/pages/PaginaPrincipal/index/';
import Apontamento from './src/pages/Apontamento'
import Contarpecas from './src/pages/contarpecas';
import Pedidoadicional from './src/pages/pedidoadicional';
import Saldocliente from './src/pages/saldocliente';
import Fecharentrega from './src/pages/fecharentega';


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
        <Stack.Screen name="CS" component={Apontamento} />
        <Stack.Screen name="Contar Peças" component={Contarpecas} />
        <Stack.Screen name="Saldo Cliente" component={Saldocliente} />
        <Stack.Screen name="Pedido Adicional" component={Pedidoadicional} />
        <Stack.Screen name="Fechar Entrega" component={Fecharentrega} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
