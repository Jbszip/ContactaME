import axios from "axios";

export default async function createContactService(credentials,config){
    const {data} = await axios.post('https://contactosapi-production.up.railway.app/api/v1/contactos/add', credentials, config)
    return data
}