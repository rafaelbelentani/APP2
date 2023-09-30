import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "../util";


class ColetaService{

    async cadastrar(data){
            let token = await AsyncStorage.getItem("TOKEN")
        return axios({
            url: Config.API_URL + "coleta/cadastrar",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + token

                     }
        }).then((response) =>{
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

}

const coletaService = new ColetaService()
export default coletaService