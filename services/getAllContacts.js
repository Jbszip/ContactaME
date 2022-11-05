import axios from "axios";

export default async function getContacts(username){
    const request = axios.post('https://contactosapi-production.up.railway.app/api/v1/contactos/miscontactos', {'username':username})
    return request.then(response => response.data)
}