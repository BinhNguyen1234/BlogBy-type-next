import axios from "axios"
import {getCookie, deleteCookie} from "../ulitlity/ManupulateCookie"
import {useDispatch} from "react-redux"
import {LOGOUT} from "../feature/login"
interface constructorType {
    method: string,
    url: string,
    data: any,
    headers?: any
}
class APIAuth {
    dispatch = useDispatch()
    config =null;
    callAPI( config: constructorType,token: string| null | undefined){
         axios.interceptors.response.use(
            (response) => {
                return response
            },
            (e) => {
                if(e.response.status !== 401){
                    return Promise.reject(e)
                }
                return axios({...config, data: null,url: "/api/v1/getuser", headers:{Authorization: `Bearer ${getCookie("rf")}`}})
                .then((response)=>{
                    return axios({...config, headers:{Authorization: `Bearer ${getCookie('acc')}`}})
                })
                .catch((e)=>{
                    this.dispatch(LOGOUT(null))
                    return Promise.reject(e)})
            }
         )
        return axios({...config,headers:{Authorization: `Bearer ${token}`,...config.headers}})
    }
}

export default  APIAuth