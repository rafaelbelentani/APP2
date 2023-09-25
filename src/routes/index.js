import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../pages/Login/index'
import PaginaPrincipal from '../pages/PaginaPrincipal'
import CheckList from '../pages/CheckList'
import Contarpecas from "../pages/contarpecas";
import Pedidoadicional from "../pages/pedidoadicional";
import Fecharentrega from "../pages/fecharentega";
import Addcliente from "../pages/adicionarcliente";
import Select1 from "../pages/Apontamento/Select1";
import Saldocliente from "../pages/saldocliente;"
import CS from "..//"


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
            <Stack.Navigator>
            <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Pagina Principal"
            component={PaginaPrincipal}
            options={{ headerShown: false}}
            />

              <Stack.Screen
            name="Check List"
            component={CheckList}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="CS"
            component={CS}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Contar Peças"
            component={Contarpecas}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Saldo Cliente"
            component={Saldocliente}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Pedido Adicional"
            component={Pedidoadicional}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Fechar Entrega"
            component={Fecharentrega}
            options={{ headerShown: false}}
            />        
         
        </Stack.Navigator>
    )
}