import axios from "axios";

export default async function signupService(credentials){
    const {data} = await axios.post('https://contactosapi-production.up.railway.app/api/v1/user/signup', credentials)
    return data
}