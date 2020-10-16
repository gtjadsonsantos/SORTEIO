import axios from 'axios'

const token:any = `Bearer ${sessionStorage.getItem("token")}`

export const URL = ""

const api = axios.create({
    baseURL: URL,
    headers: {
       "Authorization": token
   }
})

export default api