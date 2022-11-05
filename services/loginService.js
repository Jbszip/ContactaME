import axios from 'axios'

export default async function loginService (credentials){
  const {data} = await axios.post('https://contactosapi-production.up.railway.app/api/v1/user/login', credentials)
  console.log(data)
  return data
}
