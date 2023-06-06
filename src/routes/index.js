import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../pages/Login/index'
import PaginaPrincipal from '../pages/PaginaPrincipal'
import CheckList from '../pages/CheckList'


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
            name="Apontamento"
            component={Apontamento}
            options={{ headerShown: false}}
            />

         
        </Stack.Navigator>
    )
}