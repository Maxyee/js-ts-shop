import Auth from '../Auth'
import axios from 'axios'
import jumpTo from '../Navigation'

const URL = 'https://zack-ecommerce-nodejs.herokuapp.com'

const serverCall = (config) => {
    if(Auth.user_token){
        const token = Auth.getToken()
        config.headers = {
            "authorization": token
        }
    }

    axios.interceptors.response.use(
        (response) => {
            return response
        },
        function(error){
            if(!error.response){
                error.response = {
                    data: 'net work error',
                    status: 500
                }
            }

            if(error.response.status===401){
                Auth.logout()
                jumpTo('/login')
                throw error
            }
            return Promise.reject(error)
        }
    )
    config.baseURL = URL
    return axios(config)
}
export default serverCall


export const login = (email, password) => {
    const body = {
        "credential": {
            "email": email,
            "password": password
        } 
    }
    return serverCall({
        method: 'POST',
        url: '/users/login',
        data: body
    })
    .then(res => {
        Auth.setUserToken(res.data.user_token)
        return res
    })
}

