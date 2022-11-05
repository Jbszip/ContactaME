import axios from 'axios'

export default async function Verify(token){
    const tokenToSend = {'token': token}
    const logeado = await axios.post('https://contactosapi-production.up.railway.app/api/v1/user/verify', tokenToSend)
    return logeado
}