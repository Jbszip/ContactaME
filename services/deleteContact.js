import axios from "axios";

export default async function deleteContact(contacto){
    const {data} = await axios.post('https://contactosapi-production.up.railway.app/api/v1/contactos/deletecontact',{'name':contacto})
    return data
}